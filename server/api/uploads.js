const router = require('express').Router();
const googleCV = require('../db/models/googleCVAPI');
const { Location, Label } = require('../db/models');

module.exports = router;
router.post('/', async (req, res, next) => {
  try {
    const files = req.files.files;
    let arrOfFilePaths = [];
    if (Array.isArray(files)) {
      files.forEach(file => arrOfFilePaths.push(file.path));
    } else {
      arrOfFilePaths.push(files.path);
    }

    let labels = await Label.findAll({ attributes: ['id', 'name'] });

    await googleCV.setLabels(arrOfFilePaths);
    const locationName = await googleCV.getMostFrequentCities(labels, Label);

    const locations = await Promise.all(
      locationName.map(locName =>
        Location.findOne({
          where: { name: locName }
        })
      )
    );
    console.log('location names -------------',locationName)
    res.json(locations);
  } catch (error) {
    next(error);
  }
});

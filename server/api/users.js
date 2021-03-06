const router = require('express').Router();
const { User } = require('../db/models');
const instagramAPI = require('../db/models/instagramAPI');
const googleCV = require('../db/models/googleCVAPI');
const { Location, Label } = require('../db/models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/instagram', async (req, res, next) => {
  try {
    const instagramImages = await instagramAPI.getImages();

    res.json(instagramImages).status(200);
  } catch (err) {
    next(err);
  }
});

router.get('/instagramLocs', async (req, res, next) => {
  try {
    const instagramImages = await instagramAPI.getImages();
    const images = [...instagramImages];
    await googleCV.setLabels(images);
    let labels = await Label.findAll({ attributes: ['id', 'name'] });

    const locationName = await googleCV.getMostFrequentCities(labels, Label);
    const locations = await Promise.all(
      locationName.map(locName =>
        Location.findOne({
          where: { name: locName }
        })
      )
    );
    
    res.json(locations);
  } catch (error) {
    console.error(error);
  }
});

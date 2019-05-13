const router = require('express').Router();
const { User } = require('../db/models');
const instagramAPI = require('../db/models/instagramAPI');
const googleCV = require('../db/models/googleCVAPI');
const { Location, Label } = require('../db/models');
let redisClient;

if (process.env.HEROKU_REDIS_RED_URL) {
  redisClient = require('redis').createClient(process.env.HEROKU_REDIS_RED_URL);
} else {
  redisClient = require('redis').createClient();
}
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
    let labels;
    redisClient.get('idAndLabels', async function(reply) {
      if (reply) {
        labels = JSON.parse(reply);
      } else {
        labels = await Label.findAll({ attributes: ['id', 'name'] });
        redisClient.set('idAndLabels', JSON.stringify(labels));
      }
    });
    const instagramImages = await instagramAPI.getImages();
    const images = [...instagramImages];

    await googleCV.setLabels(instagramImages);
    const locations = await googleCV.getMostFrequentCities(labels, Label);

    const locationPromises = locations.map(
      async locName =>
        await Location.findOne({
          where: { name: locName },
          attributes: ['code']
        })
    );
    const locationCodes = (await Promise.all(locationPromises)).map(
      loc => loc.dataValues.code
    );

    res.json({ images, locationCodes }).status(200);
  } catch (err) {
    next(err);
  }
});

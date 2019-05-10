const vision = require('@google-cloud/vision');

class GoogleCVAPI {
  constructor() {
    this.labels = [];
  }
  async setLabels(arrFiles) {
    const client = new vision.ImageAnnotatorClient({
      keyFilename: './API.json'
    });
    let file = '';
    while (arrFiles.length > 0) {
      file = arrFiles.pop();
      // Performs label detection on the image file

      const [result] = await client.labelDetection(file);
      const labels = result.labelAnnotations;
      labels.forEach(label => {
        this.labels.push(label.description);
      });
    }
  }

  async getMostFrequentCities(labels, Label) {
    const uniqueLabelOutput = new Set([]);

    this.labels.forEach(label =>
      labels.forEach(labelEl => {
        let foundLabel = label.toLowerCase();
        if (foundLabel.includes(labelEl.name)) {
          uniqueLabelOutput.add(labelEl.name);
        }
      })
    );
    let setArray = Array.from(uniqueLabelOutput);

    let locationNames = await Promise.all(
      setArray.map(async currLabel => {
        let labelSearchResult = await Label.findOne({
          where: {
            name: currLabel
          }
        });

        let location = await labelSearchResult.getLocations();

        const locationList = location.map(currLocation => {
          return currLocation.dataValues.name;
        });

        return locationList;
      })
    );

    let locationOccurence = {};

    locationNames.forEach(currLocationName => {
      currLocationName.forEach(names => {
        if (!locationOccurence[names]) {
          locationOccurence[names] = 1;
        } else {
          locationOccurence[names] += 1;
        }
      });
    });

    let bestCities = [];
    let cityMatches = setArray.length;

    for (let key in locationOccurence) {
      if (locationOccurence[key] === cityMatches && bestCities.length < 5) {
        bestCities.push(key);
      }
    }

    return bestCities;
  }
}

const googleCV = new GoogleCVAPI();

module.exports = googleCV;

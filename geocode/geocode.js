const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=Dx0jhtAuSI5bVyFAX80O1M0KSF2fgOXY&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to servers.');
    } else if (body.info.statuscode === 400) {
      callback(body.info.messages);
    } else if (body.info.statuscode === 0) {
      callback(undefined, {
        address: body.results[0].locations[0].adminArea5,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;

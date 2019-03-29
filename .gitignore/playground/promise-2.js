const request = require('request');

var geocodeAddress = (address) => {
  return new Promise ((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=Dx0jhtAuSI5bVyFAX80O1M0KSF2fgOXY&location=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to servers.');
      } else if (body.info.statuscode === 400) {
        reject(body.info.messages);
      } else if (body.info.statuscode === 0) {
        resolve({
          address: body.results[0].providedLocation.location,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    });
  });
};

geocodeAddress('98203').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});

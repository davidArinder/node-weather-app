const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
.help()
.alias('help', 'h')
.argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=Dx0jhtAuSI5bVyFAX80O1M0KSF2fgOXY&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.info.statuscode === 400) {
    throw new Error('Unable to find that address.');
  }

  const lat = ;
  const lng;
  const weatherUrl = `https://api.darksky.net/forecast/90e843684bc6864964be658d29c7a359/${lat},${lng}`
  console.log(response.data);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
});

const TuyAPI = require('tuyapi');

const device = new TuyAPI({
  id: 'd71ae7e582cc24dd39k9hb',
  key: "]1(>=D]zkg9XfHG4",
  issueGetOnConnect: false});

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

(async () => {
  await device.find();
  console.log("hello");

  await device.connect();
 console.log("Device Connected")
  let status = await device.get();

  console.log(`Current status: ${status}.`);

  await device.set({set: !status});

  status = await device.get();

  console.log(`New status: ${status}.`);

  device.disconnect();
})();
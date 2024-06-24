const TuyAPI = require('tuyapi');

const device = new TuyAPI({
  id: 'd71ae7e582cc24dd39k9hb',
  key: "]1(>=D]zkg9XfHG4",
  issueGetOnConnect: false
});

// Function to toggle the device state
async function toggleDeviceState() {
  try {
    await device.find();
    await device.connect();
    const status = await device.get();
    await device.set({set: !status});
    device.disconnect();
  } catch (error) {
    console.error('Error toggling device state:', error);
  }
}

module.exports = { toggleDeviceState };

// src/services/tuyaService.js
const TuyaCloud = require('@tuyapi/cloud');

const tuya = new TuyaCloud({
  key: 'dwn8xrpech753qywtu9f',
  secret: '4056ef19d0e843fc9a6bac47f088b5db',
  region: 'in', // or 'eu', 'cn', 'in' depending on your location
});

async function getDevices() {
  try {
    const response = await tuya.request({
      method: 'GET',
      path: '/v1.0/iot-03/devices',
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function controlDevice(deviceId, commands) {
  try {
    const response = await tuya.request({
      method: 'POST',
      path: `/v1.0/iot-03/devices/${deviceId}/commands`,
      body: {
        commands,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getDevices,
  controlDevice,
};

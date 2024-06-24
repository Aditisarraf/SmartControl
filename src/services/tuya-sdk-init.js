import { TuyaSdk, initWithTuyaInfo } from '@owowagency/react-native-tuya';

// Replace with your actual credentials
const APP_KEY = 'YOUR_APP_KEY';
const APP_SECRET = 'YOUR_APP_SECRET';

initWithTuyaInfo({
  appId: APP_KEY,
  appSecret: APP_SECRET,
});

export default TuyaSdk; // Make the initialized SDK instance available for import

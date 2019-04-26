import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS } from 'react-native';

const configure = () => {
 PushNotification.configure({

   // eslint-disable-next-line no-unused-vars
   onRegister(token) {
     //process token
   },

   onNotification(notification) {
     // process the notification
     // required on iOS only
     notification.finish(PushNotificationIOS.FetchResult.NoData);
   },

   permissions: {
     alert: true,
     badge: true,
     sound: true
   },

   popInitialNotification: true,
   requestPermissions: true,

 });
};

const localNotification = (title, message) => {
  PushNotification.localNotification({
    autoCancel: true,
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_notification',
    //bigText: 'My big text that will be shown when notification is expanded',
    //subText: 'This is a subText',
    color: 'green',
    //vibrate: true,
    //vibration: 300,
    title,
    message,
    //playSound: true,
    //soundName: 'default',
    //actions: '["Accept", "Reject"]',
  });
 };

export {
 configure,
 localNotification
};

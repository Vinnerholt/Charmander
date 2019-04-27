/* eslint-disable max-len */
import PushNotification from 'react-native-push-notification';

export default class NotifService {

  constructor(/*onRegister,*/ onNotification) {
    this.configure(/*onRegister,*/ onNotification);
  }

  configure(/*onRegister,*/ onNotification, gcm = '') {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      //onRegister, //this._onRegister.bind(this),

      // (required) Called when a remote or local notification is opened or received
      onNotification, //this._onNotification,

      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: gcm,
    });
  }

  /**
   * Sends a local notification
   * 
   * @param {string} title 
   * @param {string} message 
   * @param {*} notifId
   */
  localNotif(title, message, notifId) {
    PushNotification.localNotification({
      /* iOS and Android properties */
      title,
      message,
      notifId
    });
  }
}

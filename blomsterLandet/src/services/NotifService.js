/**
 * Notification service used to send notifications from within the app.
 * The class is likely able to be expanded to also handle remote notifications
 */

/* eslint-disable max-len */
import PushNotification from 'react-native-push-notification';

export default class NotifService {

  /**
   * @param {this.props.navigation} navigation The navigation prop to a screen using react-navigation.
   * The param is needed to make it possible for the notification to redirect the user to another screen.
   */
  constructor(navigation) {
    this.nav = navigation;
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
   * Sends a local notification, when pressed will take you to the
   * expanded version of this notification
   * 
   * @param {string} title 
   * @param {string} message 
   * @param {*} notifId
   */
  localNotif(title, message, notifId) {
    this.configure(this.navigateToExpandedNotif.bind(this, notifId));
    PushNotification.localNotification({
      /* iOS and Android properties */
      title,
      message,
      notifId
    });
  }

  navigateToExpandedNotif(notifId) {
    this.nav.navigate('Notifications', { notifId });
  }
}

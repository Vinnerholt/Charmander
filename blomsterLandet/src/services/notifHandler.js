import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
import NavigationService from '../services/NavigationService';
import { store } from '../App';
import * as actions from '../actions';

export const initNotifications = async() => {
    //Loads initial notifications
    store.dispatch(await actions.initNotifications());
    checkPermissions();
    createChannel();
    mountNotifListeners();
};

/**
 * Checks wether the user has relevant 
 * permissions the receive notifications
 */
const checkPermissions = async() => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        // user has permissions
    } else {
        // user doesn't have permission
        firebase.messaging().requestPermission()
            .then(() => {
                // User has authorised  
            })
            .catch(error => {
                // User has rejected permissions
                console.log(error);  
            });
    }
};

function createChannel() {
    //Sets up a channel where notifications can be received
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', 
        firebase.notifications.Android.Importance.Max).setDescription('My apps test channel');

    // Create the channel
    firebase.notifications().android.createChannel(channel);
}

function mountNotifListeners() {
    setOnNotification();
    setOnNotificationDisplayed();
    setOnNotificationOpened();  
}

/**
 * Gets called when a notification is received by the system,
 * not to be confused whith setOnNotificationDisplayed.
 */
function setOnNotification() {
    firebase.notifications().onNotification((notification) => {
        // Process your notification as required

        if (Platform.OS === 'android') {
            notification
                .setSound('default')
                .android.setChannelId('test-channel') // e.g. the id you chose above
                .android.setSmallIcon('ic_stat_notification') // create this icon in Android Studio
                .android.setColor('#000000') // you can set a color here
                .android.setPriority(firebase.notifications.Android.Priority.High);
            } else if (Platform.OS === 'ios') {
            notification.ios.setBadge(notification.ios.badge);
            }

        firebase.notifications().displayNotification(notification);
    });
}

/**
 * This function gets called when a notification is displayed
 */
function setOnNotificationDisplayed() {
    firebase.notifications()
        .onNotificationDisplayed(async (notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification
        const notif = convertNotification(notification);
        

        store.dispatch(actions.addNotification(notif));
    });
}

/**
 * This function gets called when a push notification is pressed on
 */
function setOnNotificationOpened() {
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened(notificationOpen => {
        //const action = notificationOpen.action;
        const notification = convertNotification(notificationOpen.notification);

        
        store.dispatch(actions.expandNotification(notification));
        NavigationService.navigate('Notifications');
    }); 
}

/**
 * Converts a firebase notification into a notif object
 * that is used to store the notifications
 * 
 * @param {Notification} notification 
 */
const convertNotification = (notification) => {
    const notif = {
        notifId: notification.notificationId,
        title: notification.title,
        description: notification.body,
        icon: 'default',
        imageURL: `../../resources/images/${notification.data.imageURL}`,
        type: notification.data.type,
        refKey: notification.data.refKey,
        read: false
    };
    return notif;
};
/*export function unmountNotifListeners() {
    this.notificationDisplayedListener();
    this.notificationListener();  
}*/

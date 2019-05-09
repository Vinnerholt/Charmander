import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
import jsonStorage from './jsonStorage';
import NotifObservable from '../services/observers/NotifObservable';

const notifPath = 'notifications';
export function initNotifications() {
    checkPermissions();
    createChannel();
    mountNotifListeners();
}

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
    //setOnNotificationOpened();  
}

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

function setOnNotificationDisplayed() {
    firebase.notifications()
        .onNotificationDisplayed(async (notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification
        
        const notif = {
            notifId: notification.notificationId,
            title: notification.title,
            description: notification.body,
            icon: 'default',
            imageURL: `../../resources/images/${notification.data.imageURL}`,
            type: notification.data.type,
            pointer: 0,
            read: false
        };

        let file = null;
        await jsonStorage.getItem(notifPath).then(item => {
            item.notifications.unshift(notif);
            file = item;
          }).catch(() => {
            const start = {
              notifications: []
            };
            start.notifications.push(notif);
            file = start;
          });

        await jsonStorage.setItem(notifPath, file);

        NotifObservable.notify();
    });
}

/*function setOnNotificationOpened() {
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened(notificationOpen => {
        const action = notificationOpen.action;
        const notification = notificationOpen.notification;
    }); 
}*/

/*export function unmountNotifListeners() {
    this.notificationDisplayedListener();
    this.notificationListener();  
}*/

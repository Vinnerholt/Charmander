import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

export function initNotifications() {
    checkPermissions();
    createChannel();
    mountNotifListeners();
}

function checkPermissions() {
    const enabled = firebase.messaging().hasPermission();
    if (enabled) {
        // user has permissions
        console.log('user has permissions');
    } else {
        // user doesn't have permission
        console.log('user doesnt have permissions');
        firebase.messaging().requestPermission()
            .then(() => {
                // User has authorised  
            })
            .catch(error => {
                // User has rejected permissions
                console.log(error);  
            });
    }
}

function createChannel() {
    //Sets up a channel where notifications can be received
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', 
        firebase.notifications.Android.Importance.Max).setDescription('My apps test channel');

    // Create the channel
    firebase.notifications().android.createChannel(channel);
}

function mountNotifListeners() {
    this.notificationDisplayedListener = firebase.notifications()
        .onNotificationDisplayed((notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        console.log('Received');
        console.log(notification.notificationId);
        
        const notifObject = {
            notifId: notification.notificationId,
            title: notification.title,
            description: notification.body,
            icon: 'default',
            imageURL: `../../resources/images/${notification.data.imageURL}`,
            type: notification.data.type,
            pointer: 0,
            read: false
        };
        //writeNotifToJSON(notifObject);
        
    });

    this.notificationListener = firebase.notifications().onNotification((notification) => {
        // Process your notification as required

        //Hit kommer du när du väl får notisen, och så väljer den olika inställningar
        //beroende på vilken platform du är på.
        if (Platform.OS === 'android') {
            const localNotification = new firebase.notifications.Notification()
                .setNotificationId(notification.notificationId)
                .setTitle(notification.title)
                .setSubtitle(notification.subtitle)
                .setBody(notification.body)
                .setData(notification.data)
                .setSound('default')
                .android.setChannelId('test-channel') // e.g. the id you chose above
                .android.setSmallIcon('ic_stat_notification') // create this icon in Android Studio
                .android.setColor('#000000') // you can set a color here
                .android.setPriority(firebase.notifications.Android.Priority.High);
    
                //Här skickas notisen (till sig själv), med andra ord visas
            firebase.notifications().displayNotification(localNotification);
            } else if (Platform.OS === 'ios') {
            const localNotification = new firebase.notifications.Notification()
                .setNotificationId(notification.notificationId)
                .setTitle(notification.title)
                .setSubtitle(notification.subtitle)
                .setBody(notification.body)
                .setData(notification.data)
                .ios.setBadge(notification.ios.badge);
    
            firebase.notifications()
                .displayNotification(localNotification)
                .catch(err => console.error(err));
            }
        });
}

export function unmountNotifListeners() {
    this.notificationDisplayedListener();
    this.notificationListener();  
}

function writeNotifToJSON(notification) {
 
}

function readNotif() {
    RNFS.readFile(RNFS.DocumentDirectoryPath + '/test.json', 'utf8').then(result => {
        console.log(result[0]);
        return result;
    });
}

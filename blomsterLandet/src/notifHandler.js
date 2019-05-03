import firebase, { Notification } from 'react-native-firebase';

export async function initNotifications() {
    let enabled = await firebase.messaging().hasPermission();
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
            });
    }
}

export function mountListeners () {
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((Notification) => {
        // Process your notification as required
        // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    });
    this.notificationListener = firebase.notifications().onNotification((Notification) => {
        // Process your notification as required
    });
}

export function unmountListeners () {
    this.notificationDisplayedListener();
    this.notificationListener();  
}
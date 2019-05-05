/**
 * Screen with development tools that can be used to e.g
 * live-test the code.
 */
import React from 'react';
import { View, Button } from 'react-native';
import firebase from 'react-native-firebase';

class DevScreen extends React.Component {

    sendLocalNotif = () => {
        const localNotification = new firebase.notifications.Notification()
        .setNotificationId('notificationId')
        .setTitle('My notification title')
        .setBody('My notification body')
        .setData({
            key1: 'value1',
            key2: 'value2',
        })
        .android.setChannelId('test-channel')
        .android.setSmallIcon('ic_launcher')
        .android.setPriority(firebase.notifications.Android.Priority.Max);


        firebase.notifications().displayNotification(localNotification);
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Button 
                    title='Send local Notif v22'
                    onPress={() => this.sendLocalNotif()} 
                />
            </View>
            
        );
    }
}

export default DevScreen;

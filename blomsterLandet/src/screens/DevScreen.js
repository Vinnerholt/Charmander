/**
 * Screen with development tools that can be used to e.g
 * live-test the code.
 */
import React from 'react';
import { View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import jsonStorage from '../services/jsonStorage';

class DevScreen extends React.Component {

    sendLocalNotif = () => {
        const localNotification = new firebase.notifications.Notification()
        .setNotificationId('notificationId')
        .setTitle('My notification title')
        .setBody('My notification body')
        .setData({
            imageURL: 'value1',
            type: 'value2',
        })
        .android.setChannelId('test-channel')
        .android.setSmallIcon('ic_launcher')
        .android.setPriority(firebase.notifications.Android.Priority.Max);


        firebase.notifications().displayNotification(localNotification);
    };

    readFile = () => {
        jsonStorage.getItem('notifications').then(r => {
            console.log(r);
        });
    };

    deleteFile = () => {
        jsonStorage.removeItem('notifications').then(() => {
            console.log('deleted');
        });
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Button 
                    title='Send local Notif v22'
                    onPress={() => this.sendLocalNotif()} 
                />
                 <Button 
                    title='read file'
                    onPress={() => this.readFile()}
                 />
                  <Button 
                    title='delete file'
                    onPress={() => this.deleteFile()}
                  />
            </View>
            
        );
    }
}

export default DevScreen;

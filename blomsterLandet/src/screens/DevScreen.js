/**
 * Screen with development tools that can be used to e.g
 * live-test the code.
 */
import React from 'react';
import { View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import RNFS from 'react-native-fs';

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

    addFile = () => {
        // eslint-disable-next-line import/newline-after-import
        // eslint-disable-next-line global-require
        const path = RNFS.DocumentDirectoryPath + '/test.txt';
        const start = {
            notifications: [{ title: 'titelnn' }]
        };

        RNFS.writeFile(path, JSON.stringify(start), 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN!');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
    appendFile = () => {
        const notifObject = {
            notifId: 'ssss',
            title: 'titel'
        };
        const path = RNFS.DocumentDirectoryPath + '/test.txt';

        RNFS.readFile(RNFS.DocumentDirectoryPath + '/test.txt', 'utf8').then(result => {
            const json = JSON.parse(result);
            json.notifications.push(notifObject);
            RNFS.writeFile(path, JSON.stringify(json), 'utf8');
        });
    }

    readFile = () => {
        RNFS.readFile(RNFS.DocumentDirectoryPath + '/test.txt', 'utf8').then(result => {
            console.log(result);
        });
    };

    deleteFile = () => {
        RNFS.unlink(RNFS.DocumentDirectoryPath + '/test.txt');
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Button 
                    title='Send local Notif v22'
                    onPress={() => this.sendLocalNotif()} 
                />
                 <Button 
                    title='Create file'
                    onPress={() => this.addFile()}
                 />
                 <Button 
                    title='read file'
                    onPress={() => this.readFile()}
                 />
                  <Button 
                    title='append file'
                    onPress={() => this.appendFile()}
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

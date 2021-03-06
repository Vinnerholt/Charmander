/**
 * Screen with development tools that can be used to e.g
 * live-test the code.
 */
import React from 'react';
import { View, Button } from 'react-native';
import firebase from 'react-native-firebase';
import jsonStorage from '../services/jsonStorage';
import NotifObservable from '../services/observers/NotifObservable';
import plantHandler from './../services/plantHandler';
import firestoreHandler from '../services/firestoreHandler';

class DevScreen extends React.Component {

    sendLocalNotif = () => {
        const randomNotifId = Math.floor(Math.random() * 10000).toString();
        const localNotification = new firebase.notifications.Notification()
            .setNotificationId(randomNotifId)
            .setTitle(randomNotifId)
            .setBody('My notification body')
            .setData({
                imageURL: 'value1',
                type: 'product',
                refKey: 'ros'
            })
            .android.setChannelId('test-channel')
            .android.setSmallIcon('ic_launcher')
            .android.setPriority(firebase.notifications.Android.Priority.Max);


        firebase.notifications().displayNotification(localNotification);
    };

    readFile = () => {
        jsonStorage.getItem('myPlants').then(r => {
            console.log(r);
        });
    };

    deleteFile = () => {
        jsonStorage.removeItem('notifications').then(() => {
            console.log('deleted');
        });
    };

    checkSingleton = () => {
        console.log(NotifObservable().getInstance());
    }

    makeAnOrder = () => {
        const ref = firebase.firestore().collection('products').doc('tomatplanta');
        const order = {
            amount: 11,
            buyer: 'Peter',
            product: ref
        };
        firestoreHandler.placeOrder(order);
    }

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
                <Button
                    title='Check singleton'
                    onPress={() => this.checkSingleton()}
                />
                <Button
                    title='Create dummyPlantList'
                    onPress={async () => plantHandler.createDummyFile()}
                />
                <Button
                    title='Make an order'
                    onPress={() => this.makeAnOrder()}
                />
            </View>

        );
    }
}

export default DevScreen;

import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image, ImageBackground, Platform } from 'react-native';
import firebase from 'react-native-firebase';

import { Header } from './components/common/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as firebaseHandler from './firebaseHandler';
import * as notifHandler from './notifHandler';
import NotificationScreen from './screens/NotificationScreen';
import PlantDetailScreen from './screens/PlantDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/ShopScreen';
import DevScreen from './screens/DevScreen';

export const TabNavigator = createBottomTabNavigator({
    Shop: ShopScreen,
    Plants: PlantDetailScreen,
    Notifications: NotificationScreen,
    Profile: ProfileScreen,
    Dev: DevScreen
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName;
            let tintColor;
            if (routeName === 'Shop') {
                iconName = 'local-grocery-store';
                tintColor = focused ? '#adc22d' : '#000';
            } else if (routeName === 'Plants') {
                iconName = 'local-florist';
                tintColor = focused ? '#adc22d' : '#000';
            } else if (routeName === 'Notifications') {
                iconName = 'notifications';
                tintColor = focused ? '#adc22d' : '#000';
            } else if (routeName === 'Profile') {
                iconName = 'person';
                tintColor = focused ? '#adc22d' : '#000';
            } else if (routeName === 'Dev') {
                iconName = 'developer-mode';
                tintColor = focused ? '#adc22d' : '#000';
            }
            return <Icon name={iconName} fontSize={30} flex={1} size={25} color={tintColor} />;
        }
    })
}
);

const TabNavigatorContainer = createAppContainer(TabNavigator);

//The main application
class App extends React.Component {
    componentWillMount() {
        //Connects App to firebase.
        //firebaseHandler.initializeApp();
    }
    componentDidMount() {
        notifHandler.initNotifications();
        //Build a channel
        //Tydligen måste man bygga en kanal som notisen tas emot på, jag döpte den till test channel.
        //Importance av kanalen måste vara high, annars visas den inte om den drop down notis, utan bara i bakgrunden.
        const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.High)
        .setDescription('My apps test channel');

        // Create the channel
        firebase.notifications().android.createChannel(channel);
        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
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
    componentWillUnmount() {
        this.notificationDisplayedListener();
        this.notificationListener();  
    }
    render() {
        return (
            <ImageBackground 
                // eslint-disable-next-line global-require
                source={require('./resources/images/page-content-bg.png')}
                style={{ width: '100%', height: '100%' }}
            >
                <Header>
                    <Image
                        style={{ width: 55, height: 36 }}
                        // eslint-disable-next-line global-require
                        source={require('./resources/images/blomsterlandet_logo.png')}
                    />
                </Header>
                <TabNavigatorContainer />
            </ImageBackground>
        );
    }
}

export default App; 

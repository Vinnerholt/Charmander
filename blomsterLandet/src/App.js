import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image, ImageBackground } from 'react-native';
import { Header } from './components/common/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as firebaseHandler from './firebaseHandler';

import NotificationScreen from './screens/NotificationScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/ShopScreen';

const TabNavigator = createBottomTabNavigator({
    Shop: ShopScreen,
    Plants: HomeScreen,
    Notifications: NotificationScreen,
    Profile: ProfileScreen
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
        firebaseHandler.initializeApp();
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

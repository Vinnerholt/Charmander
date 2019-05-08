import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image, ImageBackground } from 'react-native';

import { Header } from './components/common/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as notifHandler from './services/notifHandler';

import NotificationScreen from './screens/NotificationScreen';
import MyPlantScreen from './screens/myplants/MyPlantScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/shop/ShopScreen';
import DevScreen from './screens/DevScreen';

export const TabNavigator = createBottomTabNavigator({
    Shop: ShopScreen,
    Plants: MyPlantScreen,
    Notifications: NotificationScreen,
    Profile: ProfileScreen,
    Dev: DevScreen
},
    // Adding icons to the navigation bar.
    // Might have to change the cases if languaged in the app is changed to swedish as
    // they are based on the labels on the navigation tabs. 
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Shop':
                        iconName = 'local-grocery-store';
                        break;
                    case 'Plants':
                        iconName = 'local-florist';
                        break;
                    case 'Notifications':
                        iconName = 'notifications';
                        break;
                    case 'Profile':
                        iconName = 'person';
                        break;
                    case 'Dev':
                        iconName = 'developer-mode';
                        break;
                    default:
                        break;
                }
                return (<Icon 
                    name={iconName}
                    fontSize={30} 
                    flex={1} 
                    size={25} 
                    color={focused ? '#adc22d' : '#000'} 
                />);
            }
        })
    }
);

const TabNavigatorContainer = createAppContainer(TabNavigator);

//The main application
class App extends React.Component {
    componentDidMount() {
        //Sets up support for receiving notifications
        notifHandler.initNotifications();
    }
    componentWillUnmount() { 
        notifHandler.unmountNotifListeners();
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

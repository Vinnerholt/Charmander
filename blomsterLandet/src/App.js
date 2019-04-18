import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import NotificationScreen from './screens/NotificationScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/ShopScreen';

const TabNavigator = createBottomTabNavigator({
    Shop: ShopScreen,
    Plants: HomeScreen,
    Notification: NotificationScreen,
    Profile: ProfileScreen
});

export default createAppContainer(TabNavigator);

/*import React from 'react';
import { Image, ImageBackground } from 'react-native';
import NotificationExpanded from './components/notifications/NotificationExpanded';
import { Header } from './components/common/index';
//The main application
/*const App = () => (
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
                
                <NotificationExpanded
                    // eslint-disable-next-line global-require
                    imageSource={require('./resources/images/tomat.jpg')}
                    title='Dags att köpa tomater'
                    description='Nu har det blivit dags att plantera tomaterna
                    för att kunna njuta av dem i sommar. 
                    Tryck på köp nu för att få hem plantorna lagom till helgen.'
                />
                
        </ImageBackground>
    );
 */
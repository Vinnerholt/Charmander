import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image, ImageBackground } from 'react-native';
import { Header } from './components/common/index';
import * as firebaseHandler from './firebaseHandler';

import NotificationScreen from './screens/NotificationScreen';
import PlantDetailScreen from './screens/PlantDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/ShopScreen';

const TabNavigator = createBottomTabNavigator({
    Plants: PlantDetailScreen,
    Shop: ShopScreen,
    Notification: NotificationScreen,
    Profile: ProfileScreen
});

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

import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image, ImageBackground, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BackgroundTask from 'react-native-background-task'

import reducers from './reducers';
import { Header } from './components/common/index';
import * as notifHandler from './services/notifHandler';
import NavigationService from './services/NavigationService';
import { daysUntilWater } from './services/plantHandlerHelperFunctions';
import * as storeActions from './actions/storeActions';

import NotificationScreen from './screens/NotificationScreen';
import MyPlantScreen from './screens/myplants/MyPlantScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/shop/ShopScreen';
import DevScreen from './screens/DevScreen';
import InfoScreen from './screens/InfoScreen';

export const TabNavigator = createBottomTabNavigator({
    Plants: MyPlantScreen,
    Shop: ShopScreen,
    //BYT TILLBAKA
    Notifications: NotificationScreen,
    Profile: ProfileScreen,
    Dev: DevScreen,
    Info: InfoScreen
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
                    case 'Info':
                        iconName = 'info';
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

export const store = createStore(reducers);
//The main application
class App extends React.Component {
    componentDidMount() {
        console.disableYellowBox = true;
        this.initializeApp();    
    }

    initializeApp() {
        notifHandler.initNotifications();
        this.startBackgroundTask();
        this.initStore();
    }

    initStore = async () => {
        store.dispatch(await storeActions.initProducts());
    }

    startBackgroundTask() {
        BackgroundTask.define(() => {
            const myPlants = store.getState().myPlants;
            
            for (let i = 0; i < myPlants.length; i++) {
                const plant = myPlants[i];
                if (daysUntilWater(plant.lastWatered, plant.wateringInterval) <= 1) {
                    notifHandler.sendWaterNotification();
                    break;
                }
            }
            BackgroundTask.finish();  
        });
        BackgroundTask.schedule();
    }

    render() {
        return (
            <Provider store={store}>
                <View>
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
                        <TabNavigatorContainer
                            ref={navigatorRef => {
                                NavigationService.setTopLevelNavigator(navigatorRef);
                            }}
                        />
                    </ImageBackground>
                </View>

            </Provider>
        );
    }
}

export default App; 

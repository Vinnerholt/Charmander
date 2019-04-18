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
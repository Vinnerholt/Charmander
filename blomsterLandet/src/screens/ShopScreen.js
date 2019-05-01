import React from 'react';
import { View } from 'react-native';
import PlantList from '../components/shop/PlantList';
import { createStackNavigator, createAppContainer } from "react-navigation";

import PlantDetailView from '../components/shop/PlantDetailView';

class ShopScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                <PlantList navigation={this.props.navigation} />
            </View>
        );
    }
}
const AppNavigator = createStackNavigator(
    {
        Home: ShopScreen,
        Details: PlantDetailView
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);

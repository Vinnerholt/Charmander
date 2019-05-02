import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import PlantListItem from '../components/myplants/PlantListItem';

import PlantDetailScreen from '../screens/PlantDetailScreen';

var self; 

class MyPlantScreen extends React.Component {

    componentWillMount() {
        self = this;
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                <PlantListItem navigation={this.props.navigation}/>
            </View>
        );
    }
}


const AppNavigator = createStackNavigator(
    {
        Home: MyPlantScreen,
        Details: PlantDetailScreen
    },
    {
        initialRouteName: "Home",
        headerMode: 'none'
    },
);

export default createAppContainer(AppNavigator);

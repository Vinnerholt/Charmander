import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import PlantList from '../components/myplants/PlantList';

import PlantDetailScreen from '../screens/PlantDetailScreen';

var self;

class MyPlantScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myplant: { name: 'Klas' }
        };        
    }

    componentWillMount() {
        self = this;
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                <PlantList navigation={self.props.navigation} />
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
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'transperent'
        }
    }

);

export default createAppContainer(AppNavigator);

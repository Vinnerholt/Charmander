import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import PlantList from '../../components/myplants/PlantList';
import plantHandler from './../../services/plantHandler';
import PlantDetailScreen from './PlantDetailScreen';


let self;

class MyPlantScreen extends React.Component {

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
        initialRouteName: 'Home',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'transperent'
        }
    }

);

export default createAppContainer(AppNavigator);

import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import PlantList from '../../components/myplants/PlantList';
import plantHandler from './../../services/plantHandler';
import PlantDetailScreen from './PlantDetailScreen';
import AddPlantScreen from './AddPlantScreen';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



let self;

class MyPlantScreen extends React.Component {

    componentWillMount() {
        self = this;
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', height: '100%' }}>
                <PlantList navigation={self.props.navigation} />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AddPlant')}
                    activeOpacity={0.7}
                    style={[styles.TouchableOpacityStyle, styles.bottomRight]}
                >
                    <Icon
                        name="plus"
                        style={styles.iconStyle}
                        color="#99CA3C"

                    />

                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {
                        self.props.screenProps.waterAllPlants();
                        plantHandler.createFile(self.props.myPlants);
                    }}
                    activeOpacity={0.7}
                    style={[styles.TouchableOpacityStyle, styles.bottomLeft]}
                >
                    <Icon
                        name="water"
                        style={styles.iconStyle}
                        color="#005496"
                    />

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    TouchableOpacityStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        elevation: 10
    },
    bottomRight: {
        right: 30,
        bottom: 30,
    },
    bottomLeft: {
        left: 30,
        bottom: 30,
    },
    iconStyle: {
        fontSize: 40,
        fontWeight: 'bold'
    }
});


const AppNavigator = createStackNavigator(
    {
        Home: MyPlantScreen,
        Details: PlantDetailScreen,
        AddPlant: AddPlantScreen
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'transperent'
        }
    }

);
const mergeProps = (state, ownProps) => {
    return ({
        ...ownProps,
        screenProps: {
            ...ownProps,
            ...state
        }
    });
};


const AppContainer = createAppContainer(AppNavigator);

const mapStateToProps = (state) => {
    return {
        myPlants: state.myPlants
    };
};

export default connect(mapStateToProps, actions, mergeProps)(AppContainer);

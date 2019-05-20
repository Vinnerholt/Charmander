import { View, Text, Picker, Button } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import MyTextInput from './../../components/common/MyTextInput';
import plantHandler from './../../services/plantHandler';


let self;
let bigAdvice;
let eD;
let wateringInterval;
class AddPlantScreen extends React.Component {

    state = { type: '', plantName: '' }

    componentWillMount() {
        self = this;
        self.setState({ type: self.props.plantTypes[0].type });
    }

    updateType = (type) => {
        self.props.plantTypes.map(plant => {
            if (plant.type === type) {
                bigAdvice = plant.advice;
                eD = plant.extendedDescription;
                wateringInterval = plant.wateringInterval;
                return [bigAdvice, eD];
            }
        });
        self.setState({ type: type });
    }

    addPlantPressed() {
        let newPlant = {
            name: self.state.plantName,
            type: self.state.type,
            advice: bigAdvice,
            extendedDescription: eD,
            lastWatered: Date.now() / 1000,
            wateringInterval: 3
        };
        self.props.addPlant(newPlant);
        self.props.navigation.navigate('Home');
        plantHandler.createFile(self.props.myPlants);
    }

    renderPlantTypes() {
        console.log('renderPlantTypes');
        return self.props.plantTypes.map(plant =>
            <Picker.Item label={plant.type} value={plant.type} plant={plant} />);
    }
    render() {

        return (
            <View style={{ flex: 1, justifyContent: "space-around", flexDirection: 'column' }}>

                <View style={{ backgroundColor: '#fff', flexDirection: 'row', flex: 1 }}>
                    <Text>Namn:</Text>
                    <MyTextInput
                        onChangeText={(plantName) => {
                            this.setState({ plantName });
                        }
                        }
                        value={self.state.plantName} />
                </View>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row', flex: 1 }}>
                    <Text>Typ:</Text>
                    <Picker
                        selectedValue={self.state.type}
                        style={{ height: 50, width: '70%' }}
                        onValueChange={self.updateType}>
                        {self.renderPlantTypes()}
                    </Picker>
                </View>
                <View style={{ flex: 4 }}>
                    <Button
                        title="Lägg till"
                        onPress={self.addPlantPressed}>
                    </Button>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        myPlants: state.myPlants,
        navigation: ownProps.navigation,
        plantTypes: state.plantTypes
    };
};

export default connect(mapStateToProps, actions)(AddPlantScreen);


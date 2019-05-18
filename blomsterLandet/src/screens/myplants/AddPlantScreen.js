import { View, Text, Picker, Button } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import MyTextInput from './../../components/common/MyTextInput';


let self;
let plantis;
class AddPlantScreen extends React.Component {

    state = { type: '', plantName: ''}

    componentWillMount() {
        self = this;
        self.populatePicker();
    }

    updateType = (type) => {
        self.props.plantTypes.map(plant => {
            console.log(plant.type);
            if (plant.type === type) {
                plantis = plant.advice;
                return plantis;
            }  
        });
        this.setState({ type: type })  
    }


    renderPlantTypes() {
        console.log('renderPlantTypes');
        return self.props.plantTypes.map(plant =>
            <Picker.Item label={plant.type} value={plant.type} plant={plant} />);

    }

    render() {
        console.log(plantis);
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
                        onValueChange={self.updateType
                        }>
                        {self.renderPlantTypes()}
                    </Picker>
                </View>
                <View style={{ flex: 4 }}>
                    <Button
                        title="Lägg till"
                        onPress={() => {
                            let newPlant = {
                                name: self.state.plantName,
                                type: self.state.type,
                                advice: plantis
                                //extendedDescription: self.props.selectedTypeObject.extendedDescription
                            };
                        console.log(newPlant);

                        }}>
                    </Button>
                </View>
            </View>
        );
    }

    populatePicker() {
        for (var i = 0; i < self.props.plantTypes; i++) {
            console.log(self.props.plantTypes[i].type);
        }

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


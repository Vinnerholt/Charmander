import { View, Text, Picker, Button } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import MyTextInput from './../../components/common/MyTextInput';


let self;
class AddPlantScreen extends React.Component {

    state = { type: '', plantName: '', selectedTypeObject: {} }

    componentWillMount() {
        self = this;
        self.populatePicker();
    }

    updateType = (type) => {
        self.props.plantTypes.map(plant => {
            if (plant.type == type) {
                self.setState({ selectedTypeObject: plant });
            }
        });
        this.setState({ type: type })
    }


    renderPlantTypes() {
        console.log("renderPlantTypes");
        return self.props.plantTypes.map(plant =>
            <Picker.Item label={plant.type} value={plant.type} plant={plant} />);

    }

    render() {
        console.log(self.props.plantTypes);
        return (
            <View style={{ flex: 1, justifyContent: "space-around", flexDirection: 'column' }}>

                <View style={{ backgroundColor: '#fff', flexDirection: 'row', flex: 1 }}>
                    <Text>Namn:</Text>
                    <MyTextInput value={self.state.plantName} />
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
                            var newPlant = {
                                name: self.state.plantName,
                                type: self.state.type,
                                advice: self.props.selectedTypeObject.advice,
                                extendedDescription: self.props.selectedTypeObject.extendedDescription
                            };

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


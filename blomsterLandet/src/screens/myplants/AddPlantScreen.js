import { View, Text, Picker, Button } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import MyTextInput from './../../components/common/MyTextInput';
import plantHandler from './../../services/plantHandler';


let self;
let bigAdvice;
let eD;
let wI;
class AddPlantScreen extends React.Component {

    state = { newPlant: { type: '', name: '', advice: '', extendedDescription: '', wateringInterval: 5 } }

    componentWillMount() {
        self = this;
        self.updateType(self.props.plantTypes[0].type);
    }

    updateType = (type) => {
        console.log(type);
        self.props.plantTypes.map(typeObject => {
            if (typeObject.type === type) {
                let tempNewPlant = self.state.newPlant;
                tempNewPlant.type = type;
                tempNewPlant.advice = typeObject.advice;
                tempNewPlant.extendedDescription = typeObject.extendedDescription;
                tempNewPlant.wateringInterval = typeObject.wateringInterval;
                console.log(self.state.newPlant);
                self.setState({ newPlant: tempNewPlant });
                console.log(self.state.newPlant);
            }
        });
    };

    addPlantPressed() {
        console.log(self.state.newPlant);
        self.state.newPlant.lastWatered = Date.now() / 1000;
        self.props.addPlant(self.state.newPlant);
        self.props.navigation.navigate('Home');
        plantHandler.createFile(self.props.myPlants);
    }

    renderPlantTypes() {
        return self.props.plantTypes.map(typeObject =>
            <Picker.Item label={typeObject.type} value={typeObject.type} typeObject={typeObject} />);
    }
    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'column' }}>

                <View style={{ backgroundColor: '#fff', flexDirection: 'row', height: 60, justifyContent: 'space-between' }}>
                    <Text>Namn:</Text>
                    <MyTextInput
                        onChangeText={(name) => {
                            let tempNewPlant = self.state.newPlant;
                            tempNewPlant.name = name;

                            this.setState({ newPlant: tempNewPlant });
                        }}
                        value={self.state.newPlant.name}
                    />
                </View>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row', height: 60, justifyContent: 'space-between' }}>
                    <Text>Typ:</Text>
                    <Picker
                        selectedValue={self.state.newPlant.type}
                        style={{ height: 50, width: '80%' }}
                        onValueChange={(newValue) => {
                            console.log("hej")

                            self.updateType(newValue);
                        }}>
                        {self.renderPlantTypes()}
                    </Picker>
                </View>
                <View style={{ flex: 4 }}>
                    <Button
                        title="Lägg till"
                        onPress={self.addPlantPressed}
                        color='#99CA3CEE'
                    >
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


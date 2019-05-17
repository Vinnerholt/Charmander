import { View, Text, Picker } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import MyTextInput from './../../components/common/MyTextInput';


let self;
class AddPlantScreen extends React.Component {

    state = { user: '' }

    componentWillMount() {
        self = this;
        self.populatePicker();
    }

    updateUser = (user) => {
        this.setState({ user: user })
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
                    <MyTextInput />
                </View>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row', flex: 1 }}>
                    <Text>Typ:</Text>
                    <Picker
                        selectedValue={this.state.user}
                        style={{ height: 50, width: '70%' }}
                        onValueChange={this.updateUser
                        }>
                        {self.renderPlantTypes()}
                    </Picker>
                </View>
                <View style={{ flex: 4 }}></View>
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


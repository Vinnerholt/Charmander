import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PlantListItem from './PlantListItem';


let self;
class PlantList extends Component {
    state = { myPlants: [] };

    componentWillMount() {
        self = this;
        let jsonPlants = require('../../resources/data/myPlants.json');
        console.log(jsonPlants.myPlants);
        self.setState({ myPlants: jsonPlants.myPlants.list });

    }

    renderPlants() {
        return this.state.myPlants.map(plant =>
            <PlantListItem key={plant.name} plant={plant} navigation={this.props.navigation} />);
    }

    render() {

        return (
            <ScrollView>
                {this.renderPlants()}
            </ScrollView>
        );
    }
}

export default PlantList;

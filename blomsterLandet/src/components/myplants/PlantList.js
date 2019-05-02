import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';
import PlantListItem from './PlantListItem';

let self;
class PlantList extends Component {
    state = { plants: [] };

    componentWillMount() {
        self = this;
        let jsonPlants = require('../../resources/data/plants.json');

        self.setState({ plants: jsonPlants.plants.list });

    }

    renderPlants() {
        return this.state.plants.map(plant =>
            <PlantListItem key={plant.name} navigation={this.props.navigation} />);
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

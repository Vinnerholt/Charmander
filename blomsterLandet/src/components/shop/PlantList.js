import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';
import PlantCard from './PlantCard';

let self;
class PlantList extends Component {
    state = { plants: [] };

    /*  componentWillMount() {
          axios.get('https://gist.githubusercontent.com/ilcarolineJonsson/1a170871c66ab0255396df3c7553902c/raw/8fb0ba8e5327ce032b277e97304551e6204dd97e/plants')
              .then(response => this.setState({ plants: response.data }));
      }*/
    componentWillMount() {
        self = this;
        let jsonPlants = require('../../resources/data/plants.json');

        self.setState({ plants: jsonPlants.plants.list });

    }

    renderPlants() {
        return this.state.plants.map(plant =>
            <PlantCard key={plant.name} plant={plant} navigation={this.props.navigation} />);
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

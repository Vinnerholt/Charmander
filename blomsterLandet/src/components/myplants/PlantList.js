import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import PlantListItem from './PlantListItem';
import plantHandler from '../../services/plantHandler';

let self;
class PlantList extends Component {
    state = { myPlants: [] };

    async componentWillMount() {
        self = this;
        await plantHandler.getFile().then(item => {
            console.log(item);
            self.setState({ myPlants: item.plantList });
        });
        /*
                self.setState({ myPlants: jsonPlants.plantList });
                console.log(jsonPlants);
                */

    }

    renderPlants() {

        if (!self.state.myPlants) {
            return <Text> LOADING</Text>;
        } else {
            return self.state.myPlants.map(plant =>
                <PlantListItem key={plant.name} plant={plant} navigation={this.props.navigation} />);
        }
    }

    render() {

        return (
            <ScrollView>
                {self.renderPlants()}
            </ScrollView>
        );
    }
}

export default PlantList;

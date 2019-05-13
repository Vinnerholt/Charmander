import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import PlantListItem from './PlantListItem';
import plantHandler from '../../services/plantHandler';

let self;
class PlantList extends Component {
    state = { myPlants: [] };

    async componentWillMount() {
        self = this;
        await plantHandler.getFile().then(item => {
            console.log(item);
            if (item) {
                self.setState({ myPlants: item.plantList });
            }
        });
    }

    componentWillReceiveProps() {

    }
    renderPlants() {

        if (!self.state.myPlants || self.state.myPlants.length === 0) {
            return (
                //creates a database file and loads it
                <Button title="create dummyPlants"
                    onPress={async () => {
                        return await plantHandler.createFile().then(() => {
                            return plantHandler.getFile();
                        }).then(item => {
                            self.setState({ myPlants: item.plantList });
                        }).catch(() => {
                            console.log("error in loading database in plantlist");
                        });
                    }
                    }>
                </Button>
            )

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

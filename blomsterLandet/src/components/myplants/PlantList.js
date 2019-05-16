import React, { Component } from 'react';
import { ScrollView, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import PlantListItem from './PlantListItem';
import plantHandler from '../../services/plantHandler';
import * as actions from '../../actions';


let self;
let firstStart = true;
class PlantList extends Component {


    componentWillMount() {
        self = this;
        if (firstStart) {
            self.getPlants();
            firstStart = false;
        }

    }

    async getPlants() {
        await plantHandler.getFile().then(item => {
            return item;
        }).then(item => {
            self.props.loadMyPlantsData(item);
        });
    }

    renderPlant(plant) {
        return <PlantListItem plant={plant} navigation={self.props.navigation} key={plant.name} />;
    }
    renderPlants() {

        return self.props.myPlants.plantList.map(plant =>
            <PlantListItem key={plant.name} plant={plant} navigation={self.props.navigation} />);

    }

    render() {
        console.log(self.props.myPlants);

        if (self.props.myPlants) {
            console.log(self.props.myPlants);
            /*    return (
                    <FlatList
                        data={self.props.myPlants.plantList}
                        renderItem={self.renderPlant}
                        keyExtractor={(plant) => plant.key}
                    />);*/
            return (<ScrollView>
                <Text>Vi har Plantor</Text>
                {self.renderPlants()}
                <Button title="tryck"
                    onPress={() => self.props.loadMyPlantsData()}></Button>
            </ScrollView>)
        } else {
            return (
                <React.Fragment>
                    <Text>Inga Plantor</Text>
                    <Button title="tryck"
                        onPress={() => self.props.loadMyPlantsData()}></Button>
                </React.Fragment>
            );
        }
    }
}
const mapStateToProps = (state, ownProps) => {

    return {
        myPlants: state.myPlants,
        navigation: ownProps.navigation
    };
};

export default connect(mapStateToProps, actions)(PlantList);


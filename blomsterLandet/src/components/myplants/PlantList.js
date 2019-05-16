import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import PlantListItem from './PlantListItem';
import plantHandler from '../../services/plantHandler';
import * as actions from '../../actions';


let self;
class PlantList extends Component {


    componentWillMount() {
        self = this;
        self.getPlants();
        /* await plantHandler.getFile().then(item => {
             console.log(item);
             if (item) {
                 self.setState({ myPlants: item.plantList });
             }
         });*/
    }

    async getPlants() {
        await plantHandler.getFile().then(item => {
            return item;
        }).then(item => {
            self.props.loadMyPlantsData(item);
        });
    }

    renderPlants() {

        return self.props.myPlants.plantList.map(plant =>
            <PlantListItem key={plant.name} plant={plant} navigation={self.props.navigation} />);

    }

    render() {
        console.log(self.props);

        if (self.props.myPlants) {
            return (<ScrollView>
                <Text>Vi har Plantor</Text>
                {self.renderPlants()}
                <Button title="tryck"
                    onPress={() => self.props.loadMyPlantsData()}></Button>
            </ScrollView>)
        } else {
            return (
                <ScrollView>
                    <Text>Inga Plantor</Text>
                    <Button title="tryck"
                        onPress={() => self.props.loadMyPlantsData()}></Button>
                </ScrollView>
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


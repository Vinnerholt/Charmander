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
        /* await plantHandler.getFile().then(item => {
             console.log(item);
             if (item) {
                 self.setState({ myPlants: item.plantList });
             }
         });*/
    }

    componentWillReceiveProps() {

    }
    renderPlants() {
        /*
                if (!self.props.myPlants.plantList || self.props.myPlants.plantList.length === 0) {
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
        
                    return self.props.myPlants.plantList.map(plant =>
                        <PlantListItem key={plant.name} plant={plant} navigation={this.props.navigation} />);*/

    }

    render() {
        console.log(self.props);
        return (
            <ScrollView>
                <Text>HEj</Text>
                <Button title="tryck"
                    onPress={() => self.props.loadMyPlantsData()}></Button>
            </ScrollView>
        );
    }
}
const mapStateToProps = state => {
    return { myPlants: state.myPlants };
};

export default connect(mapStateToProps, actions)(PlantList);


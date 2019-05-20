import React, { Component } from 'react';
import { ScrollView, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import PlantListItem from './PlantListItem';
import plantHandler from '../../services/plantHandler';
import * as actions from '../../actions';


let self;
let firstStart = true;
let addNewPlant;


class PlantList extends Component {


    componentWillMount() {
        self = this;
        if (firstStart) {
            self.getPlants();
            firstStart = false;
        }

        addNewPlant = (<Button style={styles.itemStyle} title="add new plant"
            onPress={() => self.props.loadMyPlantsData()}></Button>);

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
        console.log("renderPlants pPlantlist");
        console.log(self.props.myPlants);
        return self.props.myPlants.plantList.map(plant =>
            <PlantListItem key={plant.name} plant={plant} navigation={self.props.navigation}  />);

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
                {self.renderPlants()}

            </ScrollView>)
        } else {
            return (
                <ScrollView >
                    <Button
                        title="add new plant"
                        onPress={() => self.props.navigation.navigate('AddPlant')}
                    ></Button>
                </ScrollView >
            );
        }
    }
}

const styles = {
    itemStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'stretch',
        color: '#fff',
        marginBottom: 1,
        borderBottom: 1,
        borderColor: 'grey',
        padding: 10,
        height: 50,
        alignItems: 'center'
    }
}
const mapStateToProps = (state, ownProps) => {

    return {
        myPlants: state.myPlants,
        navigation: ownProps.navigation
    };
};

export default connect(mapStateToProps, actions)(PlantList);


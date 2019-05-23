import React, { Component } from 'react';
import { ScrollView, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import PlantListItem from './PlantListItem';
import plantHandler from '../../services/plantHandler';
import * as actions from '../../actions';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
        return self.props.myPlants.plantList.map(plant =>
            <PlantListItem key={plant.name} plant={plant} navigation={self.props.navigation} />);
    }

    render() {
        if (self.props.myPlants) {
            return (<ScrollView>
                <TouchableOpacity
                    style={styles.waterAllPlantsButtonStyle}
                    onPress={() => {
                        console.log('@@@@@@@ FIXA VATTNING PÅ ALLA PLANTOR @@@@@@@');
                    }}
                >
                    <Text style={styles.waterAllPlantsButtonTextStyle}>VATTNA ALLA PLANTOR</Text>
                </TouchableOpacity>
                {self.renderPlants()}
                <Button
                    title="Lägg till planta"
                    onPress={() => self.props.navigation.navigate('AddPlant')}
                    color='#99CA3CEE'
                ></Button>

            </ScrollView>)
        } else {
            return (
                <ScrollView >
                    <Button
                        title="Lägg till planta"
                        onPress={() => self.props.navigation.navigate('AddPlant')}
                        color='#99CA3CEE'
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
    },
    waterAllPlantsButtonStyle: {
        width: '100%',
        backgroundColor: '#005496',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    waterAllPlantsButtonTextStyle: {
        //fontFamily: 'Comic Sans',
        fontSize: 20,
        color: '#fff',
        paddingTop: 2,
        paddingBottom: 2
    }
}
const mapStateToProps = (state, ownProps) => {

    return {
        myPlants: state.myPlants,
        navigation: ownProps.navigation
    };
};

export default connect(mapStateToProps, actions)(PlantList);


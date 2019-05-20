import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import images from '../../resources/images';
import * as Progress from 'react-native-progress';
import { calcVal, daysUntilWater } from '../../services/plantHandlerHelperFunctions';
import * as actions from './../../actions';
import PlantListWaterButton from './PlantListWaterButton';

const PlantListItem = (props) => {

    var image = images[props.plant.type];
    props.plant.image = image;

    function waterHighlightColor() {
        if (daysUntilWater(props.plant.lastWatered, props.plant.wateringInterval) <= 1) {
            return '#ff0000';
        }
        return '#4682b4';
    }

    function waterBackgroundColor() {
        if (daysUntilWater(props.plant.lastWatered, props.plant.wateringInterval) <= 1) {
            return '#ff9494';
        }
        return '#b0c4de';
    }


    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Details', { plant: props.plant })} style={styles.itemStyle}>
            <Image
                source={image}
                style={{
                    width: '10%',
                    height: '100%'
                }}
            />
            <Text style={styles.textStyle}>
                {props.plant.name}
            </Text>

            <PlantListWaterButton
                onPress={() => {
                    props.waterPlant(props.plant);
                }}
            />
            <Progress.Bar
                progress={calcVal(props.plant.lastWatered, props.plant.wateringInterval) / 100}
                width={100}
                animated={'true'}
                color={waterHighlightColor()}
                unfilledColor={waterBackgroundColor()}
            />
            <Icon name="chevron-right" style={styles.arrowStyle} />
        </TouchableOpacity>
    );
};

const styles = {

    textStyle: {
        flex: 9,
        color: 'black',
        fontSize: 16,
        paddingLeft: 5
    },
    arrowStyle: {
        fontSize: 30,
        paddingRight: 5,
        flex: 1,
        color: '#000'
    },
    itemStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginBottom: 1,
        borderBottom: 1,
        borderColor: 'grey',
        padding: 10,
        height: 50,
        alignItems: 'center',
    }
};

export default connect(null, actions)(PlantListItem);

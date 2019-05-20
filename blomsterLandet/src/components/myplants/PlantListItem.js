import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import images from '../../resources/images';
import * as Progress from 'react-native-progress';
import { calcVal } from '../../services/plantHandlerHelperFunctions';

const PlantListItem = (props) => {

    var image = images[props.plant.type.toLowerCase()];
    props.plant.image = image;



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
            <Progress.Bar
                progress={calcVal(props.plant.lastWatered, props.plant.wateringInterval) / 100}
                width={100}
                animated={'true'}
                color="#4682b4"
                unfilledColor="#b0c4de"
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

export default PlantListItem;

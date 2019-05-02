import React from 'react';
import { Text, Image, View } from 'react-native';
import PlantCardContainer from './PlantCardContainer';
import BuyButton from './BuyButton';
import InfoButton from './InfoButton';
import images from '../../resources/images/index';


const PlantCard = (props) => {


    var image = images[props.plant.name];

    return (
        <PlantCardContainer>
            <Image
                source={image}
                style={{
                    width: '100%',
                    height: 150
                }}
            />
            <Text style={styles.plantName}>{props.plant.name}</Text>
            <Text style={styles.plantDescription}>{props.plant.description}</Text>
            <Text style={styles.priceTag}>{props.plant.price}kr St </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <InfoButton navigation={props.navigation} />
                <BuyButton title='Köp nu' />

            </View>
        </PlantCardContainer>
    );
};

const styles = {
    plantCardContainer: {
        width: '90%',
        minHeight: 200,
        backgroundColor: '#AE2',
        borderWidth: 3,
        borderRadius: 2,
        borderColor: '#333'

    },
    plantName: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    plantDescription: {
        marginLeft: 3,
        marginRight: 3
    },
    priceTag: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
};

export default PlantCard;

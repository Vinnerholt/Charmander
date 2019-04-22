import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import BuyButton from './BuyButton';
import InfoButton from './InfoButton';

class PlantCard extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.plantCardContainer}>
                    <Image
                        source={require('./tomat.jpg')}
                        style={{
                            width: '100%',
                            height: 150
                        }} />
                    <Text style={styles.plantName}>Tomater</Text>
                    <Text style={styles.plantDescription}>Här är en liten fin tomat med mustig smak och fina färger. Passar bra till sallader och i grytor</Text>
                    <Text style={styles.priceTag}>39kr St </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <InfoButton />
                        <BuyButton title='Köp nu' />

                    </View>
                </View>
            </View>);
    }
}

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
}

export default PlantCard;

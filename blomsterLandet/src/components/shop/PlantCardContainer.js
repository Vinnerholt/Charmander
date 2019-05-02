import React from 'react';
import { View } from 'react-native';


const PlantCardContainer = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.plantCardContainer}>
                {props.children}
            </View>
        </View>
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

export default PlantCardContainer;

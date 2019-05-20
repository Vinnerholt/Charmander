import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PlantListWaterButton = (props) => {
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={styles.plantListWaterButtonStyle}
        >
            <Text style={styles.waterButtonTextStyle}>VATTNA</Text>
        </TouchableOpacity>
    );
};

const styles = {
    plantListWaterButtonStyle: {
        width: 80,
        backgroundColor: '#005496',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    waterButtonTextStyle: {
        fontSize: 15,
        color: '#fff',
        paddingTop: 2,
        paddingBottom: 2
    }

};

export default PlantListWaterButton;

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

const PlantListWaterButton = (props) => {
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={styles.plantListWaterButtonStyle}
        >
            <Icon 
                name="water"
                style={styles.wateringStyle}
                color="#005496"
            />
        </TouchableOpacity>
    );
};

const styles = {
    plantListWaterButtonStyle: {
        //width: 40,
        height: '90%',
        backgroundColor: '#ffffff',
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
    wateringStyle: {
        fontSize: 30,
        paddingTop: 3,
        paddingBottom: 3
    },
    foo: {
        backgroundColor: '#005496'
    }

};

export default PlantListWaterButton;

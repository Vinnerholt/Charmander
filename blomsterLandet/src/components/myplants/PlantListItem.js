import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlantListItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Details')} style={styles.itemStyle}>
            <Image 
                source={require('../../resources/images/tomat.jpg')}
                style={{
                    width: '10%',
                    height: '100%'
            }} />
            <Text style={styles.textStyle}>
                Hej
            </Text>
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



import React from 'react';
import { View, Button, Text } from 'react-native';
import NavigationService from '../../services/NavigationService';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InfoButton = (props) => (
        <View >
            <TouchableOpacity
                style={styles.buyButtonStyle}
                onPress={() => NavigationService.navigate('ShopDetails', { product: props.product })}
            >
                <Text style={styles.textStyle}>Köp</Text>

            </TouchableOpacity>
        </View>
    );

const styles = {
    buyButtonStyle: {
        width: 100,
        height: 40,
        backgroundColor: '#06470c',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 20
    },
    textStyle: {
        color: '#FFFFFF'
    }
};
export default InfoButton;

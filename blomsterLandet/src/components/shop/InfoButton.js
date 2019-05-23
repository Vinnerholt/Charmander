

import React from 'react';
import { View, Button } from 'react-native';
import NavigationService from '../../services/NavigationService';

const InfoButton = (props) => (
        <View >
            <Button
                title="Köp"
                onPress={() => NavigationService.navigate('ShopDetails', { product: props.product })}
            />
        </View>
    );

const styles = {
    BuyButtonStyle: {
        width: 150,
        height: 55,
        backgroundColor: 'black',
    }
};
export default InfoButton;

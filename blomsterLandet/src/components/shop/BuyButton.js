

import React from 'react';
import { View, Button, Alert } from 'react-native';


const BuyButton = () => (
        <View >
            <Button
                title="Köp nu"
                onPress={notification}
            />
        </View>
    );

function notification() {
    Alert.alert('Din order har tagits emot');
    console.log('Order');
}


export default BuyButton;

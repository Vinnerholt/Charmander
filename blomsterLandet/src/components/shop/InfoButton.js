

import React from 'react';
import { View, Button, Alert } from 'react-native';


const InfoButton = () => {
    return (
        <View >
            <Button
                title="Info"
                onPress={notification}
            />
        </View>
    );
};

function notification() {
    Alert.alert('Show some cool info');
    console.log('Order');
}


export default InfoButton;

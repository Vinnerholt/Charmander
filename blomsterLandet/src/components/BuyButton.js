

import React from 'react';
import { View, Button } from 'react-native';


const BuyButton = () => {
    return (
        <View >
            <Button
                title="Köp nu"
                onPress={caroline}
            />
        </View>
    );
};

function caroline() {
    console.log('asdasdsad');
}


export default BuyButton;

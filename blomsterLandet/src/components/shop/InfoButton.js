

import React from 'react';
import { View, Button } from 'react-native';


const InfoButton = (props) => {

    return (
        <View >
            <Button
                title="Info"
                onPress={() => props.navigation.navigate('Details', { product: props.product })}
            />
        </View>
    );
};

export default InfoButton;



import React from 'react';
import { View, Button } from 'react-native';


const InfoButton = (props) => {

    return (
        <View >
            <Button
                title="Info"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    );
};

export default InfoButton;

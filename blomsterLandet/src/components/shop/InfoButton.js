

import React from 'react';
import { View, Button } from 'react-native';
import NavigationService from '../../services/NavigationService';

const InfoButton = (props) => {
    return (
        <View >
            <Button
                title="Köp"
                onPress={() => NavigationService.navigate('Details', { product: props.product })}
            />
        </View>
    );
};

export default InfoButton;

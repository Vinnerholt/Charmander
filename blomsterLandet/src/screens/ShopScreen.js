import React from 'react';
import { View } from 'react-native';
import BuyButton from '../components/BuyButton';

class ShopScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <BuyButton title='Köp nu' />
            </View>
        );
    }
}

export default ShopScreen;

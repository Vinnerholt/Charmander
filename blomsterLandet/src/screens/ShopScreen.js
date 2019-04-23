import React from 'react';
import { Text, View, Button } from 'react-native';
import * as orderHandler from '../components/orderHandler';

class ShopScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Shop!</Text>
                <Button 
                    onPress={() => { orderHandler.placeOrder('Gurka', 'Kalle'); }}
                    title='Kom o köp'
                />
            </View>
        );
    }
}

export default ShopScreen;

import React from 'react';
import { View } from 'react-native';


import PlantCard from '../components/shop/PlantCard';

class ShopScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>



            </View>
        );
    }
}
export default ShopScreen;

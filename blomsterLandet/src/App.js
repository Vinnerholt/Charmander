import React from 'react';
import { View } from 'react-native';
import BuyButton from './components/BuyButton';

//The main application
const App = () => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle} >
            <BuyButton />
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#99CA3C',
        flex: 1
    }
};

export default App;

import React from 'react';
import { View } from 'react-native';

//The main application
const App = () => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle} />
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#99CA3C',
        flex: 1
    }
};

export default App;

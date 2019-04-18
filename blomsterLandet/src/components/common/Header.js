// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';

//Create a component
const Header = ({ children }) => {
    const { viewStyle } = styles;

    return (
        <View style={viewStyle}>
            {children}
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#99CA3CEE',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        /*shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2, */
        borderBottomColor: '#42673D',
        borderBottomWidth: 3,
        position: 'relative'
    }
};

// Render it to the device
export { Header };

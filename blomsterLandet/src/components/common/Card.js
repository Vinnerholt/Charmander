import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );


const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    }
};

export { Card };

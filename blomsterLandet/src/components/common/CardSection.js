import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );


const styles = {
    containerStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const NotificationListItem = ({ onPress, children }) => {
    const { itemStyle, textStyle, arrowStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={itemStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
            <Text style={arrowStyle}>
                >
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        flex: 9,
        color: 'black',
        fontSize: 16
    },
    arrowStyle: {
        paddingRight: 5,
        flex: 1
    },
    itemStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginBottom: 1,
        borderBottom: 1,
        borderColor: 'grey',
        padding: 10,
        height: 50,
        alignItems: 'center',
    }
};

export { NotificationListItem };

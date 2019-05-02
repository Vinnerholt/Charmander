import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationListItem = ({ pressed, notification }) => {
    const { itemStyle, textStyle, arrowStyle } = styles;
    return (
        <TouchableOpacity onPress={() => (pressed(notification))} style={itemStyle}>
            <Text style={textStyle}>
                {notification.title}
            </Text>
            <Icon name="chevron-right" style={arrowStyle} />
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
        fontSize: 30,
        paddingRight: 5,
        flex: 1,
        color: '#000'
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

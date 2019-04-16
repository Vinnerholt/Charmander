import React from 'react';
import { View, Text } from 'react-native';

const NotificationExpanded = ({ title, description }) => {
    const { containerStyle, titleStyle, descriptionStyle, titleBoxStyle, descriptionBoxStyle } = styles;
    return (
        <View style={containerStyle}>
            <View style={titleBoxStyle}>
                <Text style={titleStyle}>{title}</Text> 
            </View>
            <View style={descriptionBoxStyle}>
                <Text style={descriptionStyle}>{description}</Text>
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1
    },
    titleBoxStyle: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 8
    },
    titleStyle: {
        fontSize: 20,
        color: '#000'
    },
    descriptionBoxStyle: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    descriptionStyle: {
        fontSize: 16,
        color: '#000'
    }
};

export default NotificationExpanded;

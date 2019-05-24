import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SaveButton = (props) => {
    const {
        topButtonStyle
    } = styles;

    return (
        <TouchableOpacity style={topButtonStyle} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>

    );
};

const styles = {
    topButtonStyle: {
        width: '80%',
        height: '80%',
        backgroundColor: '#99CA3CEE',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 20
    },
};


export default SaveButton;

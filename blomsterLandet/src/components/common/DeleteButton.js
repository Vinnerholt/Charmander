import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DeleteButton = (props) => {
    const {
        topButtonStyle
    } = styles;

    return (
        <TouchableOpacity style={topButtonStyle} onPress={props.onPress} title={props.title}>
            <Text style={{ color: '#fff' }}> {props.title}</Text>
            {props.children}
        </TouchableOpacity>

    );
};

const styles = {
    topButtonStyle: {
        width: 100,
        height: 40,
        backgroundColor: '#d11a2a',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        shadowColor: '#050',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5
    }
};


export default DeleteButton;

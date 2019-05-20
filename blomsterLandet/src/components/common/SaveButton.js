import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SaveButton = (props) => {
    const {
        topButtonStyle
    } = styles;

    return (
        <TouchableOpacity style={topButtonStyle} onPress={props.onPress} title={props.title}>
            <Text style={{ color: '#3e5f36', fontWeight: 'bold' }}> {props.title}</Text>
            {props.children}
        </TouchableOpacity>

    );
};

const styles = {
    topButtonStyle: {
        width: 100,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 20
    }
};


export default SaveButton;
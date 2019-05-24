import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SmallButton = (props) => {
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
        height: '100%',
        backgroundColor: 'transparent',
        //borderRadius: 5,
        //borderWidth: 1,
        //borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        //shadowColor: '#050',
        //shadowOffset: { width: 0, height: 2 },
        //shadowOpacity: 0.2,
        //elevation: 20
    },
};


export default SmallButton;

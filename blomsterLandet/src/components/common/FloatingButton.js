import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingButton = (props) => {

    return (
        <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.7}
        style={styles.touchableOpacityStyle}
        >
        <Icon 
            name='local-grocery-store'
            style={styles.iconStyle}
            color="#000000"
        />
        
    </TouchableOpacity>

    );
};

const styles = {
    touchableOpacityStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        elevation: 10
      },
      iconStyle: {
          fontSize: 40,
      }
};


export default FloatingButton;

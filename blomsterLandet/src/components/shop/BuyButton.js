

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';


const BuyButton = (props) => (
        <View >
            <TouchableOpacity
                style={props.style}
                onPress={() => props.addCartItem(props.product, props.amount)}
            >
                <Text 
                    style={{ fontSize: 15, color: '#fff' }}
                >
                    Lägg till i kundvagn
                </Text>
            </ TouchableOpacity>
        </View>
    );

export default connect(null, actions)(BuyButton);

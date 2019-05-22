

import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions/storeActions';
import NavigationService from '../../services/NavigationService';


const BuyButton = (props) => (
        <View >
            <TouchableOpacity
                style={props.style}
                onPress={() => {
                        if (props.amount > 0) {
                            props.addCartItem(props.product, props.amount);
                            NavigationService.navigate('Home');
                            NavigationService.navigate('ShoppingCart');  
                        } else {
                            Alert.alert('Ogiltigt antal');
                        }
                    }
                }
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

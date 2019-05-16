

import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';


const BuyButton = (props) => (
        <View >
            <Button
                title="Köp nu"
                onPress={() => props.addCartItem(props.product, 1)}
            />
        </View>
    );

export default connect(null, actions)(BuyButton);

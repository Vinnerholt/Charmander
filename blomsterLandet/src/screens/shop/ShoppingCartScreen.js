import React from 'react';
import { View, FlatList, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import CartListItem from '../../components/shop/CartListItem';
import orderHandler from '../../services/orderHandler';
import * as actions from '../../actions/storeActions';

class ShoppingCartScreen extends React.Component {

    displayAlert() {
        Alert.alert(
            'Din order är lagd!'
        );
    }

    renderItem(orderItem) {
        return <CartListItem orderItem={orderItem} />;
    }

    renderPlaceOrderButton() {
        if (this.props.shoppingCart.length !== 0) {
            return (
                <Button 
                    title='Lägg order'
                    onPress={() => {
                            orderHandler.finalizeOrder(this.props.shoppingCart);
                            this.props.emptyShoppingCart();
                            this.displayAlert();
                        }
                    }
                />);
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.shoppingCart}
                    renderItem={this.renderItem}
                    keyExtractor={(orderItem) => orderItem.product.key}
                />
                {this.renderPlaceOrderButton()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { shoppingCart: state.shoppingCart };
};

export default connect(mapStateToProps, actions)(ShoppingCartScreen);

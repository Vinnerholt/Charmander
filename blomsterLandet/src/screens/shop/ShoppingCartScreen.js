import React from 'react';
import { View, FlatList, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import CartListItem from '../../components/shop/CartListItem';
import orderHandler from '../../services/orderHandler';

class ShoppingCartScreen extends React.Component {

    renderItem(orderItem) {
        return <CartListItem orderItem={orderItem} />;
    }

    displayAlert() {
        Alert.alert(
            'Din order är lagd!'
        );
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.shoppingCart}
                    renderItem={this.renderItem}
                    keyExtractor={(orderItem) => orderItem.product.key}
                />
                <Button 
                    title='Lägg order'
                    onPress={() => {
                            orderHandler.finalizeOrder(this.props.shoppingCart);
                            this.displayAlert();
                        }
                    }
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { shoppingCart: state.shoppingCart };
};

export default connect(mapStateToProps)(ShoppingCartScreen);

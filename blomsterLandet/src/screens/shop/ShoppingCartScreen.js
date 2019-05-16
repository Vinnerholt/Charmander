import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CartListItem from '../../components/shop/CartListItem';

class ShoppingCartScreen extends React.Component {

    renderItem(orderItem) {
        return <CartListItem orderItem={orderItem} />;
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.shoppingCart}
                    renderItem={this.renderItem}
                    keyExtractor={(orderItem) => orderItem.product.key}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { shoppingCart: state.shoppingCart };
};

export default connect(mapStateToProps)(ShoppingCartScreen);

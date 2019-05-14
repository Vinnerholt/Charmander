import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CartListItem from '../../components/shop/CartListItem';

class ShoppingCartScreen extends React.Component {

    renderItem(product) {
        return <CartListItem product={product} />;
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.shoppingCart}
                    renderItem={this.renderItem}
                    keyExtractor={(product) => product.key}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { shoppingCart: state.shoppingCart.arr };
};

export default connect(mapStateToProps)(ShoppingCartScreen);

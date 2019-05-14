import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CartListItem from '../../components/shop/CartListItem';

class ShoppingCartScreen extends React.Component {

    renderItem(product) {
        return <CartListItem product={product} />;
    }

    render() {
        console.log(this.props.shoppingCart);
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>shoppelishopcart</Text>
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
    console.log(state);
    return { shoppingCart: state.shoppingCart.arr };
};

export default connect(mapStateToProps)(ShoppingCartScreen);

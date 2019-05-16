import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import CartListItem from '../../components/shop/CartListItem';
import firestoreHandler from '../../services/firestoreHandler';

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
                <Button 
                    title='Lägg order'
                    onPress={() => this.finializeOrder()}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { shoppingCart: state.shoppingCart };
};

export default connect(mapStateToProps)(ShoppingCartScreen);

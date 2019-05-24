import React from 'react';
import { View, FlatList, Button, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CartListItem from '../../components/shop/CartListItem';
import orderHandler from '../../services/orderHandler';
import * as actions from '../../actions/storeActions';
import SmallButton from '../../components/common/SmallButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        const { topButtonsContainerStyle, iconStyle } = styles;
        return (
            <View style={{ height: '100%', width: '100%' }}> 
                <View style={topButtonsContainerStyle}>
                    <SmallButton
                        onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}
                    >
                        <Icon
                            style={iconStyle}
                            name="arrow-back"
                        />
                    </SmallButton>
                </View>
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
const styles = {
    topButtonsContainerStyle: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 4,
        width: '100%',
        height: '10%'
    },
    iconStyle: {
        fontSize: 40,
        paddingRight: 5,
       // flex: 1,
        color: '#3e5f36',
    },
    scrollViewStyle: {
        height: '100%',
        width: '100%'
    },
};

export default connect(mapStateToProps, actions)(ShoppingCartScreen);

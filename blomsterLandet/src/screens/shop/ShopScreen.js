import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import ProductList from '../../components/shop/ProductList';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import ShopItemPreviewScreen from './ShopItemPreviewScreen';
import ShoppingCartScreen from './ShoppingCartScreen';
//import FloatingButton from '../../components/common/FloatingButton';

/**
 * Screen that shows products available for purchase.
 */
class ShopScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                <ProductList navigation={this.props.navigation} />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ShoppingCart')}
                    activeOpacity={0.7}
                    style={styles.TouchableOpacityStyle}
                >
                    <Icon
                        name='local-grocery-store'
                        style={styles.iconStyle}
                        color="#000000"
                    />

                </TouchableOpacity>
            </View>
        );
    }
}
const AppNavigator = createStackNavigator(
    {
        Home: ShopScreen,
        ShopDetails: ShopItemPreviewScreen,
        ShoppingCart: ShoppingCartScreen
    },
    {
        initialRouteName: "Home",
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'transperent'
        },
        headerMode: 'none'
    }
);

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

    TouchableOpacityStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        elevation: 10
    },
    iconStyle: {
        fontSize: 40,
    }
});

export default createAppContainer(AppNavigator);

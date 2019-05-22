import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import ProductList from '../../components/shop/ProductList';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import ShopItemPreviewScreen from './ShopItemPreviewScreen';
import ShoppingCartScreen from './ShoppingCartScreen';

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
                    <Image
                    source={require('../../resources/images/shopping_basket.png')}
                    style={styles.FloatingButtonStyle}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const AppNavigator = createStackNavigator(
    {
        Home: ShopScreen,
        Details: ShopItemPreviewScreen,
        ShoppingCart: ShoppingCartScreen
    },
    {
        initialRouteName: "Home",
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
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
   
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 40,
      height: 40,
      //backgroundColor:'black'
    },
    iconStyle: {
        fontSize: 30,
        paddingRight: 5,
        flex: 1,
        //color: '#3e5f36',
        color: 'black'
    }
  });

export default createAppContainer(AppNavigator);

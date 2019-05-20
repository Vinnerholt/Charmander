import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import ProductList from '../../components/shop/ProductList';
import { createStackNavigator, createAppContainer } from "react-navigation";


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
                        //We are making FAB using TouchableOpacity with an image
                        //We are using online image here
                        // eslint-disable-next-line global-require
                        source={require('../../resources/images/kundvagn.jpg')}
                        //You can use you project image Example below
                        //source={require('./images/float-add-icon.png')}
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
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  });

export default createAppContainer(AppNavigator);

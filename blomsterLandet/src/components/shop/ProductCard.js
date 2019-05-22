import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import ProductCardContainer from './ProductCardContainer';
import images from '../../resources/images/index';
import NavigationService from '../../services/NavigationService';


const ProductCard = (props) => {


    var image = images[props.product.key];

    return (
        <ProductCardContainer>
            <Image
                source={image}
                style={{
                    width: '100%',
                    height: 150
                }}
            />
            <Text style={styles.productName}>{props.product.name}</Text>
            <Text style={styles.productDescription}>{props.product.description}</Text>
            <Text style={styles.priceTag}>{props.product.price} kr/st </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.buyButtonStyle}
                    onPress={() => NavigationService.navigate('ShopDetails', { product: props.product })}
                >
                  <Text style={styles.buyButtonTextStyle}>KÖP</Text>
                </ TouchableOpacity>
            </View>
        </ProductCardContainer>
    );
};

const styles = {
    buyButtonTextStyle: {
        fontSize: 20,
        color: '#fff'
    },
    buyButtonStyle: {
        width: 80,
        height: 30,
        backgroundColor: '#005496',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#3e5f36'
    },
    productDescription: {
        marginLeft: 3,
        marginRight: 3
    },
    priceTag: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#3e5f36',
        fontStyle: 'italic'
    }
};

export default ProductCard;

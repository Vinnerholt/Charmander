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
                    height: 200
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
    buyButtonStyle: {
        width: 100,
        height: 40,
        backgroundColor: '#06470c',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 20
    },
    buyButtonTextStyle: {
        color: '#FFFFFF'
    },
    productName: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 5,
        color: '#3e5f36'
    },
    productDescription: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#000'
    },
    priceTag: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: '#3e5f36',
    }
};

export default ProductCard;

import React from 'react';
import { Text, Image, View } from 'react-native';
import ProductCardContainer from './ProductCardContainer';
import images from '../../resources/images/index';
import InfoButton from './InfoButton';


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
            <Text style={styles.priceTag}>{props.product.price}kr St </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <InfoButton
                    product={props.product}
                />
            </View>
        </ProductCardContainer>
    );
};

const styles = {
    productCardContainer: {
        width: '90%',
        minHeight: 200,
        backgroundColor: '#AE2',
        borderWidth: 3,
        borderRadius: 2,
        borderColor: '#333'

    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    productDescription: {
        marginLeft: 3,
        marginRight: 3
    },
    priceTag: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
};

export default ProductCard;

import React from 'react';
import { View } from 'react-native';


const ProductCardContainer = (props) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.productCardContainer}>
                {props.children}
            </View>
        </View>
    );
};

const styles = {
    productCardContainer: {
        width: '100%',
        minHeight: 200,
        backgroundColor: '#FFF',
        borderWidth: 0,
        borderRadius: 2,
        borderColor: '#06470c',
        borderTopWidth: 3

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

export default ProductCardContainer;

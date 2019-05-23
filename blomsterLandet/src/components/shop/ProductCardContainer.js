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
        width: '90%',
        minHeight: 200,
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 2,
        borderColor: '#3e5f36',
        marginBottom: 5,
        marginTop: 5,
        padding: 10

    }
};

export default ProductCardContainer;

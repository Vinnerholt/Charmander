import firestoreHandler from '../services/firestoreHandler';

export const initProducts = async () => {
    const products = await firestoreHandler.getCollection('products');
    const map = new Map();

    products.map(product => {
        console.log(product);
        map.set(product.key, product);
    });
    console.log(map);
    return {
        type: 'init_products',
        payload: map
    };
};

export const addCartItem = (item, amount) => {
    const orderItem = {
        product: item,
        amount
    };

    return {
        type: 'add_cart_item',
        payload: orderItem
    };
};

export const removeCartItem = (item) => {
    return {
        type: 'remove_cart_item',
        payload: item
    };
};

export const emptyShoppingCart = () => {
    return {
        type: 'empty_shopping_cart',
    };
};

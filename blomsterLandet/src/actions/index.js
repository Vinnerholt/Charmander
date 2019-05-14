export const expandNotification = (notification) => {
    return {
        type: 'expand_notification',
        payload: notification
    };
};

export const removeNotification = (notification) => {
    return {
        type: 'remove_notification',
        payload: notification
    };
};

export const addCartItem = (item) => {
    return {
        type: 'add_cart_item',
        payload: item
    };
};

export const removeCartItem = (item) => {
    return {
        type: 'remove_cart_item',
        payload: item
    };
};

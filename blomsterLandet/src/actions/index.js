export const expandNotification = (notification) => {
    return {
        type: 'expand_notification',
        payload: notification
    };
};

export const addNotification = (notification) => {
    return {
        type: 'add_notification',
        payload: notification
    };
};

export const removeNotification = (notification) => {
    return {
        type: 'remove_notification',
        payload: notification
    };
};

export const initNotifications = (notifications) => {
    return {
        type: 'init_notifications',
        payload: notifications
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


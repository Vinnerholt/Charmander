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

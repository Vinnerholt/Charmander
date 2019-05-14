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

import jsonStorage from '../services/jsonStorage';

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

export const initNotifications = async () => {
    let notif = [];
    await jsonStorage.getItem('notifications').then(result => {
        if (result !== null) {
            notif = result;
        }
    });
    return {
        type: 'init_notifications',
        payload: notif
    };
};

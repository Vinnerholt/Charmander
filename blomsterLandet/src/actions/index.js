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
    const notif = await jsonStorage.getItem('notifications');
    return {
        type: 'init_notifications',
        payload: notif
    };
};

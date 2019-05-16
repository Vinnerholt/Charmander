export const expandNotification = (notification) => {
    return {
        type: 'expand_notification',
        payload: notification
    };
};
export const loadMyPlantsData = (data) => {
    return {
        type: 'load_my_plants_data',
        payload: data
    };
};


export const removeNotification = (notification) => {
    return {
        type: 'remove_notification',
        payload: notification
    };
};

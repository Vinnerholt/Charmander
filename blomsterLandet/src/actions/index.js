export const expandNotification = (notification) => {
    return {
        type: 'expand_notification',
        payload: notification
    };
};
export const loadMyPlantsData = () => {
    return {
        type: 'load_my_plants_data',
        payload: null
    };
};


export const removeNotification = (notification) => {
    return {
        type: 'remove_notification',
        payload: notification
    };
};

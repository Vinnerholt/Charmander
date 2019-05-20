import jsonStorage from '../services/jsonStorage';

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
export const editMyPlantsData = (data) => {
    return {
        type: 'edit_my_plants_data',
        payload: data
    };
};
export const toggleMyPlantsEditMode = () => {
    return {
        type: 'toggle_my_plants_edit_mode',
        payload: null
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
export const getPlantTypes = () => {
    return {
        type: 'get_plant_types',
        payload: null
    };
};
export const deletePlant = (plant) => {
    return {
        type: 'delete_my_plant',
        payload: plant
    };
};
export const waterPlant = (plant) => {
    return {
        type: 'water_my_plant',
        payload: plant
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

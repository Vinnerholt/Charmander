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


export const removeNotification = (notification) => {
    return {
        type: 'remove_notification',
        payload: notification
    };
};

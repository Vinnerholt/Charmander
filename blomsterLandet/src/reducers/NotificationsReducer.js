import jsonStorage from '../services/jsonStorage';

export default (state = [], action) => {
    let stateToUpdate = state;
    switch (action.type) {
        case 'remove_notification':
            stateToUpdate = state.filter((notification) => { if (notification.notifId !== action.payload.notifId) { return notification; } return null; });
            break;
        case 'add_notification':
            stateToUpdate = state.concat(action.payload);
            break;
        case 'init_notifications':
            return action.payload;
        default:
            return state;
    }

    jsonStorage.setItem('notifications', stateToUpdate);

    return stateToUpdate;
};

import data from '../resources/data/notifications.json';

export default (state = data, action) => {
    switch (action.type) {
        case 'remove_notification':
            return state.filter((notification) => { if (notification.notifId !== action.payload.notifId) { return notification; } return null; });
        default:
            return state;
    }
};

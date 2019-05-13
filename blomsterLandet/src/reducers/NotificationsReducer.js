import data from '../resources/data/notifications.json';

<<<<<<< HEAD
export default (state = data, action) => {
    switch (action.type) {
        case 'remove_notification':
            return state.filter((notification) => { if (notification.notifId !== action.payload.notifId) { return notification; } return null; });
        default:
            return state;
    }
};
=======
export default () => data;
>>>>>>> c01737c44db0c051a43e3926fde3bc4096e781cc


export default (state = [], action) => {
    switch (action.type) {
        case 'remove_notification':
            return state.filter((notification) => { if (notification.notifId !== action.payload.notifId) { return notification; } return null; });
        case 'add_notification':
            console.log(state);
            return state.concat(action.payload);
        case 'init_notifications':
            return action.payload;
        default:
            return state;
    }
};

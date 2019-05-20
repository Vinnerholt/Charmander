export default (state = null, action) => {
    switch (action.type) {
        case 'expand_notification':
            return (action.payload);
        default:
            return state;
    }
};

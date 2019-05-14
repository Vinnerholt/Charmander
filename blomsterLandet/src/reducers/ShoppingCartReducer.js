
const initialUserState = {

    arr: []
};

export default (state = initialUserState, action) => {
    switch (action.type) {
        case 'add_cart_item': 
            return {
                arr: state.arr.concat(action.payload)
            };
        /*case 'remove_cart_item':
            return state.filter((notification) => { if (notification.notifId !== action.payload.notifId) { return notification; } return null; });*/
        default:
            return state;
    }
};

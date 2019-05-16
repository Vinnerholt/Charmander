export default (state = new Map(), action) => {
    switch (action.type) {
        case 'init_products':
            return action.payload;
        default:
            return state;
    }
};

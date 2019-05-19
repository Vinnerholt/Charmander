export default (state = [], action) => {
    switch (action.type) {
        case 'add_cart_item': 
            for(var i in state) {
                if (state[i].product.key === action.payload.product.key) {
                    state[i].amount += action.payload.amount;
                    return state;
                }
            }
            return state.concat(action.payload);
        case 'remove_cart_item':
            return state.filter((orderItem) => { if (orderItem.product.key !== action.payload.product.key) { return orderItem; } return null; });
        case 'empty_shopping_cart':
            return [];
        default:
            return state;
    }
};

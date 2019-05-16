

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
            console.log(state);
            return state.filter((product) => { if (product.key !== action.payload.key) { return product; } return null; });
        default:
            return state;
    }
};

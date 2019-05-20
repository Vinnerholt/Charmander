

export default (state = false, action) => {
    switch (action.type) {
        case 'toggle_my_plants_edit_mode':
            return (!state);
        default:
            return state;
    }
};
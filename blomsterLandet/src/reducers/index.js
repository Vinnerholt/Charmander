import { combineReducers } from 'redux';
import NotificationsReducer from './NotificationsReducer';
import ExpandedNotificationReducer from './ExpandedNotificationReducer';
import ShoppingCartReducer from './ShoppingCartReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
    notifications: NotificationsReducer,
    expandedNotification: ExpandedNotificationReducer,
    products: ProductReducer,
    shoppingCart: ShoppingCartReducer
});

import { combineReducers } from 'redux';
import NotificationsReducer from './NotificationsReducer';
import ExpandedNotificationReducer from './ExpandedNotificationReducer';
import ShoppingCartReducer from './ShoppingCartReducer';

export default combineReducers({
    notifications: NotificationsReducer,
    expandedNotification: ExpandedNotificationReducer,
    shoppingCart: ShoppingCartReducer
});

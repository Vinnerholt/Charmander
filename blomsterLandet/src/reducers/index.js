import { combineReducers } from 'redux';
import NotificationsReducer from './NotificationsReducer';
import ExpandedNotificationReducer from './ExpandedNotificationReducer';

export default combineReducers({
    notifications: NotificationsReducer,
    expandedNotification: ExpandedNotificationReducer
});

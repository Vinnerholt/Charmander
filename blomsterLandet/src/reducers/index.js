import { combineReducers } from 'redux';
import NotificationsReducer from './NotificationsReducer';

export default combineReducers({
    notifications: NotificationsReducer
});

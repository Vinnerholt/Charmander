import { combineReducers } from 'redux';
import NotificationsReducer from './NotificationsReducer';
import ExpandedNotificationReducer from './ExpandedNotificationReducer';
import MyPlantsReducer from './MyPlantsReducer';
import MyPlantsEditModeReducer from './MyPlantsEditModeReducer';
import PlantTypeReducer from './PlantTypeReducer';

export default combineReducers({
    notifications: NotificationsReducer,
    expandedNotification: ExpandedNotificationReducer,
    myPlants: MyPlantsReducer,
    myPlantsEditMode: MyPlantsEditModeReducer,
    plantTypes: PlantTypeReducer
});

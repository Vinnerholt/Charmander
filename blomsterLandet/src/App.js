import React from 'react';
import { View } from 'react-native';
import { NotificationList, NotificationListItem } from './components/notifications/';

//The main application
const App = () => {
    const { viewStyle, notificationList } = styles;
    return (
        <View style={viewStyle}> 
            <NotificationList style={notificationList} />
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#99CA3C',
        flex: 1
    },
    notificationList: {
        flex: 1,
        backgroundColor: 'black'
    }
};

export default App;

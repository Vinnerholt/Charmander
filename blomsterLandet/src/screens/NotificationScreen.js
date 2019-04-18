import React from 'react';
import { View, ScrollView } from 'react-native';
import { NotificationListItem } from '../components/notifications';

class NotificationScreen extends React.Component {
    
    state = { notificationExpanded: false, 
        notifications: [{ title: 'Tomat', description: 'Dags att odla tomater!' }] };

    listNotifications() {
        //Returns a map with notificationListItems, the key needs to be reworked as it 
        //might not always be unique
        return (this.state.notifications.map(notification =>
            (<NotificationListItem title={notification.title} key={notification.title}>
                {notification.title}
            </NotificationListItem>)
        )
        );
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.listNotifications()} 
                </ScrollView>
            </View>
        );
    }
}

export default NotificationScreen;

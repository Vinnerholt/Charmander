import React from 'react';
import { Text, View } from 'react-native';
import { NotificationList } from '../components/notifications';

class NotificationScreen extends React.Component {
    state = { notificationExpanded: false };

    render() {
        return (
            <View>
                <NotificationList expand={this.expandNotification()} style={{ flex: 1 }} />
            </View>
        );
    }
}

export default NotificationScreen;

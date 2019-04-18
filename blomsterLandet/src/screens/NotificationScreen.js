import React from 'react';
import { Text, View } from 'react-native';

class NotificationScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notification!</Text>
            </View>
        );
    }
}

export default NotificationScreen;

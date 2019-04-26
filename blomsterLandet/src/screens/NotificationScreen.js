import React from 'react';
import { View, ScrollView } from 'react-native';
import { NotificationListItem } from '../components/notifications';
import NotificationExpanded from '../components/notifications/NotificationExpanded';

class NotificationScreen extends React.Component {

    state = {
        notificationExpanded: false,
        notifications: [{ title: 'Tomat', description: 'Dags att odla tomater!' }, { title: 'Jord', description: 'Asdf!' }],
        notificationMap: [],
        expandedTitle: '',
        expandedDescription: ''
    };

    componentWillMount() {
        this.listNotifications();
    }

    //Creates a map with notificationListItems, the key needs to be reworked as it 
    //might not always be unique
    mapNotifications() {
        const mapOfNotifications = (this.state.notifications.map(notification =>
            (<NotificationListItem
                key={notification.title}
                notification={notification}
                pressed={this.openExpandedNotification.bind(this)}
            />)
        ));
        this.setState({ notificationMap: mapOfNotifications });
    }

    //Returns the map with notificationListItems if it exists, 
    //otherwise it creates it and returns it
    listNotifications() {
        if (this.state.notificationMap.length === 0) {
            this.mapNotifications();
        }
        return this.state.notificationMap;
    }

    //Opens the expanded notification based on the inputted notification
    openExpandedNotification(notification) {
        this.setState({
            notificationExpanded: true,
            expandedTitle: notification.title,
            expandedDescription: notification.description
        });
    }

    render() {
        return (
            <View>
                <NotificationExpanded
                    title={this.state.expandedTitle}
                    description={this.state.expandedDescription}
                    modalvisible={this.notificationExpanded}
                />
                <ScrollView>
                    {this.state.notificationMap}
                </ScrollView>
            </View>
        );
    }
}

export default NotificationScreen;

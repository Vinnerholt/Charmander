import React from 'react';
import { View, ScrollView } from 'react-native';
import { NotificationListItem } from '../components/notifications';
import NotificationExpanded from '../components/notifications/NotificationExpanded';

class NotificationScreen extends React.Component {
    state = {
        notificationExpanded: false,
        notifications: [{ title: 'Tomat', description: 'Dags att odla tomater!' }, { title: 'Jord', description: 'Hej' }],
        notificationMap: [],
        expandedTitle: '',
        expandedDescription: '',
    };

    componentWillMount() {
        this.listNotifications();
        this.checkForOutsideExpandRequest(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.checkForOutsideExpandRequest(nextProps);
    }

    //Checks if the navigation to the notification screen was made by
    //pressing on a push-notification, in which case a specific notification will be shown
    checkForOutsideExpandRequest(props) {
        const notifId = props.navigation.getParam('notifId', 'NO-ID');
        //Opens the expanded notification if the new prop contains an id.
        if (notifId !== 'NO-ID') {
            //This is a bad way to identify what notification shall be open.
            //It should be fixed when a better way has been decided.
            this.openExpandedNotification(this.state.notifications[notifId]);
        }
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
                    modalVisible={this.state.notificationExpanded}
                />
                <ScrollView>
                    {this.state.notificationMap}
                </ScrollView>
            </View>
        );
    }
}

export default NotificationScreen;

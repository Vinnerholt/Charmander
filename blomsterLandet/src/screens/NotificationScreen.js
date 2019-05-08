import React from 'react';
import { View, ScrollView } from 'react-native';
import { NotificationListItem } from '../components/notifications';
import NotificationExpanded from '../components/notifications/NotificationExpanded';
import * as notifHandler from '../services/notifHandler';
import jsonStorage from '../services/jsonStorage';

let self;
class NotificationScreen extends React.Component {
    state = {
        notificationExpanded: false,
        notifications: [],
        notificationMap: [],
        expandedTitle: '',
        expandedDescription: '',
    };

    componentWillMount() {
        self = this;
        self.updateNotificationList();
    }

    componentDidMount() {
        notifHandler.initNotifications(self);
    }

    componentWillReceiveProps(nextProps) {
        self.checkForOutsideExpandRequest(nextProps);
    }

    updateNotificationList() {
        console.log('yo');
        jsonStorage.getItem('notifications').then(r => {
            //Sets notification state, when asynch call is completed, functions using state are called
            console.log(r.notifications);
            self.setState({ notifications: r.notifications }, () => {
                self.listNotifications();
            }); 
        }).catch(e => {
            console.log(e);
        });
    }

    //Checks if the navigation to the notification screen was made by
    //pressing on a push-notification, in which case a specific notification will be shown
    checkForOutsideExpandRequest(props) {
        const notifId = props.navigation.getParam('notifId', 'NO-ID');
        //Opens the expanded notification if the new prop contains an id.
        if (notifId !== 'NO-ID') {
            //This is a bad way to identify what notification shall be open.
            //It should be fixed when a better way has been decided.
            self.openExpandedNotification(self.state.notifications[notifId]);
        }
    }

    //Creates a map with notificationListItems, the key needs to be reworked as it 
    //might not always be unique
    mapNotifications() {
        const mapOfNotifications = (self.state.notifications.map(notification =>
            (<NotificationListItem
                key={notification.notifId}
                notification={notification}
                pressed={self.openExpandedNotification.bind(self)}
                pressedRemoved={self.removeNotification.bind(self)}
            />)
        ));
        console.log(mapOfNotifications);
        self.setState({ notificationMap: mapOfNotifications });
    }

    //Returns the map with notificationListItems if it exists, 
    //otherwise it creates it and returns it
    listNotifications() {
        self.mapNotifications();
        return self.state.notificationMap;
    }

    //Opens the expanded notification based on the inputted notification
    openExpandedNotification(notification) {
        self.setState({
            notificationExpanded: true,
            expandedTitle: notification.title,
            expandedDescription: notification.description
        });
    }

    openExpandedNotificationById() {
        self.openExpandedNotification(self.state.mapOfNotifications.get(0));
    }

    closeExpandedNotification() {
        self.setState({ notificationExpanded: false });
    }

    //Removes the notification from the notification map based on the notifId, then updates the list of notifications displayed
    removeNotification(notification) {
        self.setState({
            notifications: self.state.notifications.filter(notif =>
                notif.notifId !== notification.notifId)
        }, () => {
            self.mapNotifications();
        });
    }

    //Adds a notification presuming it is correctly formatted
    addNotification(notification) {
        const notifList = self.state.notifications;
        notifList.push(notification);
        self.setState({ notifications: notifList }, () => {
            self.mapNotifications();
        });
    }

    render() {
        
        return (
                <View>
                    <NotificationExpanded
                        title={self.state.expandedTitle}
                        description={self.state.expandedDescription}
                        modalVisible={self.state.notificationExpanded}
                        closeModal={self.closeExpandedNotification.bind(self)}
                    />
                    <ScrollView>
                        {self.state.notificationMap}
                    </ScrollView>
                </View>
        );
    }
}

export default NotificationScreen;

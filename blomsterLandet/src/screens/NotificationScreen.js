import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import NotificationListItem from '../components/notifications/NotificationListItem';
import NotificationExpanded from '../components/notifications/NotificationExpanded';
import jsonStorage from '../services/jsonStorage';
import NotifObservable from '../services/observers/NotifObservable';

let self;
class NotificationScreen extends React.Component {

    /*
    updateNotificationList() {
        jsonStorage.getItem('notifications').then(r => {
            //Sets notification state, when asynch call is completed, functions using state are called
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
*/

    //Creates a map with notificationListItems, the key needs to be reworked as it 
    //might not always be unique
    mapNotifications() {
        console.log('called');
        const mapOfNotifications = (self.state.notifications.map(notification =>
            (<NotificationListItem
                key={notification.notifId}
                notification={notification}
                pressed={self.openExpandedNotification.bind(self)}
                pressedRemoved={self.removeNotification.bind(self)}
            />)
        ));
        //self.setState({ notificationMap: mapOfNotifications });
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

    closeExpandedNotification() {
        //self.setState({ notificationExpanded: false });
    }

    //Removes the notification from the notification map based on the notifId, then updates the list of notifications displayed
    /*removeNotification(notification) {
        self.setState({
            notifications: self.state.notifications.filter(notif =>
                notif.notifId !== notification.notifId)
        }, () => {
            self.mapNotifications();
        });
    }

    //Adds a notification presuming it is correctly formatted
    /*addNotification(notification) {
        const notifList = self.state.notifications;
        notifList.push(notification);
        self.setState({ notifications: notifList }, () => {
            self.mapNotifications();
        });
    }*/

    renderItem(notification) {
        return <NotificationListItem notification={notification} />;
    }

    render() {
        return (
            <View>
                <NotificationExpanded />
                <FlatList
                    data={this.props.notifications}
                    renderItem={this.renderItem}
                    keyExtractor={(notification) => notification.notifId.toString()}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { notifications: state.notifications };
};

export default connect(mapStateToProps)(NotificationScreen);

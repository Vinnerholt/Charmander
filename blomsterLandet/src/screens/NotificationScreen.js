import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import NotificationListItem from '../components/notifications/NotificationListItem';
import NotificationExpanded from '../components/notifications/NotificationExpanded';
import jsonStorage from '../services/jsonStorage';
import NotifObservable from '../services/observers/NotifObservable';

let self;
class NotificationScreen extends React.Component {
<<<<<<< HEAD
   
=======

>>>>>>> Tried to implement saving the notifications in a map in the state, but failed. PP MR & GH
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
    renderItem(notification) {
        return <NotificationListItem notification={notification} />;
    }

<<<<<<< HEAD
=======
    
>>>>>>> Notifications can now be expanded and closed PP MR & GH
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

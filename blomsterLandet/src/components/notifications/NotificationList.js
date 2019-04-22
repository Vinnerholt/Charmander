import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { NotificationListItem } from './index';

class NotificationList extends Component {
    constructor(props) {
        super(props);
    }

    state = { notifications: [] };

    componentWillMount() {
        this.setState({ notifications: ['Tomat', 'Jord'] });
    }

    renderNotifications() {
        return this.state.notifications.map(notification =>
            <NotificationListItem key={notification}>
                {notification}
            </NotificationListItem>);
    }

    render() {
        return (
            <ScrollView>
                {this.renderNotifications()}
            </ScrollView>
        );
    }

}

export { NotificationList };

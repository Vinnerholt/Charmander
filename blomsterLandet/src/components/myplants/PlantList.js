import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PlantListItem from './PlantListItem';

class PlantList extends Component {
    constructor(props) {
        super(props);
    }

    state = { notifications: [] };

    componentWillMount() {
        this.setState({ notifications: ['Tomat', 'Jord'] });
    }

    renderNotifications() {
        return this.state.notifications.map(notification =>
            <PlantListItem key={notification}>
                {notification}
            </PlantListItem>);
    }

    render() {
        return (
            <ScrollView>
                {this.renderNotifications()}
            </ScrollView>
        );
    }

}

export default PlantList;

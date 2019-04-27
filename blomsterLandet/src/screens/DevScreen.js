/**
 * Screen with development tools that can be used to e.g
 * live-test the code.
 */
import React from 'react';
import { View, Button } from 'react-native';
import NotifService from '../services/NotifService';

class DevScreen extends React.Component {
    constructor(props) {
        super(props);
        this.notif = new NotifService(props.navigation);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title='Send Local Notification'
                    onPress={() => this.notif.localNotif('Tomatdags', 
                    'Nu är det dags att odla tomater!', 'Tomat')}
                />
            </View>
        );
    }
}

export default DevScreen;

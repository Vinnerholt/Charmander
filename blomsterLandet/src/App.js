import React from 'react';
import { View } from 'react-native';
import NotificationExpanded from './components/notifications/NotificationExpanded';

//The main application
const App = () => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <NotificationExpanded
                title='Dags att köpa tomater'
                description='Nu har det blivit dags att plantera tomaterna för att kunna njuta av dem i sommar. Tryck på köp nu för att få hem dem lagom till helgen.'
            />
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#99CA3C',
        flex: 1
    }
};

export default App;

import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import NotificationExpanded from './components/notifications/NotificationExpanded';
import { Header } from './components/common/index';
//The main application
const App = () => (
        <ImageBackground 
            // eslint-disable-next-line global-require
            source={require('./resources/images/page-content-bg.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <Header>
                <Image
                        style={{ width: 55, height: 36 }}
                        // eslint-disable-next-line global-require
                        source={require('./resources/images/blomsterlandet_logo.png')}
                />
                </Header>
                <View style={{ flex: 1 }}>
                    <NotificationExpanded
                        title='Dags att köpa tomater'
                        description='Nu har det blivit dags att plantera tomaterna
                        för att kunna njuta av dem i sommar.
                        Tryck på köp nu för att få hem dem lagom till helgen.'
                    />
                </View>
        </ImageBackground>
    );

export default App;

import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SmallButton from '../components/common/SmallButton';
import CollapseButton from '../components/common/CollapseButton';

class ProfileScreen extends React.Component {

    render() {
        const { nameStyle, imageContainerStyle, viewCenterStyle,
            topButtonsContainerStyle, imageStyle, bottomButtonsContainerStyle,
            scrollViewStyle, iconStyle } = styles;
        return (
            <ScrollView contentContainerStyle={scrollViewStyle}>
                <View style={topButtonsContainerStyle}>

                    <SmallButton>
                        <Icon
                            style={iconStyle}
                            name="brush"
                        />
                    </SmallButton>
                </View>

                <View style={scrollViewStyle}>
                    <View style={imageContainerStyle}>
                        <Image
                            style={imageStyle}
                            // eslint-disable-next-line global-require
                            source={require('../resources/images/ros.jpg')}
                        />
                    </View>
                </View>

                <View style={viewCenterStyle}>
                    <Text style={nameStyle}>Olle Innebandysson</Text>

                </View>


                <View style={bottomButtonsContainerStyle}>
                    <View style={[viewCenterStyle]}>
                        <CollapseButton
                            header={'Personuppgifter'}
                            body={'E-mail: innebandy_pingis@hotmail.com \nAdress: Genvägen 12'}
                        />
                    </View>

                    <View style={viewCenterStyle}>
                        <CollapseButton
                            header={'Tidigare ordar'}
                            body={'Här ska du kunna se dina tidigare ordrar.'}
                        />
                    </View>

                    <View style={viewCenterStyle}>
                        <CollapseButton
                            header={'Inställningar'}
                            body={'Diverse inställningar osv.'}
                        />
                    </View>
                </View>
            </ScrollView>
    
        );
    }
}

const styles = {
    nameStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: '#3e5f36'
    },
    imageContainerStyle: {
        justifyContent: 'center',
        width: 200,
        alignItems: 'center',
        paddingTop: 0,
        borderRadius: 200 / 2,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 20,
    },
    imageStyle: {
        height: 200,
        width: 200,
        overflow: 'hidden',
        borderRadius: 200 / 2,
        borderWidth: 4,
        borderColor: '#3e5f36',
    },
    viewCenterStyle: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    topButtonsContainerStyle: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 4,
        paddingBottom: 4,
    },
    bottomButtonsContainerStyle: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },
    scrollViewStyle: {
        alignItems: 'center',
    },
    iconStyle: {
        fontSize: 30,
        paddingRight: 5,
        flex: 1,
        color: '#3e5f36',
    },
};

export default ProfileScreen;

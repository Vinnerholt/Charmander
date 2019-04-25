import React from 'react';
import { View, ScrollView, Image, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';


const PlantDetailScreen = (props) => {
    const { topButtonStyle, nameStyle, imageContainerStyle, viewCenterStyle,
            topButtonsContainerStyle, imageStyle, iconStyle, speciesStyle,
            waterButtonStyle, waterButtonTextStyle } = styles;

    return (
    <ScrollView>
        <View style={topButtonsContainerStyle}>
            <TouchableOpacity style={topButtonStyle}>
                

                <Icon
                    name="arrow-back"
                    style={iconStyle}
                />

            </TouchableOpacity>
            
            <TouchableOpacity style={topButtonStyle}>
                <Icon 
                    name="brush"
                    style={iconStyle}
                />
            </TouchableOpacity>
        </View>
        
        <View style={imageContainerStyle}>
            <Image 
                style={imageStyle}
                //Tomat.jpg flyttad till screens-mappen för att kunna visas. 
                //Ta reda på hur man sourcar bilder från andra mappar och flytta tillbaka den till images
                source={require('./tomat.jpg')}
            />
        </View>
        
        <View style={viewCenterStyle}>
            <Text style={nameStyle}>
                Nils
            </Text>
            
            <Text style={speciesStyle}>Tomat</Text>
        </View>

        <View style={viewCenterStyle}>
            <TouchableOpacity style={waterButtonStyle}>
                <Text style={waterButtonTextStyle}>VATTNA</Text>
            </TouchableOpacity>
        </View>      

    </ScrollView>
    );
};

const styles = {
    topButtonStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#ffdd00',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingLeft: 8,
        //fungerar inte
        /*shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2*/
    },
    nameStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: '#3e5f36'
    },
    speciesStyle: {
        fontSize: 20,
        fontStyle: 'italic',
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: '#3e5f36'
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center', 
        paddingTop: 10
    },
    imageStyle: {
        height: 250,
        width: 250,
        overflow: 'hidden',
        borderRadius: 250/2,
        borderWidth: 4,
        borderColor: '#3e5f36',
    },
    viewCenterStyle: {
        alignItems: 'center',
        justifyContent: ''
    },

    topButtonsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 4,

    },
    smallImageStyle: {
        width: 20,
        heigth: 20
    },
    iconStyle: {
        fontSize: 30,
        paddingRight: 5,
        flex: 1,
        color: '#3e5f36',
    },
    waterButtonStyle: {
        width: 150,
        height: 55,
        backgroundColor: '#005496',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    waterButtonTextStyle: {
        fontSize: 30,
        color: '#fff'
    }


};

export default PlantDetailScreen;

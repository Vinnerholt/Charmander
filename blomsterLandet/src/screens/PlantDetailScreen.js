import React from 'react';
import { View, ScrollView, Image, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const PlantDetailScreen = (props) => {
    const { buttonStyle, nameStyle, imageContainerStyle, viewStyle, topButtonsContainerStyle, imageStyle } = styles;

    return (
    <View>
        <View style={topButtonsContainerStyle}>
            <TouchableOpacity style={buttonStyle}>
                

                <Image 
                    style={imageStyle}
                    source={require('./baseline-border_color-24px.svg')}
                />

            </TouchableOpacity>
            
            <TouchableOpacity
                style={buttonStyle}
                title="Redigera"
                color='#000'
                alignItems='flex-end'
            />
        </View>
        
        <View style={imageContainerStyle}>
            <Image 
                style={imageStyle}
                //Tomat.jpg flyttad till screens-mappen för att kunna visas. 
                //Ta reda på hur man sourcar bilder från andra mappar och flytta tillbaka den till images
                source={require('./tomat.jpg')}
            />
        </View>
        
        <View style={viewStyle}>
            <Text style={nameStyle}>
                Nils
            </Text>
            
            <Text>Tomat</Text>
        </View>
               

    </View>
    );
};

const styles = {
    buttonStyle: {
        width: 100,
        height: 50,
        //backgroundColor: '#ffdd00',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,

        paddingTop: 15
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: '#0055ff'
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
        borderWidth: 2,
        borderColor: '#3e5f36',
    },
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#000'
    },

    topButtonsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 4,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    smallImageStyle: {
        width: 20,
        heigth: 20
    }


};

export default PlantDetailScreen;

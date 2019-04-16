import React from 'react';
import { Text, Image } from 'react-native';
import { Card, CardSection } from '../common/index';

const NotificationExpanded = ({ title, description, imageSource }) => {
    const {  
        titleStyle, 
        descriptionStyle, 
        imageStyle,
     } = styles;
    return (
        <Card>
            <CardSection>
                 <Image
                    style={imageStyle}
                    source={imageSource}
                 />
            </CardSection>
            <CardSection>
                <Text style={titleStyle}>{title}</Text> 
            </CardSection>

            <CardSection>
                <Text style={descriptionStyle}>{description}</Text>
            </CardSection>
        </Card>

    );
};

const styles = {
    containerStyle: {
        flex: 1
    },
    imageContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 13,
        flex: 1
    },
    imageStyle: {
        marginTop: 15,
        height: 180, 
        width: null,
        flex: 1
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    descriptionStyle: {
        fontSize: 16,
        color: '#000'
    }
};

export default NotificationExpanded;

/**
 * This is a notification that "pops-up" with the help of modal, with a card with a close button.
 * It's triggered with a "notis-button"
 * Last Modified: 2019-04-16
 * Authors: Jonathan Köre, Liwia Larsson
 */

import React, { Component } from 'react';
import { Text, Image, Modal, Button, View } from 'react-native';
import { Card, CardSection } from '../common/index';


class NotificationExpanded extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalVisible !== this.state.modalVisible) {
          this.setState({ modalVisible: nextProps.modalVisible });
        }
      }
    
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        const {  
            titleStyle, 
            descriptionStyle, 
            imageStyle,
            buttonContainer
         } = styles;
         return (
            <View>
                {/*Modal is the Component that becomes visible when the state is set to visible*/}
                <Modal
                    animationType="slide"
                    transparent
                    visible={this.state.modalVisible}
                >
                <View style={{ marginTop: 20 }}>
                <Card>
                    <CardSection>
                        <Image
                            style={imageStyle}
                            source={this.props.imageSource}
                        />
                        <View style={buttonContainer}>
                            <Button 
                                onPress={() => this.setModalVisible(false)} 
                                title="x"
                            />
                        </View> 
                    </CardSection>
                    <CardSection>
                        <Text style={titleStyle}>{this.props.title}</Text> 
                    </CardSection>
        
                    <CardSection>
                        <Text style={descriptionStyle}>{this.props.description}</Text>
                    </CardSection>
                </Card>  
                </View>
            </Modal>
        </View>
        );
    }   
}

const styles = {
    containerStyle: {
        flex: 1
    },
    imageStyle: {
        marginTop: 10,
        height: 180, 
        width: null,
        flex: 1
    },
    buttonContainer: {
        position: 'absolute', 
        top: 0,
        right: 0
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

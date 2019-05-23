/**
 * This is a notification that "pops-up" with the help of modal, with a card with a close button.
 */

import React, { Component } from 'react';
import { Text, Image, Modal, Button, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common/index';
import * as actions from '../../actions';
import { store } from '../../App';
import NavigationService from '../../services/NavigationService';
import images from '../../resources/images/index';


class NotificationExpanded extends Component {

    renderExpandedNotification() {
        const { titleStyle, descriptionStyle, imageStyle, buttonContainer } = styles;
        if (this.props.modalVisible) {
            const { title, description, imageURL } = this.props.notification;
            return (
                <React.Fragment>
                    <CardSection>
                        <Image
                            style={imageStyle}
                            source={images[imageURL]}
                        />
                        <View style={buttonContainer}>
                            <Button
                                onPress={() => this.props.expandNotification(null)}
                                title="x"
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>

                    <CardSection>
                        <Text style={descriptionStyle}>{description}</Text>
                    </CardSection>
                </React.Fragment>
            );
        }
    }

    renderNavButton() {
        if (this.props.notification !== null) {
           const { type, refKey } = this.props.notification;
            switch (type) {
            case 'product':
                 return (
                    <Button 
                        title='Gå till produkt'
                        onPress={() => {
                            this.props.expandNotification(null);

                            const product = store.getState().products.get(refKey);
                            if (typeof product === 'undefined') {
                                Alert.alert('Produkten är inte tillgänglig just nu');
                            } else {
                                NavigationService.navigate('ShopDetails', { product });
                            }
                        }}
                    />);
            case 'water':
                return (
                    <Button 
                        title='Gå till din plantlista'
                        onPress={() => {
                            NavigationService.navigate('Plants');
                            this.props.expandNotification(null);
                        }}
                    /> 
                );
            }  
        }
    }


    render() {
        const { imageStyle, buttonContainer } = styles;
        return (
            <View>
                {/*Modal is the Component that becomes visible when the state is set to visible*/}
                <Modal
                    animationType="slide"
                    transparent
                    visible={this.props.modalVisible}
                >
                    <View style={{ marginTop: 20 }}>
                        <Card>
                            {this.renderExpandedNotification()}
                            {this.renderNavButton()}
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
        width: 200,
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

const mapStateToProps = state => {
    return {
        notification: state.expandedNotification,
        imagePlaceHolder: require('./../../resources/images/tomat.jpg'),
        modalVisible: (state.expandedNotification !== null)
    };
};

export default connect(mapStateToProps, actions)(NotificationExpanded);

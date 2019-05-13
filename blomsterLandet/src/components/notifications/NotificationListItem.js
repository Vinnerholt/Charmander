import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as actions from '../../actions';

class NotificationListItem extends Component {

    render() {
        const { itemStyle, textStyle, arrowStyle, crossStyle } = styles;
        const notification = this.props.notification.item;
        const { title } = notification;
        return (
            <TouchableOpacity style={itemStyle} onPress={() => this.props.expandNotification(notification)}>
                <TouchableOpacity>
                    <Icon name="close" style={crossStyle} onPress={() => this.props.removeNotification(notification)} />
                </TouchableOpacity>
                <Text style={textStyle}>
                    {title}
                </Text>
                <Icon name="chevron-right" style={arrowStyle} />
            </TouchableOpacity>
        );
    }
}

const styles = {
    textStyle: {
        flex: 9,
        color: 'black',
        fontSize: 16
    },
    arrowStyle: {
        fontSize: 30,
        paddingRight: 5,
        flex: 1,
        color: '#000'
    },
    crossStyle: {
        fontSize: 30,
        paddingLeft: 5,
        flex: 1,
        color: 'grey'
    },
    itemStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginBottom: 1,
        borderBottom: 1,
        borderColor: 'grey',
        padding: 10,
        height: 50,
        alignItems: 'center',
    }
};

export default connect(null, actions)(NotificationListItem);

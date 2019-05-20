import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CollapseButton from '../../components/common/CollapseButton';
import images from '../../resources/images/index';
import BuyButton from '../../components/shop/BuyButton';
import SmallButton from '../../components/common/SmallButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

let self;
let image;

class ShopItemPreviewScreen extends Component {

    state = { amountText: '1' };

    componentWillMount() {
        self = this;
        image = images[this.props.navigation.getParam('product').key];
    }
    
    onChanged(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (let i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1 ) {
                newText += text[i];
            } else {
            }
        }
        this.setState({ amountText: newText });
    }

    render() {
        const { amountInput, nameStyle, imageContainerStyle, viewCenterStyle,
            imageStyle, waterButtonStyle, waterButtonTextStyle, bottomButtonsContainerStyle, speciesStyle,
            scrollViewStyle, topButtonsContainerStyle, iconStyle } = styles;

        console.log(this.state.amountText);
        return (
            <ScrollView contentContainerStyle={scrollViewStyle}>
                <View style={topButtonsContainerStyle}>
                    <SmallButton onPress={() => {
                        self.props.navigation.navigate('Home');
                    }}>

                        <Icon
                            style={iconStyle}
                            name="arrow-back"
                        />
                    </SmallButton>
                </View>
                <View style={scrollViewStyle}>
                    <View style={imageContainerStyle}>
                        <Image 
                            style={imageStyle}
                            source={image} 
                        />
                    </View>
                </View>

                <View style={viewCenterStyle}>
                    <Text style={nameStyle}>
                        {self.props.navigation.getParam('product').name}
                    </Text>
                    <Text style={speciesStyle}>
                        {self.props.navigation.getParam('product').price} kr/st
                    </Text>
                </View>

                <View style={bottomButtonsContainerStyle}>
                    <View style={[viewCenterStyle]}>
                        <CollapseButton
                            header={'Information'}
                            body={self.props.navigation.getParam('product').extendedDescription}
                        />
                    </View>
                </View>
                <View style={styles.buyButtonStyle}>
                    <TextInput 
                        style={amountInput}
                        keyboardType='numeric'
                        onChangeText={(text) => this.onChanged(text)}
                        value={this.state.amountText}
                    />
                    <BuyButton 
                        style={waterButtonStyle}
                        product={this.props.navigation.getParam('product')}
                        // eslint-disable-next-line radix
                        amount={parseInt(this.state.amountText)}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    amountInput: {
        fontSize: 20,
        height: 55,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 3
    },
    topButtonsContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 4,
        width: '100%'
    },
    iconStyle: {
        fontSize: 30,
        paddingRight: 5,
        flex: 1,
        color: '#3e5f36',
    },
    buyButtonStyle: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
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
        width: 200,
        height: 200,
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
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    waterButtonTextStyle: {
        fontSize: 30,
        color: '#fff'
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
    gaugeImageContainerStyle: {
        position: 'absolute',
        top: 25,
        left: 25,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export default ShopItemPreviewScreen;


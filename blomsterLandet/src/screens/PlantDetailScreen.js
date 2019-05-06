import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import SmallButton from '../components/common/SmallButton';
import CollapseButton from '../components/common/CollapseButton';
import images from '../resources/images/index';

let self;
let image;

class PlantDetailScreen extends Component {

    componentDidMount(){
        self = this;
        image = images[this.props.navigation.getParam('plant', 'Det funkar ej').name];
    }
    
    render() {
        const { nameStyle, imageContainerStyle, viewCenterStyle,
            topButtonsContainerStyle, imageStyle, speciesStyle,
            waterButtonStyle, waterButtonTextStyle, bottomButtonsContainerStyle,
            scrollViewStyle, iconStyle, gaugeImageContainerStyle } = styles;

        return (
            <ScrollView>
                <View style={topButtonsContainerStyle}>
                    <SmallButton onPress={() => self.props.navigation.navigate('Home')}>

                        <Icon
                            style={iconStyle}
                            name="arrow-back"
                        />
                    </SmallButton>

                    <SmallButton>
                        <Icon
                            style={iconStyle}
                            name="brush"
                        />
                    </SmallButton>
                </View>

                

                <View style={scrollViewStyle}>
                    <View style={imageContainerStyle}>
                    <AnimatedGaugeProgress
                        size={250}
                        width={15}
                        fill={100}
                        rotation={90}
                        cropDegree={90}
                        tintColor="#4682b4"
                        delay={0}
                        backgroundColor="#b0c4de"
                        stroke={[2, 2]} //For a equally dashed line
                        strokeCap="circle" 
                        >
                            <View style={gaugeImageContainerStyle}>
                                <Image 
                                    style={imageStyle}
                                    source={this.props.navigation.getParam('plant', 'Det funkar ej').image} 
                                />  
                            </View>
                    </AnimatedGaugeProgress>
                    </View>
                </View>

                <View style={viewCenterStyle}>
                    <Text style={nameStyle}>{this.props.navigation.getParam('plant', 'Det funkar ej').name}</Text>

                    <Text style={speciesStyle}>{this.props.navigation.getParam('plant', 'Det funkar ej').type}</Text>
                </View>

                <View style={viewCenterStyle}>
                    <TouchableOpacity style={waterButtonStyle}>
                        <Text style={waterButtonTextStyle}>VATTNA</Text>
                    </TouchableOpacity>
                </View>

                <View style={bottomButtonsContainerStyle}>
                    <View style={[viewCenterStyle]}>
                        <CollapseButton
                            header={'Information'}
                            body={this.props.navigation.getParam('plant', 'Det funkar ej').extendedDescription}
                        />
                    </View>

                    <View style={viewCenterStyle}>
                        <CollapseButton
                            header={'Skötselråd'}
                            body={this.props.navigation.getParam('plant', 'Det funkar ej').advice}
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
        paddingTop: 10
    },
    topButtonsContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 4,
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
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

export default PlantDetailScreen;

import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as actions from './../../actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';
import SmallButton from '../../components/common/SmallButton';
import CollapseButton from '../../components/common/CollapseButton';
import AwesomeButton from "react-native-really-awesome-button";
import images from '../../resources/images/index';
import plantHandler from '../../services/plantHandler';
import { findPlant, calcVal, daysUntilWater } from '../../services/plantHandlerHelperFunctions';
import MyTextInput from '../../components/common/MyTextInput';
import DeleteButton from '../../components/common/DeleteButton';
import SaveButton from '../../components/common/SaveButton';


let self;
let nameLabel;
let topRightButton;
let deleteButton;
class PlantDetailScreen extends Component {
    state = { plant: this.props.navigation.getParam('plant', 'Det funkar ej') };


    componentWillMount() {
        self = this;
        self.loadPlant();
        self.value = 0;
        self.currentTime = Date.now() / 1000;
        self.value = calcVal(self.state.plant.lastWatered, self.state.plant.wateringInterval);
    }

    daysSinceWatered() {
        return Math.round((self.currentTime - self.props.navigation.getParam('plant', 'Det funkar ej').lastWatered)
            / (60 * 60 * 24));
    }

    daysUntilColor() {
        if (daysUntilWater(self.state.plant.lastWatered, self.state.plant.wateringInterval) < 1) {
            return styles.wateringDaysTextStyleRed;
        }
        return styles.wateringDaysTextStyle;
    }


    checkForEdit() {

        if (self.props.editMode) {
            nameLabel = (
                <MyTextInput
                    onChangeText={(text) => {
                        let tempPlant = self.state.plant;
                        tempPlant.name = text;
                        self.setState({ plant: tempPlant });
                    }}
                    value={self.state.plant.name}
                >
                </MyTextInput>);
            topRightButton = (
                <SaveButton
                    onPress={() => {
                        self.props.editMyPlantsData(self.state.plant);
                        self.props.toggleMyPlantsEditMode();
                        plantHandler.createFile(self.props.myPlants);

                    }}
                >
                    <Icon
                        name="save"
                        style={styles.iconStyle}
                        color='white'
                    />
                </SaveButton>
            );
            deleteButton = (
                <DeleteButton
                    title="Ta bort växt"
                    onPress={self.deletePlantPressed}
                />
            )
        } else {
            nameLabel = (
                <Text style={styles.nameStyle}>
                    {self.state.plant.name}
                </Text>
            );
            topRightButton = (
                <SmallButton
                    onPress={() => {
                        self.props.toggleMyPlantsEditMode();
                    }}
                >
                    <Icon style={styles.iconStyle} name="brush" />
                </SmallButton>
            );
            deleteButton = null;
        }

    }
    loadPlant() {
        var tempPlant = findPlant(self.props.myPlants, self.state.plant.key);
        self.setState({ plant: tempPlant });
    }

    deletePlantPressed() {

        Alert.alert(
            'Varning',
            'Är du säker på att du vill ta bort ' + self.state.plant.name,
            [
                {
                    text: 'ångra',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Ta bort', onPress: self.confirmDeletePlant },
            ],
            { cancelable: false },
        );
    }

    waterButtonPressed() {
        self.props.waterPlant(self.state.plant);
        self.value = calcVal(self.state.plant.lastWatered, self.state.plant.wateringInterval);
        plantHandler.createFile(self.props.myPlants);

    }
    //Deletes the plant from the database and directs user to the myplants screen
    confirmDeletePlant() {
        self.props.deletePlant(self.state.plant);
        self.props.navigation.navigate('Home');
        if (self.props.editMode) {
            self.props.toggleMyPlantsEditMode();
        }
        plantHandler.createFile(self.props.myPlants);
    }

    render() {
        const { nameStyle, imageContainerStyle, viewCenterStyle,
            topButtonsContainerStyle, imageStyle, speciesStyle,
            waterButtonStyle, waterButtonTextStyle, bottomButtonsContainerStyle,
            scrollViewStyle, iconStyle, gaugeImageContainerStyle,
            gaugeContainerStyle, wateringDaysTextStyle, wateringDaysTextStyleRed } = styles;

        self.checkForEdit();
        return (
            <ScrollView contentContainerStyle={scrollViewStyle}>
                <View style={topButtonsContainerStyle}>
                    <SmallButton onPress={() => {
                        if (self.props.editMode) {
                            self.props.toggleMyPlantsEditMode();
                        }
                        self.props.navigation.navigate('Home');
                    }}>

                        <Icon
                            style={iconStyle}
                            name="arrow-back"
                        />
                    </SmallButton>

                    {topRightButton}
                </View>
                <View style={gaugeContainerStyle}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 10 }}>{`  dagar kvar  `}</Text>
                        <Text style={self.daysUntilColor()}>
                            {daysUntilWater(self.state.plant.lastWatered, self.state.plant.wateringInterval)}
                        </Text>
                    </View>

                    <View style={imageContainerStyle}>
                        <AnimatedGaugeProgress
                            size={250}
                            width={15}
                            fill={self.value}
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
                                    source={images[self.state.plant.type.toLowerCase()]}
                                />
                            </View>
                        </AnimatedGaugeProgress>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 10 }}>{`dagar sedan`}</Text>
                        <Text style={wateringDaysTextStyle}>{self.daysSinceWatered()}</Text>
                    </View>

                </View>

                <View style={viewCenterStyle}>

                    {nameLabel}

                    <Text style={speciesStyle}>
                        {self.state.plant.type}
                    </Text>
                </View>

                <View style={viewCenterStyle}>
                    <AwesomeButton
                        onPress={self.waterButtonPressed}
                        backgroundColor='#005496'
                        backgroundDarker='#b0c4de'
                        width={150}
                        textSize={18}
                    >
                        VATTNA
                    </AwesomeButton>
                </View>

                <View style={bottomButtonsContainerStyle}>
                    <View style={[viewCenterStyle]}>
                        <CollapseButton
                            header={'Information'}
                            body={self.state.plant.extendedDescription}
                        />
                    </View>

                    <View style={viewCenterStyle}>
                        <CollapseButton
                            header={'Skötselråd'}
                            body={self.state.plant.advice}
                        />
                    </View>

                    {deleteButton}
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
        height: 190,
        width: 190,
        overflow: 'hidden',
        borderRadius: 190 / 2,

    },
    viewCenterStyle: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    topButtonsContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 4,
        width: '100%'
    },
    waterButtonStyle: {
        width: 150,
        height: 55,
        backgroundColor: '#005496',
        borderRadius: 5,
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
    iconStyle: {
        fontSize: 40,
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
    },
    gaugeContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    wateringDaysTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3e5f36'
    },
    wateringDaysTextStyleRed: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ff0000'
    },

};

const mapStateToProps = (state, ownProps) => {

    return {
        navigation: ownProps.navigation,
        editMode: state.myPlantsEditMode,
        myPlants: state.myPlants
    };
};

export default connect(mapStateToProps, actions)(PlantDetailScreen);

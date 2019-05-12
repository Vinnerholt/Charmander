import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SmallButton from '../../components/common/SmallButton';
import CollapseButton from '../../components/common/CollapseButton';
import images from '../../resources/images/index';
import plantHandler from '../../services/plantHandler';


let self;
let image;
const plantPath = 'myPlants';

let nameLabel;
let topRightButton;
class PlantDetailScreen extends Component {
    state = { editMode: false, plant: this.props.navigation.getParam('plant', 'Det funkar ej') };

    componentWillMount() {
        self = this;
        self.loadPlant();
        image = images[self.state.plant.name];
    }


    checkForEdit() {
        console.log("in function");
        if (self.state.editMode) {
            nameLabel =
                <TextInput
                    onChangeText={(text) => {
                        let tempPlant = self.state.plant;
                        tempPlant.name = text;
                        self.setState({ plant: tempPlant });
                    }}
                    value={self.state.plant.name}>
                </TextInput>;
            topRightButton = (
                <Button
                    title="Save changes"
                    onPress={async () => {
                        await plantHandler.editPlant(self.state.plant).then(() => {
                            self.loadPlant();
                            this.setState({ editMode: !self.state.editMode });
                        });
                    }
                    }
                />)
        } else {
            nameLabel = (
                <Text style={styles.nameStyle}>
                    {self.state.plant.name}
                </Text>
            );
            topRightButton = (
                <SmallButton
                    onPress={() => {
                        this.setState({ editMode: !self.state.editMode });
                    }} >
                    <Icon style={styles.iconStyle} name="brush" />
                </SmallButton>
            );
        }
    }
    async loadPlant() {
        await plantHandler.getPlant(self.state.plant.key).then(dbPlant => {
            console.log("loadplant:");
            console.log(dbPlant);
            self.setState({ plant: dbPlant });
        });
    }

    render() {
        const { nameStyle, imageContainerStyle, viewCenterStyle,
            topButtonsContainerStyle, imageStyle, speciesStyle,
            waterButtonStyle, waterButtonTextStyle, bottomButtonsContainerStyle,
            scrollViewStyle, iconStyle } = styles;

        console.log(self.props.navigation.getParam('plant', 'Det funkar ej').image);
        console.log("HÄÄÄÄR");
        self.checkForEdit();
        return (
            <ScrollView>
                <Text>key: {self.state.plant.key}</Text>
                <View style={topButtonsContainerStyle}>
                    <SmallButton onPress={() => self.props.navigation.navigate('Home')}>

                        <Icon
                            style={iconStyle}
                            name="arrow-back"
                        />
                    </SmallButton>

                    {topRightButton}
                </View>

                <View style={scrollViewStyle}>
                    <View stylre={imageContainerStyle}>
                        <Image
                            style={imageStyle}
                            // eslint-disable-next-line global-require
                            source={images[self.state.plant.type]}
                        />
                    </View>
                </View>

                <View style={viewCenterStyle}>

                    {nameLabel}

                    <Text style={speciesStyle}>
                        {self.state.plant.type}
                    </Text>
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
                            body={self.state.plant.extendedDescription}
                        />
                    </View>

                    <View style={viewCenterStyle}>
                        <CollapseButton
                            header={'Skötselråd'}
                            body={self.state.plant.advice}
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
};

export default PlantDetailScreen;

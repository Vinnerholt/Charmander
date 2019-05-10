import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SmallButton from '../../components/common/SmallButton';
import CollapseButton from '../../components/common/CollapseButton';
import images from '../../resources/images/index';
import jsonStorage from '../../services/jsonStorage';




let self;
let image;
const plantPath = 'myPlants';
class PlantDetailScreen extends Component {

    componentWillMount() {
        self = this;
        image = images[this.props.navigation.getParam('plant', 'Det funkar ej').name];
    }


    render() {
        const { nameStyle, imageContainerStyle, viewCenterStyle,
            topButtonsContainerStyle, imageStyle, speciesStyle,
            waterButtonStyle, waterButtonTextStyle, bottomButtonsContainerStyle,
            scrollViewStyle, iconStyle } = styles;

        return (
            <ScrollView>
                <View style={topButtonsContainerStyle}>
                    <SmallButton onPress={() => self.props.navigation.navigate('Home')}>

                        <Icon
                            style={iconStyle}
                            name="arrow-back"
                        />
                    </SmallButton>

                    <SmallButton
                        onPress={getFile} >

                        <Icon

                            style={iconStyle}
                            name="brush"
                        />
                    </SmallButton>
                </View>

                <View style={scrollViewStyle}>
                    <View stylre={imageContainerStyle}>
                        <Image
                            style={imageStyle}
                            // eslint-disable-next-line global-require
                            source={self.props.navigation.getParam('plant', 'Det funkar ej').image}
                        />
                    </View>
                </View>

                <View style={viewCenterStyle}>
                    <Text style={nameStyle}>
                        {self.props.navigation.getParam('plant', 'Det funkar ej').name}
                    </Text>

                    <Text style={speciesStyle}>
                        {self.props.navigation.getParam('plant', 'Det funkar ej').type}
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
                            body={self.props.navigation.getParam('plant', 'Det funkar ej').extendedDescription}
                        />
                    </View>

                    <View style={viewCenterStyle}>
                        <CollapseButton
                            header={'Skötselråd'}
                            body={self.props.navigation.getParam('plant', 'Det funkar ej').advice}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const getFile = async () => {
    await jsonStorage.getItem(plantPath).then(item => {

        console.log(item);
    }).catch(() => {
        /* const start = {
           notifications: []
         };
         start.notifications.push(plant);
         file = start;
         */
        console.log("catched");
    });

}

const createFile = async () => {


    const plant = {
        plantList: [{
            name: "tomat",
            type: "tomat",
            advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
            extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
            imageURL: "../../resources/images/tomat.jpg"
        },
        {
            name: "Carro",
            type: "Carro",
            advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
            extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
            imageURL: "../../resources/images/tomat.jpg"
        }
        ]
    };

    const file = plant;

    await jsonStorage.setItem(plantPath, file);
};
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

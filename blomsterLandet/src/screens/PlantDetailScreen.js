import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SmallButton from '../components/common/SmallButton';
import CollapseButton from '../components/common/CollapseButton';


const PlantDetailScreen = () => {
    const { nameStyle, imageContainerStyle, viewCenterStyle,
            topButtonsContainerStyle, imageStyle, speciesStyle,
            waterButtonStyle, waterButtonTextStyle, bottomButtonsContainerStyle,
            scrollViewStyle, iconStyle } = styles;

    return (
        <ScrollView>
            <View style={topButtonsContainerStyle}>
                <SmallButton>
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
                    <Image 
                        style={imageStyle}
                        // eslint-disable-next-line global-require
                        source={require('../resources/images/tomat.jpg')}
                    />
                </View>
            </View>
            
            <View style={viewCenterStyle}>
                <Text style={nameStyle}>Nils</Text>

                <Text style={speciesStyle}>Tomat</Text>
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
                    body={'Ger en riklig mängd tomater med god smak. Finns flera olika sorter. KRAV-odlade.'}
                    />
                </View>

                <View style={viewCenterStyle}>
                    <CollapseButton
                    header={'Skötselråd'}
                    body={`Läge: Sol 
Vatten: Mycket 
Höjd: 100 - 200 cm
Mognadstid: Juli, augusti, september och oktober.
Jordprodukter: Tomatjord, grönsaksjord, p-jord och u-jord.
Näring: Naturgödsel och trädgårdsgödsel.
Växtsätt: Upprätt.
Jordmån: Näringsrik jord, mullrik jord och väldränerad jord.`} 
                    />
                </View>  
            </View>
        </ScrollView>
    );
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
        borderRadius: 200/2,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 20,
    },
    imageStyle: {
        height: 200,
        width: 200,
        overflow: 'hidden',
        borderRadius: 200/2,
        borderWidth: 4,
        borderColor: '#3e5f36',
    },
    viewCenterStyle: {
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

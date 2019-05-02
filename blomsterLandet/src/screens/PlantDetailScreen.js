import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';


const PlantDetailScreen = (props) => {
    const { topButtonStyle, nameStyle, imageContainerStyle, viewCenterStyle,
            topButtonsContainerStyle, imageStyle, iconStyle, speciesStyle,
            waterButtonStyle, waterButtonTextStyle, bottomButtonsContainerStyle,
            bottomButtonStyle, bottomButtonTextStyle, scrollViewStyle } = styles;

    return (
        <ScrollView>
            <View style={topButtonsContainerStyle}>
                <TouchableOpacity style={topButtonStyle} onPress={() => props.navigation.navigate('Home')}>
                    <Icon
                        name="arrow-back"
                        style={iconStyle}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity style={topButtonStyle}>
                    <Icon 
                        name="brush"
                        style={iconStyle}
                    />
                </TouchableOpacity>
            </View>

            <View style={scrollViewStyle}>
                <View style={imageContainerStyle}>
                    <Image 
                        style={imageStyle}
                        /* Tomat.jpg flyttad till screens-mappen för att kunna visas. 
                        Ta reda på hur man sourcar bilder från andra mappar och 
                        flytta tillbaka den till images */
                        source={require('./tomat.jpg')}
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
                <View style={viewCenterStyle}>
                    <Collapse style={bottomButtonStyle}>
                        <CollapseHeader>
                            <View>
                                <Text style={bottomButtonTextStyle}>Information</Text>
                            </View>
                        </CollapseHeader>

                        <CollapseBody>
                            <Text style={{ paddingBottom: 10 }}>Ger en riklig mängd tomater med god smak. 
                                                                Finns flera olika sorter. KRAV-odlade.
                            </Text>
                        </CollapseBody>
                    </Collapse>
                </View>
            
                <View style={viewCenterStyle}>
                    <Collapse style={bottomButtonStyle}>
                        <CollapseHeader>
                            <View>
                                <Text style={bottomButtonTextStyle}>Skötselråd</Text>
                            </View>
                        </CollapseHeader>

                        <CollapseBody>
                            <Text style={{ paddingBottom: 10 }}>{`Läge: Sol 
Vatten: Mycket 
Höjd: 100 - 200 cm
Mognadstid: Juli, augusti, september och oktober.
Jordprodukter: Tomatjord, grönsaksjord, p-jord och u-jord.
Näring: Naturgödsel och trädgårdsgödsel.
Växtsätt: Upprätt.
Jordmån: Näringsrik jord, mullrik jord och väldränerad jord.`}
                            </Text>
                        </CollapseBody>
                    </Collapse>
                </View>
            </View>  
        </ScrollView>
    );
};

const styles = {
    topButtonStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingLeft: 8,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 20
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
        flex: 1,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },

    topButtonsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 4,

    },
    smallImageStyle: {
        width: 20,
        heigth: 20
    },
    iconStyle: {
        fontSize: 30,
        paddingRight: 5,
        flex: 1,
        color: '#3e5f36',
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
        flexDirection: 'column',
        alignContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },
    bottomButtonStyle: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3e5f36',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        paddingLeft: 10,
        shadowColor: '#050',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    bottomButtonTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'flex-end',
        color: '#3e5f36',
        paddingTop: 10,
        paddingBottom: 10
    },
    scrollViewStyle: {
        alignItems: 'center',
    }
};

export default PlantDetailScreen;

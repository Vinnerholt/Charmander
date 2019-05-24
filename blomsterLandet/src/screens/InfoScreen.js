import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import ProductCardContainer from '../components/shop/ProductCardContainer';

/**
 * Shows some tips for the user, connected to the current month of the year.
 */
class InfoScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <ScrollView>
                    <ProductCardContainer>
                    <Text style={styles.titleText}>Trädgårdskalender - maj</Text>
                    <Text style={styles.titleSubText}>Med trädgårdskalendern håller du koll på vad som behöver göras i trädgården månad för månad.</Text>
                    <Image
                        source={require('../resources/images/tipsblomma.jpg')}
                        style={{
                            width: '100%',
                            height: 200,
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    />
                        <Text style={styles.fatText}>Krukväxterna behöver näring</Text>
                        <Text style={styles.standardText}>Under våren och försommaren är tillväxten 
                            hos krukväxterna på topp och därför behöver de gödslas regelbundet. 
                            Ge en svag dos varje gång du vattnar eller full dos en gång i veckan. 
                            Lämplig utspädningsgrad står på förpackningen. Krukväxterna i söderfönstret 
                            kan behöva skuggas mitt på dagen när solen gassar som mest.</Text>

    


                        <Text style={styles.fatText}>Sommarblommor vill ut</Text>
                        <Text style={styles.standardText}>De sommarblommor du själv sått eller köpt som färdiga plantor börjar längta utomhus.
                            Men se upp – kommer det en frostnatt kan de ta stor skada och i värsta fall dö. 
                            Vänta med att flytta ut plantorna tills frostnätterna helt säkert är förbi – 
                            i kallare delar av landet kan det faktiskt dröja en bit in i juni. Järnnätter kallar man ibland senkomna frostnätter. 
                            Tänk också på att avhärda dina plantor, det vill säga vänja dem vid utevistelsen. 
                            Genom att ställa ut dem någon timme första dagen och sedan öka tiden successivt 
                            under en veckas tid så vänjer de sig långsamt vid det starka solljuset, vid vind och regn.</Text>
                    </ProductCardContainer>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    fatText: {
        fontWeight: 'bold',
        fontSize: 22,
        marginRight: 8,
        marginLeft: 8
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginRight: 8,
        marginLeft: 8,
        textAlign: 'center'
    },
    titleSubText: {
        fontStyle: 'italic',
        fontSize: 16,
        marginRight: 8,
        marginLeft: 8,
        textAlign: 'center'
    },
    standardText: {
        fontSize: 16,
        marginRight: 8,
        marginLeft: 8
    }
};

export default InfoScreen;

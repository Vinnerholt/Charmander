const types = [{
    type: "Tomat",
    advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
    extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
    wateringInterval: 3
},
{
    type: "Slanggurka",
    advice: "Att vattna jämnt och rikligt är viktigt för smaken. Bind upp plantan vid t.ex. en ståltrådsställning eller spaljé. Skörda gurkorna så fort de mognar. Om man låter dem sitta kvar hindrar det vidare fruktsättning.",
    extendedDescription: "Minislanggurka som trivs i växthus och ger rikligt med små, goda gurkor",
    wateringInterval: 4
},
{
    type: "Ros",
    advice: "Marktäckande ros som passar att plantera i grupp, som solitär, som häck eller i kruka.",
    extendedDescription: "Marktäckande ros som passar att plantera i grupp, som solitär, som häck eller i kruka.",
    wateringInterval: 7

},
{
    type: "Pärlhyacint",
    advice: "När pärlhyacinten dyker upp på butikshyllan vet man att våren är på ingång",
    extendedDescription: "Sval placering förlänger blomningen inomhus. Om du vill plantera ut lökarna efter blomningen fortsätter du vattna och ger växterna svag näring. Plantera ut lökarna när frosten släppt.",
    wateringInterval: 7
},
{
    type: "Silvernjurvinda",
    advice: "Odlas för de vackra silverfärgade bladens skull. Växter fort och fyller upp över krukkanten eller tomrummet mellan andra växter",
    extendedDescription: "Förhöjer färgerna på andra växter och därmed värdet på höstplanteringar. Odlas för de vackra bladens skull. Passar i kanten på stora krukor, urnor och i fönsterlådor. Även vacker tillsammans med andra silverskimrande bladväxter. Trivs i alla lägen. Planteras i genomsläpplig jord och dränerad kruka. Vattna, om växten står under tak. Står fin långt efter de första frostnätterna. Mycket odlingsvärd.",
    wateringInterval: 2
},
{
    type: "Ädelcypress",
    advice: "Elegant cypress med fin form och daggigt stålblåa barr. Ett vackert blickfång!",
    extendedDescription: "Snabbväxande, smal cypress med stålblåa barr. Fin som solitär eller i grupper i kombination med andra gröna växter.",
    wateringInterval: 3
},
{
    type: "Citron",
    advice: "Odla dina egna citroner! Den underbara blomdoften och medelhavskänslan får du på köpet.",
    extendedDescription: "Under sommaren trivs citronen bäst utomhus på skyddad plats. Övervintras ljust och frostfritt och vattnas då försiktigt. Kan tappa en del blad under vintern eller om plantan flyttas, men nya kommer. Underlätta eventuellt pollineringen med hjälp av en pensel, särskilt om växten står inomhus.",
    wateringInterval: 4
},
{
    type: "Chilipeppar",
    advice: "Låg och kompakt planta som passar bra att odla i kruka. Medelstarka röda frukter",
    extendedDescription: "Köp färdiga plantor eller förkultivera vid sådd. Toppa plantorna när de blivit 15-20 cm. Behöver ofta stöd. Kan torkas.",
    wateringInterval: 6

},
{
    type: "Päron",
    advice: "Medelstort päronträd som ger gulgröna, söta, saftiga och goda päron. I huvudsak friskt men kan angripas av skorv.",
    extendedDescription: "Planteras i väldränerad, näringsrik och mullrik jord. Gräv en stor grop och se till att jordkvaliteten är bra även runt planteringsgropen. Planteringsavstånd ca 5 m.I huvudsak friskt men kan angripas av skorv. Gott att äta som det är eller att tillaga.",
    wateringInterval: 3
},
{
    type: "Blåregn",
    advice: "Blommar tidigt med underbara, blålila blommor på bar kvist.",
    extendedDescription: "Passar bra att plantera vid husväggar och pergolor. Blommar tidigt på bar kvist. Observera att både blommorna och frukterna är giftiga.",
    wateringInterval: 3
}];

export default (state = types, action) => {
    switch (action.type) {
        case 'get_plant_types':
        default:
            return state;
    }
};
const types = [{
    type: "Tomat",
    advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
    extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
    wateringInterval: 1
},
{
    type: "Slanggurka",
    advice: "Gurky/Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
    extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
    wateringInterval: 4
},
{
    type: "Ros",
    advice: "Marktäckande ros som passar att plantera i grupp, som solitär, som häck eller i kruka.",
    extendedDescription: "Marktäckande ros som passar att plantera i grupp, som solitär, som häck eller i kruka.",
    wateringInterval: 7

}
]

export default (state = types, action) => {
    switch (action.type) {
        case 'get_plant_types':
        default:
            return state;
    }
};
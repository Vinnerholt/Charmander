const types = [{
    type: "tomat",
    advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
    extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas."
},
{
    type: "slanggurka",
    advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
    extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas."
},
{
    type: "ros",
    advice: "Marktäckande ros som passar att plantera i grupp, som solitär, som häck eller i kruka.",
    extendedDescription: "Marktäckande ros som passar att plantera i grupp, som solitär, som häck eller i kruka."

}
]

export default (state = types, action) => {
    switch (action.type) {
        case 'get_plant_types':
        default:
            return state;
    }
};
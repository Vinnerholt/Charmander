import plantHandler from './../services/plantHandler';
import { overwritePlant, deletePlant, waterPlant, addPlant } from './../services/plantHandlerHelperFunctions';

const data = {
    plantList: [{
        key: "001",
        name: "tomat",
        type: "tomat",
        advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
        extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
        imageURL: "../../resources/images/tomat.jpg"
    }
    ]
};

export default (state = null, action) => {
    switch (action.type) {
        case 'load_my_plants_data':
            return (action.payload);
        case 'delete_my_plant':
            return deletePlant(state, action.payload);
        case 'edit_my_plants_data':
            return overwritePlant(state, action.payload);
        case 'water_my_plant':
            console.log("in reducer");
            return waterPlant(state, action.payload);
        case 'add_my_plant':
            return addPlant(state, action.payload);
        default:
            return state;
    }
};


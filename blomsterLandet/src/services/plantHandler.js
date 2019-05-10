import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
import jsonStorage from './jsonStorage';


const plantPath = 'myPlants';

export default {


    async getFile() {
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
    },

    async createFile() {
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
    }
}

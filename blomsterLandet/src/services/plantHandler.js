import jsonStorage from './jsonStorage';
import { overwritePlant, findPlant } from './plantHandlerHelperFunctions';


const plantPath = 'myPlants10';

//used for testing
const dummyPlantlist = {
    plantList: [{
        key: "001",
        name: "tomat",
        type: "tomat",
        advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
        extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
        imageURL: "../../resources/images/tomat.jpg",
        lastWatered: 1557996093,
        wateringInterval: 12
    },
    {
        key: "002",
        name: "Aron edited",
        type: "slanggurka",
        advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
        extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
        imageURL: "../../resources/images/tomat.jpg",
        lastWatered: 1557741000,
        wateringInterval: 2
    }
    ]
};


export default {

    //gets the whole JSON file from the AsyncStorage
    async getFile() {
        return await jsonStorage.getItem(plantPath).then(item => {
            return item;

        }).catch(() => {
            console.log("errror");
            return "error";
        });
    },
    //returns a plant based on the key value 
    async getPlant(key) {
        return await jsonStorage.getItem(plantPath).then(item => {
            return findPlant(item, key);
        }).catch(() => {

            console.log("catched");
            return 'error';
        });
    },
    //overwrites the existing plant if it matches the keyvalue of the input.
    async editPlant(plant) {
        return await jsonStorage.getItem(plantPath).then(item => {
            return item;
        }).then(db => {
            overwritePlant(db, plant);
            return db;
        }).then(db => {
            return jsonStorage.setItem(plantPath, db);
        }).catch(() => {
            console.log("error editing Plant in DB");
        });
    },
    //creates a file in the async storage with a dummy plantList
    async createFile(myPlants) {
        await jsonStorage.setItem(plantPath, myPlants).then(() => {
            console.log("Created new myPlants file in DB");
        }).catch(() => {
            console.log("Error creating new myPlants file in DB");
        });
    },
    async createDummyFile() {
        await jsonStorage.setItem(plantPath, dummyPlantlist).then(() => {
            console.log("Created new myPlants file in DB");
        }).catch(() => {
            console.log("Error creating new myPlants file in DB");
        });
    }
}
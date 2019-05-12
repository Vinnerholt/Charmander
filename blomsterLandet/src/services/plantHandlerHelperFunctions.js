

const dummyPlant = {
    key: "001",
    name: "tester",
    type: "tomat",
    advice: "Annamay innehåller extra mycket av den nyttiga antioxidanten lykopen! Söt-syrlig smak.",
    extendedDescription: "Bind vid behov upp plantan efterhand som den växer. För mycket vatten och näring ger mer blad och mindre smak. Ska tjuvas. Vattnas rikligt men låt torka upp mellan vattningarna. Skall tjuvas.",
    imageURL: "../../resources/images/tomat.jpg"
};


export function checkForKey(db, plant) {
    for (var i in db.plantList) {
        console.log(db.plantList[i]);
        if (db.plantList[i].key == plant.key) {
            console.log("found it");
            db.plantList[i] = plant;
        } else {
            console.log("not found  DB:" + db.plantList[i].key + " plant:" + plant.key);
        }
    }
}

export function findPlant(db, key) {
    for (var i in db.plantList) {
        console.log(db.plantList[i]);
        if (db.plantList[i].key == key) {
            console.log("found it");
            return db.plantList[i];
        } else {
            console.log("not found  DB:" + db.plantList[i].key + " plant:" + key);
        }
    }
}


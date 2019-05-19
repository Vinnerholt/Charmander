
export function overwritePlant(db, plant) {

    for (var i in db.plantList) {


        if (db.plantList[i].key == plant.key) {
            console.log("Overwrote plant with key :" + plant.key);
            db.plantList[i] = plant;
            return JSON.parse(JSON.stringify(db));
        }
    }
    console.log("could not find plant key in database");
}

export function deletePlant(db, plant) {
    for (var i in db.plantList) {
        if (db.plantList[i].key == plant.key) {
            console.log("Overwrote plant with key :" + plant.key);
            db.plantList.splice(i, 1);
            return JSON.parse(JSON.stringify(db));
        }
    }
    console.log("could not find plant key in database");
}

export function findPlant(db, key) {
    for (var i in db.plantList) {
        console.log(db.plantList[i]);
        if (db.plantList[i].key == key) {
            console.log("found it");
            return db.plantList[i];
        }
    }
    console.log("Didnt find key: " + key);
}

export function calcVal(lastWatered, wateringInterval) {
    return 100 - (100 * ((Date.now() / 1000 - lastWatered)
        / (wateringInterval * 24 * 60 * 60)));
}


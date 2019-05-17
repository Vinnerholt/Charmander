
export function overwritePlant(db, plant) {
    for (var i in db.plantList) {
        console.log(db.plantList[i]);
        if (db.plantList[i].key == plant.key) {
            console.log("Overwrote plant with key :" + plant.key);
            db.plantList[i] = plant;
            return;
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
        } else {
            console.log("not found  DB:" + db.plantList[i].key + " plant:" + key);
        }
    }
}

export function calcVal(lastWatered, wateringInterval) {
    return 100 - (100 * ((Date.now() / 1000 - lastWatered) 
    / (wateringInterval * 24 * 60 * 60)));
}

export function daysUntilWater(lastWatered, wateringInterval) {
    return Math.round((lastWatered 
    - Date.now() / 1000) 
    / (60 * 60 * 24)
    + wateringInterval);
}



export function overwritePlant(db, plant) {

    for (var i in db.plantList) {


        if (db.plantList[i].key == plant.key) {
            console.log("Overwrote plant with key :" + plant.key);
            db.plantList[i] = plant;
            return db;
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


import firebase from 'firebase';

/**
 * Adds a new document to the "orders" collection on the firestore database.
 * The Parameters should ultimately be references to existing users and products on firestore,
 * but this is not a must.
 * 
 * @param {reference} product 
 * @param {reference} buyer 
 */
export const placeOrder = (product, buyer) => {
    const data = {
        product,
        buyer
    };
    writeOrderToDB(data);
};

const writeOrderToDB = (data) => {
    const db = firebase.firestore();
    // Add a new document with a generated id.
    db.collection('orders').add(data).then(ref => {
        console.log('Added document with ID: ', ref.id);
    });
};

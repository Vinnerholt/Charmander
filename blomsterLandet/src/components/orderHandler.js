/**
 * This file takes an order and writes it to firestore
 * 
 * Author: Jonathan Köre
 */

import firebase from 'firebase';

/**
 * Adds a new document to the "orders" collection on the firestore database.
 * The Parameters should ultimately be references to existing users and products on firestore,
 * but this is not a must.
 * 
 * 
 * @param {reference} product 
 * @param {number} amount This number should be positive
 * @param {reference} buyer 
 */
export const placeOrder = (product, amount, buyer) => {
    const data = {
        product,
        amount,
        buyer
    };
    writeOrderToDB(data);
};

const writeOrderToDB = (data) => {
    let db = null;

    // Returns if firebase cannot find reference to firestore
    try {
        db = firebase.firestore();
    } catch (error) {
        console.error(error);
        return;
    }
    // Add a new document with a generated id.
    db.collection('orders').add(data).then(ref => {
        console.log('Added document with ID: ', ref.id);
    }).catch(() => {
        console.log('Failed do add document to orders');
    });
};

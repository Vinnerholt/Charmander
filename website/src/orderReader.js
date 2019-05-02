import firebase from 'firebase/app';
import 'firebase/firestore';

/*export const fetchData = () => {
    let db = null;

    // Returns if firebase cannot find reference to firestore
    try {
        db = firebase.firestore();
    } catch (error) {
        console.error(error);
        return;
    }

    const orderRef = db.collection('orders');
    const allOrders = orderRef.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
    
}*/

export async function fetchData() {
    const snapshot = await firebase.firestore().collection('orders').get()
    return snapshot.docs.map(doc => doc.data());
}

export async function fetchProduct(productId) {
    const snapshot = await firebase.firestore().collection('products').doc(productId).get();
}

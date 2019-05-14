import firebase from 'react-native-firebase';

export default {
    getDocument(collectionId, documentId) {
        const ref = firebase.firestore().collection(collectionId).doc(documentId);
        return ref;
    },

    async getCollection(collectionId) {
        const snapshot = await firebase.firestore().collection(collectionId).get();
        return snapshot.docs.map(doc => doc.data());
    },

    placeOrder(data) {
        firebase.firestore().collection('orders').add(data)
        .catch(err => {
            console.log(err);
        }    
        );
    },
};

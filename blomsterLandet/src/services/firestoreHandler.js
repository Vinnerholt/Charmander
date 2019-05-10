import firebase from 'react-native-firebase';

export default {
    getDocument(collectionId, documentId) {
    const ref = firebase.firestore().collection(collectionId).doc(documentId);
    return ref;
    },

    placeOrder(data) {
        firebase.firestore().collection('orders').add(data)
        .catch(err => {
            console.log(err);
        }    
        );
    },
};

import firebase from 'firebase/app';
import 'firebase/firestore';

export const initializeApp = () => {
    const connect = firebase.initializeApp({ 
        apiKey: 'AIzaSyBeRrr2gQDkrrFoba4CBRsJJ06fN5O01hA',
        authDomain: 'blomsterlandet-83161.firebaseapp.com',
        databaseURL: 'https://blomsterlandet-83161.firebaseio.com',
        projectId: 'blomsterlandet-83161',
        storageBucket: 'blomsterlandet-83161.appspot.com',
        messagingSenderId: '1079685738047'
    });
    return connect;
};

import firebase from 'firebase/app';
import 'firebase/firestore';

/**
 * Initializes the app against firebase.
 * 
 * It will not initialize the app if it has already been initialized
 */
export const initializeApp = () => {
    if (!connected()) {
        firebase.initializeApp({ 
        apiKey: 'AIzaSyBeRrr2gQDkrrFoba4CBRsJJ06fN5O01hA',
        authDomain: 'blomsterlandet-83161.firebaseapp.com',
        databaseURL: 'https://blomsterlandet-83161.firebaseio.com',
        projectId: 'blomsterlandet-83161',
        storageBucket: 'blomsterlandet-83161.appspot.com',
        messagingSenderId: '1079685738047' });
    } else {
        console.log('Connection to firebase not needed, you are already connected');
    }
};

const connected = () => firebase.apps.length !== 0;

/* eslint-disable no-undef */
import 'react-native';
import firebase from 'firebase/app';
import * as firebaseHandler from '../src/firebaseHandler';

it('can connect to firebase', () => {
    expect(!firebase.apps.length).toBe(true);
    firebaseHandler.initializeApp();
    expect(!firebase.apps.length).toBe(false);
});

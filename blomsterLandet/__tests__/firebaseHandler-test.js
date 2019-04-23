import 'react-native';
import * as firebaseHandler from '../src/firebaseHandler';

it('can connect to firebase', () => {
    expect(firebaseHandler.initializeApp()).toBeTrue;
});

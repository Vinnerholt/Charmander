import AsyncStorage from '@react-native-community/async-storage';
import { store } from '../App';

/**
 * The jsonStorage saves a json file locally on the device.
 * 
 * The key is the name of the json file.
 */
export default {
    async setItem(key, value) {
        try {
            return await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // console.error('AsyncStorage#setItem error: ' + error.message);
        }
    },
    async getItem(key) {
        return await AsyncStorage.getItem(key)
            .then((result) => {
                if (result) {
                    try {
                        result = JSON.parse(result);
                    } catch (e) {
                        // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
                    }
                }
                return result;
            });
    },
    async removeItem(key) {
        return await AsyncStorage.removeItem(key);
    },

    async saveSession() {
        const file = {
            notifications: []
        };
        
        file.notifications = store.getState().notifications;
        return await AsyncStorage.setItem('notifications', file);
    }
};

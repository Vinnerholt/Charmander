import firestoreHandler from '../services/firestoreHandler';

export default {
    finalizeOrder(order) {
        const finalOrder = {
            buyer: 'Hugo',
            postalCode: 41326,
            order: null
        };

        for (let i in order) {
           const newOrder = {
               amount: order[i].amount
           }; 
        }
    }
};

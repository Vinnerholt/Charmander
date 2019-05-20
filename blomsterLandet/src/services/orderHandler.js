import firestoreHandler from '../services/firestoreHandler';

export default {
    async finalizeOrder(order) {
        const finalOrder = {
            buyer: 'Hugo',
            postalCode: 41326,
            order: []
        };

        for (let i in order) {
            const ref = await firestoreHandler.getDocument('products', order[i].product.key);

            const newOrder = {
                product: ref,
                amount: order[i].amount
            }; 

            finalOrder.order.push(newOrder);
        }

        firestoreHandler.placeOrder(finalOrder);
    }
};
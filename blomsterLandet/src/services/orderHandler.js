import firestoreHandler from '../services/firestoreHandler';

export default {
    /**
     * Takes in an order const and creates a final order in 
     * the correct format for the database. 
     * 
     * @param {*} order
     */
    async finalizeOrder(order) {
        const finalOrder = {
            buyer: 'Kalle Kuling',
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

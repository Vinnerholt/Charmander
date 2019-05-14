import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';
import ProductCard from './ProductCard';
import firestoreHandler from '../../services/firestoreHandler';

let self;
class ProductList extends Component {
    state = { products: [] };

    /*  componentWillMount() {
          axios.get('https://gist.githubusercontent.com/ilcarolineJonsson/1a170871c66ab0255396df3c7553902c/raw/8fb0ba8e5327ce032b277e97304551e6204dd97e/products')
              .then(response => this.setState({ products: response.data }));
      }*/
    componentWillMount() {
        self = this;
        self.loadProducts();
    }

    async loadProducts() {
        firestoreHandler.getCollection('products').then(products => {
            self.setState({ products });
        }).then(err => {
            console.log(err);
        });
    }
    renderProducts() {
        return this.state.products.map(product =>
            <ProductCard key={product.key} product={product} navigation={this.props.navigation} />);
    }

    render() {
        return (
            <ScrollView>
                {this.renderProducts()}
            </ScrollView>
        );
    }
}

export default ProductList;

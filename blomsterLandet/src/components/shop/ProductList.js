import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as storeActions from '../../actions/storeActions';
import { store } from '../../App';
//import axios from 'axios';
import ProductCard from './ProductCard';
import { Spinner } from '../common';

let self;
class ProductList extends Component {

    componentWillMount() {
        self = this;
    }

    renderProducts() {
        const arr = [];
        self.props.products.forEach(product => 
            arr.push(<ProductCard key={product.key} product={product} navigation={self.props.navigation} />));
        if (arr.length === 0) {
            return <Spinner />;
        }
        return arr;
    }

    render() {
        return (
            <ScrollView>
                {self.renderProducts()}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return { products: state.products };
};

export default connect(mapStateToProps, storeActions)(ProductList);

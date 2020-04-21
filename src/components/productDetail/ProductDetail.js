import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Header/Product/Product';

const ProductDetail = () => {
    const {key} = useParams();
    const product = fakeData.find(pd => pd.key === key);
    return (
        <div>
            <h2>{key} product detail here</h2>
    <Product>Product = {product}</Product>
        </div>
    );
};

export default ProductDetail;
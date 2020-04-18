import React from 'react';
import { useState } from 'react';
import fakeData from '../../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const first10 =  fakeData.slice(0,10);
    const [products] = useState(first10);
    const [cart , setCart] = useState([]);
    const newCart = [...cart , Product];
    setCart(newCart);
    const handleAddProduct = (product) => {
        console.log("Product Added", product);
    }
    
    return (
        <div className="Shop-container">
            <div className="products-container">
                  {
            products.map(product => <Product 
                handleAddProduct = {handleAddProduct}
                product={product}    > </Product>)
        }
           </div>
            <div className="cart-container">
    <h4>order summery:{cart.length}</h4>
            </div>
            
    
    
        </div>
    );
};

export default Shop;
import React from 'react';
import { useState } from 'react';
import fakeData from '../../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../../Cart/Cart';
const Shop = () => {
    const first10 =  fakeData.slice(0,10);
    const [products ,setProducts] = useState(first10);
    const [Cart , setCart] = useState([]);
    
    
    const handleAddProduct = (product) => {
        console.log("Product Added", product);
        const newCart = [...Cart , Product];
    setCart(newCart);
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
                 <Cart Cart ={Cart}>  </Cart>
            </div>
            
    
    
        </div>
    );
};

export default Shop;
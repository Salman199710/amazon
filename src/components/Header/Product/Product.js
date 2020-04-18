import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
const Product = (props) => {
    //console.log(props)
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="Product" >
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h3 className="Product-name"> {name}   </h3>
                <br />
                <p> <small> by: {seller} </small></p>
                <p>TK:{price}</p>
                <br />
                <p><small>only {stock} left in stock-order soon </small></p>
                 <button className="Main-button" 
                 onClick = {() => props.handleAddProduct(props.product)}
                 ><FontAwesomeIcon icon={faCartPlus} /> Add to cart here</button>
            </div>


        </div>
    );
};

export default Product;
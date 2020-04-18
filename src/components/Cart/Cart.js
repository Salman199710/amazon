import React from 'react';

const cart = (props) => {
    const Cart = props.cart;
    const totalPrice = Cart.reduce((total, thing ) =>  total+ thing.price , 0);
    return ( 
        <div>
            <h4>order summery</h4>
    <p>items ordered:{Cart.length}</p>
    <p> Total price :{totalPrice} </p>
        </div>
    );
};

export default cart;
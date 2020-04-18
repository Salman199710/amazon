import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, thing ) =>  total+ thing.price , 0);
    //another way to price add
    let total =0 ;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
         total = total + product.price;
    }


    let shipping = 0;
    if(total > 0){
        shipping =20;
    }
     if(total>100){
        shipping =10;
    }
     if(total>200){
        shipping =5
    }


    const tax = (total/10).toFixed(2)  ;
    const grandTotal = (total+shipping + Number(tax)).toFixed(2);
    return ( 
        <div>
            <h4>order summery</h4>
    <p>items ordered:{cart.length}</p>
    <p>Product price :{Number(total).toFixed(2)}</p>
    <p><small> shipping cost :{shipping}</small></p>
    <p><small>Tax :{tax} </small></p>

    <p> Total price : {grandTotal} </p>

        </div>
    );
};

export default Cart;
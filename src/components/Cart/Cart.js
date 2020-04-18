import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h4>order summery</h4>
    <p>items ordered:{cart.length}</p>
        </div>
    );
};

export default cart;
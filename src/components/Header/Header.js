import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header  = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">shop</a>
                <a href="/review"> order review</a>
                <a href="/inventory"> manage inventorys</a>
            </nav>
        </div>
    );
};

export default Header;
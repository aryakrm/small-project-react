import React from 'react';
import './Nav.css';

const links = (
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
);

const Nav = () => {
    return (
        <div>
            <nav>{links}</nav>
        </div>
    );
};

export default Nav;

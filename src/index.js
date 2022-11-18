import React from 'react';
import reactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

const root = document.querySelector('#root');
const myApp = <App />;

reactDOM.render(myApp, root);

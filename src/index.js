import ReactDOM from 'react-dom';
import React from 'react';

import App from './App'

import './index.css'

import books from './books.json'

ReactDOM.render (
    <App books={books} />,
    document.getElementById('root')
);

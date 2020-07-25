import ReactDOM from 'react-dom';
import React from 'react';

import App from './App'

const book = {
    'Title': 'Dark tower',
    'Description': 'About shooter and dark tower',
    'Pages': '10 000',
    'Language': 'RU',
    'Progress': '87%',
    'ImageURL': 'https://i.pinimg.com/236x/90/88/5b/90885b0aba135375e4e2c57e1b678100--dark-tower-tattoo-book-tattoo.jpg',
    'Author': 'Stiven King',
    'MinimalPrice': '200 $',
    'WantedPcice': '300 $',
    'MoneyWeHave': '50 $',
    'MoneyWeExpected': '550 $'
};

const author = {
    'Name': 'Stiven King',
    'Email': 'stin.king@horror.com',
    'ImageURL': 'https://i3.mybook.io/p/x256/author_photos/6e/8a/6e8afd0a-2d58-48c4-b468-e8d66f9b312f.jpg?v2',
    'Description': 'King of horror'
};

ReactDOM.render (
    <App book={book} />,
    document.getElementById('root')
);

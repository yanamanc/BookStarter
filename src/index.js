import ReactDOM    from 'react-dom';
import React       from 'react';

import App         from './App'
import books       from './books.json'
import AuthContext from "~/src/AuthContext"

import './index.css'

const user = {
    "Email": "yana.mantsevich@corevist.com",
    "FirstName": "Yana",
    "LastName": "Mantsevich",
    "AvatarUrl": "https://sun9-54.userapi.com/c857532/v857532101/51bf0/bf8iULncfhI.jpg"
  };

ReactDOM.render (
    <AuthContext.Provider value={user}>
      <App books={books} />
    </AuthContext.Provider>,
    document.getElementById('root')
);

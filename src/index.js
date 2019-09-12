import Firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const config = {
  apiKey: 'AIzaSyAbog8thHCc_2lhPwHcP050Hugi97uYo1o',
  authDomain: 'rainbarrel-dev.firebaseapp.com',
  databaseURL: 'https://rainbarrel-dev.firebaseio.com',
  projectId: 'rainbarrel-dev',
  storageBucket: 'rainbarrel-dev.appspot.com',
  messagingSenderId: '9213028884'
};

Firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

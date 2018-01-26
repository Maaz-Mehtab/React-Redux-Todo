import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
// import allReducer from './store/store';

// import firebase from 'firebase';
// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBll_oanbXLq-s_g7Tbp9hM6UwHkjaTBhI",
//     authDomain: "todoapp-11111.firebaseapp.com",
//     databaseURL: "https://todoapp-11111.firebaseio.com",
//     projectId: "todoapp-11111",
//     storageBucket: "todoapp-11111.appspot.com",
//     messagingSenderId: "937490587630"
//   };
//   firebase.initializeApp(config);
//   const store = createStore(allReducer)
import store from './store';
ReactDOM.render(<div>
    <Provider store={store}>
   <App />
   </Provider>
   </div>,
    document.getElementById('root')
);

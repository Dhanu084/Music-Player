import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index'
import movies from './reducers'
const store = createStore(movies);
// console.log('Store',store);
// console.log(store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'SuperMan'}]
// });
// console.log(store.getState());
ReactDOM.render(
    <App store={store} />,
  document.getElementById('root')
);


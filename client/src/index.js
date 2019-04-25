import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// The provider is just a component takes a store prop
// and gives all of our other components 
// access to that store when they need it
import { Provider } from 'react-redux';

// We need the creatStore function to house all of our state
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
 ,
    document.getElementById("root")
 );

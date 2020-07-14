/**
 * Comments are done quickly, cannot ensure all information presented is accurate or 
 * up to date in future time, but the purpose of these coments are to help
 * understand the tech we are learning at our bootcamp.
 * Date: 1/14/20
 */

// Import needed to render the web page
import React from 'react';
import ReactDOM from 'react-dom';

// Import for styling
import './index.css';

// Needed to render app component that houses all the components used in out SPA (Single Page Application)
import App from './App';

// import * as serviceWorker from './serviceWorker';

// This import is needed because the Provider Component allows 
// any component it wraps to have access to the store contents 
import { Provider } from "react-redux";

// This import provides the store that we set up in ./store/index.js
// NOTE: if the file you are importing is the `index.js` of a 
// directory, you can just use the directory name because the index.js 
// is implied;
import store from "./store";

// Provider: This is a component that we wrap around our entire component tree so that 
// every connected component (they have to be explicitly connected within their own files) 
// has access to the Redux store;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root')
);
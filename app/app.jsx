var React = require('react');
var ReactDOM = require('react-dom');
//var {Provider} = require('react-redux');
import { BrowserRouter } from 'react-router-dom';

import Application from 'Application';
import './api/initDB.jsx';
//import './playground.jsx';

//var store = require('configureStore').configure();

//store.subscribe(() => {
  //var state = store.getState();
  //console.log('New state', state);
//});
// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  //<Provider store={store}>
    <BrowserRouter>
      <Application/>
    </BrowserRouter>,
  //</Provider>,
  document.getElementById('app')
);

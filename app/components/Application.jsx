import React from 'react';
//var {connect} = require('react-redux');
import { IndexRoute, Switch, Route} from 'react-router-dom';

import Nav from 'Nav'
import Main from 'Main'
import About from 'About'
import Login from 'Login'

class Application extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div>
        <Nav/>
          <Route exact path='/' component={Main}/>
          <Route path='/about' component={About}/>
      </div>
    );
  }
}


export default Application;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from './actions';


import Random from './components/someRandomComponent';

class App extends Component {
  render() {
    return (      
        <Router>
          <div>
            <a href='http://localhost:3001/auth/google'>Login with Google</a>
            <h1>Hello World {this.props.batman}</h1>
            <button onClick={this.props.incrementCounter}>Increment</button>
            <button onClick={this.props.decrementCounter}>Decrement</button>
            <Random/>
          </div>
        </Router>
      );
  }
}

function mapStateToProps({counter}){
  return { batman: counter };
}

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(App);

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter, fetchUser, fetchTodos } from './actions';


import Todo from './components/Todo';

class App extends Component {


  componentDidMount() {
    this.props.fetchUser();
  }

  renderStuff() {
    if(this.props.auth) {
      return <Todo/>;
    } else {
      return <h1> You are not logged in</h1>;
    }
  }
  render() {
    return (      
        <Router>
          <div>
            <a href='http://localhost:3001/auth/google'>Login with Google</a>
            <a href='http://localhost:3001/api/logout'>Logout</a>
            <h1>Hello World {this.props.counter}</h1>
            <button onClick={this.props.incrementCounter}>Increment</button>
            <button onClick={this.props.decrementCounter}>Decrement</button>
            {this.renderStuff()}
          </div>
        </Router>
      );
  }
}

function mapStateToProps({counter, auth}){
  return { counter, auth };
}

export default connect(mapStateToProps, { incrementCounter, decrementCounter, fetchUser, fetchTodos })(App);

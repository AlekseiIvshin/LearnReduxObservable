import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestForm from './TestForm';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Last command was: {this.props.lastCommand}</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <TestForm/>
        </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  lastCommand: state.main.lastCommand,
})

export default connect(mapStateToProps)(App);

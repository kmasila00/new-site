import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leftBorder"/>
        <div className="appMain">
          <div className="navbar">
            <a>// About</a>
            <a>// Work</a>
            <a>// Experience</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

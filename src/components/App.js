import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="leftBorder"/>
          <div className="appMain">
            <Navbar/>
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

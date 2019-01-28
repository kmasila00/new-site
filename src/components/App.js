import React, { Component } from 'react';
import Home from './Home';
import Work from './Work';
import PageContainer from './PageContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="leftBorder"/>
          <PageContainer>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
          </PageContainer>
        </div>
      </Router>
    );
  }
}

export default App;

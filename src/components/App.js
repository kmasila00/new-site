import React, { Component } from 'react';
import Home from './Home';
import Work from './Work';
import PageContainer from './PageContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHome: true
    }
  }
  updateIsHome = (bool) => {
    this.setState({
      isHome: bool
    })
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="leftBorder"/>
          <PageContainer isHome={this.state.isHome}>
            <Route exact path="/" render={() => <Home updateIsHome={this.updateIsHome} isHome={this.state.isHome}/>} />
            <Route exact path="/work" render={() => <Work updateIsHome={this.updateIsHome} isHome={this.state.isHome}/>} />
          </PageContainer>
        </div>
      </Router>
    );
  }
}

export default App;

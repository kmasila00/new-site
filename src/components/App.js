import React, { Component } from 'react';
import Home from './Home';
import Work from './Work';
import About from './About';
import Experience from './Experience';
import PageContainer from './PageContainer';
import { ProjectPageCI, ProjectPageRPT, ProjectPageNEW, ProjectPageGROK, ProjectPageADM } from './ProjectPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div className="App">
            <div className="leftBorder"/>
            <PageContainer location={location}>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/work" render={() => <Work />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/experience" render={() => <Experience />} />
              <Route exact path="/work/ci" render={() => <ProjectPageCI />} />
              <Route exact path="/work/rpt" render={() => <ProjectPageRPT />} />
              <Route exact path="/work/adm" render={() => <ProjectPageADM />} />
              <Route exact path="/work/new" render={() => <ProjectPageNEW />} />
              <Route exact path="/work/grok" render={() => <ProjectPageGROK />} />
            </PageContainer>
          </div>
        )} />
      </Router>
    );
  }
}

export default App;

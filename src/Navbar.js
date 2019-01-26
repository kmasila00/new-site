import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => (
    <div className="navbar">
      <Link to="/"><a>// About</a></Link>
      <Link to="/"><a>// Work</a></Link>
      <Link to="/"><a>// Experience</a></Link>

      {/*<Route exact path="/" component={App} />*/}
      {/*<Route path="/about" component={App} />*/}
      {/*<Route path="/topics" component={App} />*/}
    </div>
);

export default Navbar;
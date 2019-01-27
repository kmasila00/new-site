import React, { Component } from 'react';
import '../styles/navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => (
    <div className="navbar">
      <Link to="/">// About</Link>
      <Link to="/">// Work</Link>
      <Link to="/">// Experience</Link>

      {/*<Route exact path="/" component={App} />*/}
      {/*<Route path="/about" component={App} />*/}
      {/*<Route path="/topics" component={App} />*/}
    </div>
);

export default Navbar;
import React, { Component } from 'react';
import '../styles/navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      { !props.isHome &&
        <Link className="nameHome" to="/">_Kelvin Masilamani</Link>
      }
      <Link to="/about">// About</Link>
      <Link to="/work">// Work</Link>
      <Link to="/experience">// Experience</Link>
    </div>
  );
}
export default Navbar;
import React, { Component } from 'react';
import '../styles/navbar.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      { props.location.pathname !== "/" &&
        <NavLink className="nameHome" to="/">_Kelvin Masilamani</NavLink>
      }
      <NavLink activeClassName='is-active' to="/about">// About</NavLink>
      <NavLink activeClassName='is-active'to="/work">// Work</NavLink>
      <NavLink activeClassName='is-active' to="/experience">// Experience</NavLink>
    </div>
  );
}
export default Navbar;
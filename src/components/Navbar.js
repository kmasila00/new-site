import React, { Component } from 'react';
import '../styles/navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => (
    <div className="navbar">
      <Link to="/">// Home</Link>
      <Link to="/about">// About</Link>
      <Link to="/work">// Work</Link>
      <Link to="/experience">// Experience</Link>
    </div>
);

export default Navbar;
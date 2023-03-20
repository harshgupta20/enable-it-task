import React from 'react';

// CSS
import "../styles/Navbar.css";

// Logo
import logo from "../img/enableIT-logo.png";

const Navbar = () => {
  return (
    <>
        <div id="navbar">
            <div id="nav-main">
                <img id="nav-img" src={logo} alt="logo" />
                <p id="nav-p">Assigment</p>
                <button id="nav-btn"> <a id="nav-a" rel="noreferrer" href="https://www.linkedin.com/in/harshgupta2001/" target="_blank">Connect With Me</a></button>
            </div>
        </div>
    </>
  )
}

export default Navbar
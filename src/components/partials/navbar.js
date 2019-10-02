import React, {useEffect, useContext, useState} from 'react';
import logo from '../../static/Images/logo.png';

function Navbar() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
          vi()
    }, []);
  return (
    <div className="Navbar">
      <nav className="navbar navibar">
          <div className="container-fluid contain contain-nav">
              <div className="navbar-header">
                    <a className="navbar-brand" href="/"><img src={logo} className="logo" /></a>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#navigation" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
              </div>

              <ul className="nav navbar-nav navbar-right">
                  <li className="navlist">
                      <a href="#Services" className="navlink">Services</a>
                  </li>
                  <li className="navlist">
                      <a href="#Portfolio" className="navlink">Portfolio</a>
                  </li>
                  <li className="navlist">
                      <a href="#Team" className="navlink">Team</a>
                  </li>
                  <li className="navlist">
                      <a href="#Careers" className="navlink">Careers</a>
                  </li>
                  <li className="navlist">
                      <a href="#Footer" className="navlink">Contact Us</a>
                  </li>
              </ul>
          </div>
      </nav>
      
    </div>
  );
}

let vi = async =>
{
    const navbarToggle = document.getElementsByClassName('navbar-toggle')[0];
const navbarNav = document.getElementsByClassName('navbar-nav')[0];
const mainContainer = document.getElementsByClassName('main-container')[0];

let triggered = false;
navbarToggle.onclick = () => {
    if (!triggered) {
    navbarNav.style.right = '0';
    mainContainer.style.right = '14rem';
} else {
    navbarNav.style.right= '-14rem';
    mainContainer.style.right = '0';
}
    triggered = !triggered;
};
}
      
export default Navbar;

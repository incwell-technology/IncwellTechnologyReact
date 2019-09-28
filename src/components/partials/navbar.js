import React from 'react';
import logo from '../../static/Images/logo.png';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navibar">
          <div className="container-fluid contain contain-nav">
              <div className="navbar-header">
                  <a className="navbar-brand" href="/"><img src={logo} className="logo" /></a>
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

export default Navbar;

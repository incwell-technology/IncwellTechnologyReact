import React, {useEffect, useContext, useState} from 'react';
import logo from '../../static/Images/logo.png';
import { timeout } from 'q';

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
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    const mainContainer = document.querySelector('.main-container');
    const navLinks = document.querySelectorAll('.navlink');
    const navibar = document.querySelector('.navibar');
    
    
    let collapsed = true;
    
    const dismissNavbar = (e) => {
        e.stopPropagation(); 
        navbarNav.style.right = '-14rem';
        mainContainer.style.right = '0';
        navibar.style.right = '0';
        collapsed = true;
    };
    
    navbarToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (collapsed) {
            navbarNav.style.right = '0';
            mainContainer.style.right = '14rem';
            navibar.style.right = '14rem';
            collapsed = false;
        } else {
            dismissNavbar(e);
        }
    }, false);

    navLinks.forEach(navlink => {
        navlink.addEventListener('click', (e) => {
            dismissNavbar(e);
        }, false);
    });
    
    mainContainer.addEventListener('click', (e) => {
        if (!collapsed) {
            dismissNavbar(e);
        }
    }, false);
 
}
      
export default Navbar;


import React from 'react';
import path11 from '../../static/Images/Path 11.svg';
import undraw from '../../static/Images/undraw_good_team_m7uu.svg';
function Header() {
  return (
    <div className="Header">
        <div className="page1">
            <div className="page1-background">
                <div className="page1-bg-left"><img src={path11} className="left-img-pg1"/></div>
                <div className="page1-bg-right"><img src={undraw} className="right-img-pg1"/></div>
            </div>
            <div className="contain">
                <div className="page1-container">
                    <div className="page1-tile">Design and build digital experiences with us</div>
                    <div className="page1-content">A team of innovative minds incorperated together to innovate something
                        that can help you
                        empower your business.</div>
                  <a href="www.incwell.com.np/contact-us" target="_blank">  <div className="page1-button">GET IN TOUCH</div></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;

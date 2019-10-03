import React from 'react';
import web from '../../static/Images/web-design (1).svg';
import mobile from '../../static/Images/mobile-app-developing.svg';
import lightbulb from '../../static/Images/lightbulb.svg';
import undraw from '../../static/Images/undraw_server_down_s4lk.svg';


function Service() {
  return (
    <div className="Service" id="Services">
         <div className="page3">
            <div className="contain pg2">
                <div className="page3-title">
                    OUR SERVICE DESCRIPTION
                </div>
                <div className="page3-grid-parent">
                    <div className="page3-grid-child">
                        <div className="page3-grid-child-title">Web Development</div>
                        <div className="page3-grid-child-content">
                            <div className="page3-grid-child-image">
                                <img className="page3-grid-child-img" src={web}/>
                            </div>
                            <div className="page3-grid-child-text">
                                Create a website to establish credibility as a business for better flexibility. </div>
                        </div>
                    </div>
                    <div className="page3-grid-child">
                        <div className="page3-grid-child-title">Mobile App Development</div>
                        <div className="page3-grid-child-content">
                            <div className="page3-grid-child-image">
                                <img className="page3-grid-child-img" src={mobile}/>
                            </div>
                            <div className="page3-grid-child-text">
                                Create an impactful mobile app that fits your brand and industry within a shorter
                                timeframe.
                            </div>
                        </div>
                    </div>
                    <div className="page3-grid-child">
                        <div className="page3-grid-child-title">IT Consulting</div>
                        <div className="page3-grid-child-content">
                            <div className="page3-grid-child-image">
                                <img className="page3-grid-child-img" src={lightbulb}/>
                            </div>
                            <div className="page3-grid-child-text">
                                Trust our top minds to eliminate workflow pain, implement new tech and consolidate app
                                portfolios.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="page3-background-img-container">
                <img src={undraw}/>
            </div>
        </div>
    </div>
  );
}

export default Service;

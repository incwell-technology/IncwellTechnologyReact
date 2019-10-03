import React from 'react';
import startup from '../../static/Images/startup-photos.jpg';
import bump from '../../static/Images/bump-collaboration-colleagues-1068523.jpg';
import challenge from '../../static/Images/challenge-connected-connecting-1268480.jpg';

function About() {
  return (
    <div className="About">
        <div className="page2">
            <div className="contain pg2">
                <div className="page2-title">ABOUT US</div>
                <div className="page2-content">To put it simply: we know what works, and that allows us to deliver
                    predictably. From experienced designs to coding, to launching it all on the cloud - you're guided on
                    each step of the way by a team and process that is tailored in accordance to your needs. </div>
                <div className="page2-values">Core Values</div>
                <div className="page2-pics">
                    <div className="page2-grid-child">
                        <img className="page2-grid-image" src={startup}/>
                        <div className="page2-grid-texts">Learning</div>
                    </div>
                    <div className="page2-grid-child">
                        <img className="page2-grid-image" src={bump}/>
                        <div className="page2-grid-texts">Public Contribution</div>
                    </div>
                    <div className="page2-grid-child">
                        <img className="page2-grid-image" src={challenge}/>
                        <div className="page2-grid-texts">Work for Social Cause</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;

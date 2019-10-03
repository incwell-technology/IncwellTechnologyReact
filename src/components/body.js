import React from 'react';
import Header from './pages/header';
import About from './pages/about-us';
import Service from './pages/services';
import Reason from './pages/reason';
import Team from './pages/team';
// import Career from './pages/career';
import Portfolio from './pages/portfolio';
// import Video from './pages/video-section';

function Body() {

 

  return (
    <div className="Body">
        <Header/>
        <About/>
        <Service/>
        <Reason/>
        <Portfolio/>
        <Team/>
    </div>
  );
}

export default Body;

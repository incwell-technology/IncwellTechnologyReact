import React from 'react';
import Header from './pages/header';
import About from './pages/about-us';
import Service from './pages/services';
import Reason from './pages/reason';
import Team from './pages/team';
import Career from './pages/career';
import Portfolio from './pages/portfolio';


function Body() {
  return (
    <div className="Body">
        <Header/>
        <About/>
        <Service/>
        <Reason/>
        <Team/>
        <Career/>
        <Portfolio/>
    </div>
  );
}

export default Body;

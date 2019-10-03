import React from 'react';
import './App.css';
import Navbar from './components/partials/navbar';
import Footer from './components/partials/footer';
import Body from './components/body';
import {ModeProvider} from './project_mode';


function App() {
  return (
    <ModeProvider>
      <div className="main-container">
        <div className="App">
          <Navbar/>
            <Body/>
          <Footer/>
        </div>
      </div>
    </ModeProvider>
  );
}

export default App;

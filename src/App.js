import React from 'react';
import './App.css';
import Navbar from './components/partials/navbar';
import Footer from './components/partials/footer';
import Body from './components/body';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Body/>
      <Footer/>
    </div>
  );
}

export default App;

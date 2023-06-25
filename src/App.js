import logo from './images/Elevated-logos.jpeg';
import './App.css';
import Header from './components/Header';
import React from "react";
import {Helmet} from "react-helmet";
import Home from './components/Pages/Home';

function App() {
  return (
    <>
    <Helmet>
      <title>Elevated | Store</title>
    </Helmet>
    <div className="App">

      <div className='body'>
        <Home></Home>
      </div>
    </div>
    </>
      
  );
}

export default App;

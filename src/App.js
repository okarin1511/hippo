import React from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Link } from 'react-router-dom';



function App() {
  return (
    <div classname= "App">
      <Header />
      <Home />
      {/* <Contact/> */}
      
    </div>
  );
}

export default App;

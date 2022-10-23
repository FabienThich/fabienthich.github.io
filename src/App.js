import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Internship from "./components/Internship/internship";
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  
  return ( 
    
      <div className="App">
        <BrowserRouter basename='/'>
          <Header />
          <Routes>
              <Route path='/' element={<App />} />
              <Route index element={<Home/>} />
              <Route path='home' element={<Home/>} />
              <Route path='projects' element={<Projects/>} />
              <Route path='internship' element={<Internship/>} />
              <Route path='contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
      
  );
}

export default App;

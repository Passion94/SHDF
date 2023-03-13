

import React from 'react'
import './index.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/NavBar";
import Landing from "./pages/landing/Landing";


import Home from './Home';
import Footer from './pages/footer/Footer';
import Blog from './pages/blog/Blog';

import Everyabout from './pages/about/Everyabout';
import Contact from './pages/contact/Contact';












export default function App() {


 


  return (
  
   <BrowserRouter>
   <Header/>
    <Navbar/>
    <Contact/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/everyabout' element={<Everyabout/>}/>
    <Route path='/blog' element={<Blog/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>

   
   
    
  )
};

  


    

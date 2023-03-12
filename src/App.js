

import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/NavBar";
import Landing from "./pages/landing/Landing";


import Home from './Home';
import Footer from './pages/footer/Footer';
import Blog from './pages/blog/Blog';

import Everyabout from './pages/about/Everyabout';












export default function App() {


 


  return (
    <div>
    <Header/>
    <Navbar/>
   <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/everyabout' element={<Everyabout/>}/>
    <Route path='/blog' element={<Blog/>}/>
    
    </Routes>
    <Footer/>
    </BrowserRouter>

    </div>
   
    
  )
};

  


    

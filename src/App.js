

import {BrowserRouter,Routes, Route, } from 'react-router-dom';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/NavBar";
import Homepage from './pages/homepage/Homepage';
import Stories from './pages/stories/Stories';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NavBar from "./components/navbar/NavBar";
import Landing from "./pages/landing/Landing";
import Whatwedo from './pages/whatwedo/Whatwedo';
import Footer from "./components/footer/Footer";
import AboutSHDF from './pages/Aboutshdf/AboutSHDF';



export default function App() {
  const user=false;
  return (
    <BrowserRouter>
 <Header/>
 <Navbar/>
 

 
    <Routes>
    <Route path='/' element ={<Homepage/>}/>
    <Route path='/homepage' element ={<Homepage/>}/>
    <Route path='/login' element ={user? <Homepage/> :<Login/>}/>
      <Route path='/register' element ={user? <Homepage/> :<Register/>}/>
      <Route path='/write' element ={user? <Write/> :<Register/>}/>
      <Route path='/settings' element ={user? <Settings/> :<Register/>}/>
    <Route path='/aboutshdf' element ={<AboutSHDF/>}/>
    <Route path='/aboutshdf' element ={<AboutSHDF/>}/>
      <Route path='/aboutshdf' element ={<AboutSHDF/>}/>
      <Route path='/single' element ={<Stories/>}/>
      <Route path='/whatwedo' element ={<Whatwedo/>}/>
     
     
    </Routes>

    </BrowserRouter>
   
    
  )
}

  


    

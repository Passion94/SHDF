
import React from 'react';
import './navbar.css';
import {Link, Outlet} from 'react-router-dom'

export default function NavBar() {
  const user=false;
  return (
    <div className='navbar_container'>
    <div className='empty'></div>
    
    <div className='navbar'>
{/* <div className='left_nav'>

<i className="top_icon fa-brands fa-facebook"></i>
<i className="top_icon fa-brands fa-linkedin-in"></i>
<i className="top_icon fa-brands fa-twitter"></i>
<i className="top_icon fa-brands fa-medium_i"></i>
</div> */}
      
    <div className='left_nav'>
<ul className='top_list'>
<li className='top_list_items'><Link to='/whatwedo' className='navbarroutelink'>WHAT WE DO </Link></li>
<li className='top_list_items'> <Link to='/aboutshdf'  className='navbarroutelink'>RESEARCH AND PROJECTS</Link></li>
<li className='top_list_items'>  <Link to='/single' className='navbarroutelink' >STORIES</Link> </li>
<li className='top_list_items'>  <Link to='/aboutshdf' className='navbarroutelink' >ABOUT SDHF</Link></li>
<li className='top_list_items'>  <Link to='/faqs' className='navbarroutelink' >FAQS</Link></li>
<li className='top_list_items'> <Link to='/login' className='navbarroutelink'>{!user && 'GET INVOLVED'}</Link></li>
<li className='top_list_items'> <Link to='/write' className='navbarroutelink'>{user && 'WRITE'}</Link></li>
<li className='top_list_items'> <Link to='/settings' className='navbarroutelink'>{user && 'SETTINGS'}</Link></li>

    
<Outlet></Outlet>
 
   
    
</ul>


      </div>
      <div className='center_nav'>
      
   
      <i className="top_search_icon fa-solid fa-magnifying-glass"></i>
      <Link to='login'>
      {!user &&  <button className='navLogin'>LOGIN</button>  }

      </Link>
      
      <Link to='register'>
      {!user &&  <button className='navSignup'>SIGNUP</button>  }
      
      </Link>
      
     
      </div>
    </div>
    </div>
  )
}

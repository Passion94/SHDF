
import "./aboutshdf.css"
import Footer from "../../components/footer/Footer"

export default function AboutSHDF() {
  const user=true;
  return (
   
   
     <div className='aboutshdf'>
   
     <div className='whoweare'>
     <div className='aboutshdfsocial'>
    {!user && <div>
        <a href=''><i className="footericon fa-brands fa-facebook-f"></i></a>
        <a href=''><i className="footericon fa-brands fa-linkedin-in"></i></a>
        <a href=''><i className="footericon fa-brands fa-twitter"></i></a>
        <a href=''><i className="footericon fa-brands fa-youtube"></i></a>
        <a href=''><i className="footericon fa-brands fa-instagram"></i></a>
        </div>
         } 
       
      </div>
    

     
     {!user && 
     <button className="linkbtn volunteerbtn ">Become a Volunteer</button> }
    
     <h1 className="whowearetitle"> Who we are</h1>
     {user && <div className='singlePostEdit'>
     <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
     <i className="singlePostIcon fa-solid fa-trash"></i>
     </div> }
   
     
     <p className='whowearedesc'> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua.Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.Excepteur sint
occaecat cupidatat non proident,sunt in culpa qui officia 
 deserunt mollit anim id est laborum.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua.Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.Excepteur sint
occaecat cupidatat non proident,sunt in culpa qui officia 
 deserunt mollit anim id est laborum.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua.Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.Excepteur sint
occaecat cupidatat non proident,sunt in culpa qui officia 
 deserunt mollit anim id est laborum.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua.Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.Excepteur sint
occaecat cupidatat non proident,sunt in culpa qui officia 
 deserunt mollit anim id est laborum
</p>
 
    </div>

     

     <div className='mission-vision'>
    <div className='mission'>
      <h1 className='singlePostTitle'>Our Mission</h1>
      <p className='whatwedoPostDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua.Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.Excepteur sint
occaecat cupidatat non proident,sunt in culpa qui officia 
 deserunt mollit anim id est laborum.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua.Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.Excepteur sint
occaecat cupidatat non proident,sunt in culpa qui officia 
 deserunt mollit anim id est laborum.</p>

    </div>
    <div className='vision'>
    <h1 className='singlePostTitle'>Our Vision</h1>
    <p className='whatwedoPostDesc'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua.Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.Excepteur sint
occaecat cupidatat non proident,sunt in culpa qui officia 
 deserunt mollit anim id est laborum.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua.Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur.Excepteur sint
occaecat cupidatat non proident,sunt in culpa qui officia 
 deserunt mollit anim id est laborum.
    </p>
  
    </div>
    
    </div>

    <Footer/>

   
     </div>
  
  )
}

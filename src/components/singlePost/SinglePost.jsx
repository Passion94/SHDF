import './singlePost.css';

export default function Singlepost() {
  const user=true;
  return (
    <div className='singlePost'>
     <div className='singlePostWrapper'>
        <img className='singlepostimg' src='https://d3f9k0n15ckvhe.cloudfront.net/wp-content/uploads/2021/10/AdobeStock_282255808-1.jpeg'/>
     <h1 className='singlePostTitle'> Lorem ipsum dolar sit amit
     {user && <div className='singlePostEdit'>
     <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
     <i className="singlePostIcon fa-solid fa-trash"></i>
     </div> }
     </h1>
     <div className='singlePostInfo'>
<span className='singlePostAuthor'> Author: <b>Buchi</b> </span>
<span className='singlePostDate'> 1 hour ago </span>
</div> 
<p className='singlePostDesc'> 
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
    </div>
  )
}

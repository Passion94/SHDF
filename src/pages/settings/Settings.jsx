import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
    <div className='settingsWrapper'>
<div className='settingsTitle'>
     <span className='settingsUpdateTitle'>Update your Account  </span>
     <span className='settingsDeleteTitle'>Delete your Account  </span>
</div>
<form className='settingsForm'>
<label> Profile Picture</label>
<div  className='settingsPP'>
<img src='https://d3f9k0n15ckvhe.cloudfront.net/wp-content/uploads/2021/10/AdobeStock_282255808-1.jpeg' 
alt='Profile picture'/>
<label htmlFor='fileInput'>
<i className=" SettingsPPicon fa-regular fa-user"></i>
</label>
<input type='file' id='fileInput' style={{display:"none"}}/>

</div>

<label> Username</label>
<input type='text' placeholder='Buchi'/>
<label> Email</label>
<input type='email' placeholder='buchi@gmail.com'/>
<label> Password</label>
<input type='password' />
<button type='submit' className='settingsUpdate'> Update</button>


</form>
    </div>
    <Sidebar/>
    </div>
  )
}

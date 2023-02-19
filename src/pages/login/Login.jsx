import './login.css';
import{Link} from 'react-router-dom'
import Footer from '../../components/footer/Footer';

export default function Login() {
  return (
    <>
    <div className='login'>
    <span className='loginTitle'>Welcome back</span>
    <form className='loginForm'>

<input className='loginInput' type='email' placeholder='Enter your email...' />

<input  className='loginInput'  type='password' placeholder='Enter your password'/>
<button className='loginButton'>Login</button>
    </form>
    <span className="switchtologin">Already have an account?
   <Link to='/register'>
   <button className='loginRegisterButton'>Sign Up</button>
   </Link> 
   </span>
    </div>
    <Footer/>
    </>
  )
}

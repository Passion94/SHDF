import { Link } from "react-router-dom"
import "./register.css"
import Footer from "../../components/footer/Footer"


export default function Register() {
    return (
      <>
        <div className="register">
      <span className="registerTitle">Sign Up with us</span>
      <form className="registerForm">
      <span>
      
        <input className="registerInput name" type="text" placeholder="Firstname" />
        
        <input className="registerInput name lastname" type="text" placeholder="Lastname" />
      </span>
       
        
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        
        <button className="registerButton">Sign Up</button>
        
      </form>
      <span className="switchtologin">Already have an account?
      <Link to='/login'>
      <button className="registerLoginButton">Login</button>
      </Link>
      </span>
      
    </div>
    <Footer/>
    </>
    )
}
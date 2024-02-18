import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
      <div>
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter your password..." />
           <Link to='/home'>
           <button className="loginButton">Login</button>
           </Link>
        </form>
        <Link to='/registor'>
        <button className="loginRegisterButton">Register</button>
          </Link> 
        </div>
    </div>
    
    </>
  )
}

export default Login
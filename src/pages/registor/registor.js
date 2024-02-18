import React from 'react'
import './registor.css'
import { Link } from 'react-router-dom'

const Registor = () => {
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm">
      <label>Username</label>
      <input className="registerInput" type="text" placeholder="Enter your username..." />
      <label>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..." />
      <Link to='/login'>
        <button className="registerButton">Register</button>
      </Link>
    </form>
     <Link to='/login'>
     <button className="registerLoginButton">Login</button>
     </Link>
  </div>
  )
}

export default Registor
import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'
const Topbar = () => {

  return (
    <div className='top'>
        <div className='topleft'>
        <i class=" topicon fab  fa-facebook-square"></i>
        <i class=" topicon fab  fa-twitter-square"></i>
        <i class=" topicon fab  fa-pinterest-square"></i>
        <i class="topicon fab fa-instagram-square"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <Link to='/home' className='Link'>
                    <li >HOME</li>
                </Link>

                <Link to='/about'  className='Link'>
                <li >ABOUT</li>
                </Link>

                <Link to="/write"   className='Link'>
                <li>WRITE</li>

                </Link>

                <Link to='/login'  className='Link' >
                  <li>LOGOUT</li>
                </Link>
            </ul>
        </div>
         
        <div className='topRight'>
        <Link to='/settings'>
          
              <img
                className="topimg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
        </Link>
        </div> 
    </div>
  )
}

export default Topbar;

          
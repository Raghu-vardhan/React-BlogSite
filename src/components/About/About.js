import React from 'react'
import './about.css'
import Topbar from '../topbar/Topbar'

const About = () => {
  return (
    <>
    <Topbar/>
    <div class='about-page'>
    <div className='aboutbar'>
      <div className="aboutbarItem">
          <span className="aboutbarTitle">ABOUT ME</span>
          <img
            src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
          />
          {/* <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </p>  */}
      </div>
        <div className="aboutbarItem">
          <span className="aboutbarTitle">CATEGORIES</span>
        </div>
        <ul className='aboutbarList'>
          <li className='aboutbarListItem'>Life</li>
          <li className='aboutbarListItem'>Music</li>
          <li className='aboutbarListItem'>style</li>
          <li className='aboutbarListItem'>Sport</li>
          <li className='aboutbarListItem'>Tech</li>
          <li className='aboutbarListItem'>Cinema</li>
        </ul>
        <div className="aboutbarItem">
          <span className="aboutbarTitle">FOLLOW US</span>
          <div className="aboutbarSocial">
            <i className="aboutbarIcon fab fa-facebook-square"></i>
            <i className="aboutbarIcon fab fa-instagram-square"></i>
            <i className="aboutbarIcon fab fa-pinterest-square"></i>
            <i className="aboutbarIcon fab fa-twitter-square"></i>
          </div>
        </div>  
    </div>  
    </div>
    </>
  )
}

export default About
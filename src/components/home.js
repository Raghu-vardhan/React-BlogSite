import React from 'react'
import './homes.css'
import Header from '../components/header/Header'
import Sidebar from './sidebars/Sidebar'
import Post from './posts/Post'
const Home = () => {
  return (
    <>
        <Header/>
         <div className='home'>
            <Post/>
            <Sidebar/>
         </div>
    </>
  )
}

export default Home
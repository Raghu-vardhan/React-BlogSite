import React from 'react'
import './single.css'
import Sidebar from '../../components/sidebars/Sidebar';
import SinglePost from '../../components/sinlePage/singlePost';

const Single = () => {
  return (
    <div className='single'>
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default Single;
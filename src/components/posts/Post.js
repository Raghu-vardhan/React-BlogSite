import React from 'react'
import './post.css'
import Data from '../../images/data'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <>
        
      <div className='post'>
         {
            Data.map((item) =>{
              return(
               <>
                  
                  <div className='postinfo'>
                    <Link to={`/singlepost/${item.id}`} className='Link'>
                     <img src={item.img} alt=''  className='img-post'/>
                    </Link>
                    <div className='postCats Link' >
                     <Link to={`/singlepost/${item.id}`} className='Link'>
                         <span className='postCat'>{item.postcat1}</span>
                     </Link>
                     <Link to={`/singlepost/${item.id}`} className='Link'>
                        <span className='postCat'>{item.postcat2}</span>
                     </Link>
                      
                    </div>
                    <Link to={`/singlepost/${item.id}`} className='Link'>
                      <span className='postTitle' >
                        {item.title}
                    </span>                    
                    </Link>
                  <p className='postDesc'>{item.desc}</p>
                  </div>
                  
                  
               </>  
              )
            })
         }
      </div>

    </>
  )
}

export default Post  
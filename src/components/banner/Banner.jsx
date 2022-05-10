import React from 'react'
import {Row , Col , Container} from 'react-bootstrap'
import './banner.css'
const Banner = (props) => {
  return (
    <>





         <div className='imgc'>
         <img src={props.img} alt="Snow" className='i'  />
  <div className="bottom-left"><span className='b-c'><h4><span className='b-t'>BLOG</span>  FOR  <span className='b-c'>LIFE</span></h4></span></div>
         </div>
        






    </>
  )
}

export default Banner
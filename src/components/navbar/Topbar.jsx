import React from 'react'
import Header from '../header/Header'
import {Link} from 'react-router-dom'

import './navbar.css'

const Topbar = () => {
  let user=true;
  return (
<>
  
    <div className='top'>
<nav className="navbar navbar-expand-lg ">
  <a className="navbar" href="#">HITALI</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     
    

      <li className="nav-item active"><Link to="/"  className="nav" >Home</Link></li>
      <li className="nav-item active"  ><Link to="/blogs" className="nav" >Blogs</Link></li>
      <li className="nav-item active" ><Link to="/write" className="nav" >Write</Link></li>
      <li className="nav-item active"><Link to="/about" className="nav"> About</Link></li>


     


      <li className="nav-item active"><Link to="/login" className="nav" >Login</Link></li>
      <li className="nav-item active"><Link to="/register" className="nav" >Register</Link></li>



   
     
      

    </ul>
  
  </div>
</nav>
</div>
  </>
  )
}

export default Topbar
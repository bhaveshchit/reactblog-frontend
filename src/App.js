import React from 'react'
import Banner from './components/banner/Banner'
import Topbar from './components/navbar/Topbar'
import Home from './components/pages/Home'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Singlepost from './components/singlepost/Singlepost'
import Allblogs from './components/allblogs/Allblogs'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Footer from './components/footer/Footer'
import Write from './components/write/Write'

import {
  Routes,
  Route,
} from "react-router-dom";


const App = () => {

  let user = true;

  return (
    <div>


<Topbar />



  <Routes>
    <Route path="/" element={ user ?  <Home />: <Login />} />
    <Route path="/blogs" element={ <Blogs /> } />
    <Route path="/blogs/:blogId" element={<Singlepost />} />
    <Route path="/write" element={<Write />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
      


    </div>
  )
}

export default App
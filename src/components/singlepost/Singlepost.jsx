import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './singlepost.css'
const Singlepost = () => {
  return (
    <div>
    <Header />
<div className='sss-container'>
<div className='ss-container'>
<div className='s-container'>

<div className='s-top'>
<ul className='ul-li'>
<li className='card-li'><img src='https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='cardUserImage'  alt="user iamge"/>
</li>
    <li className='card-li'>Author</li>
    <li className='card-li'>Dec 15,2021</li>
</ul>
</div>
<h1 className='sb-head'>BLOG-HEADING</h1>
<h2 className='sb-SubHead'>Sub-title -Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</h2>
<img className='sb-image' src='https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  alt="this is subtitle image"/>

<p className='descp'>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. 

“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”
You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.</p>


<div className='social'>
    <ul >
        <li className='sc' style={{color:"black"}}><i class="fa-brands fa-instagram"></i></li>
        <li className='sc' style={{color:"black"}}><i class="fa-brands fa-twitter"></i></li>
        <li className='sc' style={{color:"black"}}><i class="fa-brands fa-linkedin-in"></i></li>
        <li className='sc' style={{color:"black"}}><i class="fa-brands fa-facebook-f"></i></li>
    </ul>
</div>


</div>
</div>


</div>
<Footer />

    </div>
  )
}

export default Singlepost
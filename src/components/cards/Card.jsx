import React from 'react'
import './card.css'
import {Container , Row ,Col} from 'react-bootstrap'
import { FaBeer } from 'react-icons/fa';

const Card = () => {
  return (
    <div>



<Container >
    <Row  className='card-row' >

        <Col lg={6}>
<img className='card-image' src="https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   />
        </Col>

        <Col lg={6}>

<div card-title>
<div className='card-top'>
<img src='https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='cardUserImage'  alt="user iamge"/>
<ul className='ul-li'>
    <li className='card-li'>Author</li>
    <li className='card-li'>Dec 15,2021</li>
</ul>
</div>

<div className='card-content'>

<h1>Playing with cards</h1>

<p className='card-para'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...</p>


</div>
</div>

     </Col>

    </Row>
</Container>  

  </div>
  )
}

export default Card
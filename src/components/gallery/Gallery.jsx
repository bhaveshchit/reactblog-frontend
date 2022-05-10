import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './gallery.css'
const Gallery = () => {

    const settings={
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    }

  return (
    <div>


<div className='Headingg'><h6>GALLERY</h6></div>
<div className='imagess'>

<Slider {...settings}>
<img className='im' src='https://images.pexels.com/photos/887828/pexels-photo-887828.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="sliderimage" />

<img className='im' src='>https://www.pexels.com/photo/white-notebook-and-blue-pencil-1001851/' alt="sliderimage" />

<img className='im' src='https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1375,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg' alt="sliderimage" />

<img className='im' src='https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1375,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg' alt="sliderimage" />

<img className='im' src='https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1375,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg' alt="sliderimage" />

<img className='im' src='https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1375,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg' alt="sliderimage" />


<img className='im' src='https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1375,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg' alt="sliderimage" />

<img className='im' src='https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1375,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg' alt="sliderimage" />

<img className='im' src='https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1375,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg' alt="sliderimage" />

</Slider>

<br></br>

</div>




    </div>
  )
}

export default Gallery
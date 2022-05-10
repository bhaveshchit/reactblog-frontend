import React from 'react'
import './footer.css'
import {Container,Col,Row} from 'react-bootstrap'
const Footer = () => {
  return (
    <div>
 <footer>
        <div class="footer-content">
            <h3>BLOG FOR LIFE</h3>
            <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p>
            <ul class="socials">
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
       

    </footer>

    </div>
  )
}

export default Footer
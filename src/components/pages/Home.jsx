import React from 'react'
//import { Card } from 'react-bootstrap'
import Banner from '../banner/Banner'
import Buttons from '../button/Buttons'
import Card from '../cards/Card'
import Footer from '../footer/Footer'
import Gallery from '../gallery/Gallery'
import Header from '../header/Header'


const Home = () => {
  return (
    <div>

         <Banner  img={`https://static.wixstatic.com/media/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg/v1/fill/w_1375,h_650,al_c,q_85,enc_auto/baac51_d623fe1790ed419a89d20aa05f6064b2.jpg`}/>
         <br/>
<Card />
<Card />
<Card />
<Card />
<Buttons />
<Gallery />
<Footer />
    </div>
  )
}

export default Home
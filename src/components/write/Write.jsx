import React from 'react'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './write.css'
const Write = () => {
  return (
    <div>

<Header />
<img className='b-im' src="https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="blog image" />

    <div className='dcc'>
        <div className='conn'>
            <form className='writee'>

<label htmlFor='fileInput'><i className="writeicon fa-solid fa-circle-plus"></i></label>
<input type="file" id="fileInput" style={{display:"none"}} />
<input type="text" placeholder='Title' autoFocus={true} className='writes' />
<input type="text" placeholder='SubTitle' autoFocus={true} className='writesss' /><br />
<textarea type="text" rows="" placeholder='Description' autoFocus={true} className="ttt" />

<button className='s-bb' type='submit'>Submit</button>

            </form>
        </div>
        </div>

<Footer />

    </div>
  )
}

export default Write
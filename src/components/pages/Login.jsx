import React from 'react'
import './login.css'
import Header from '../header/Header'
const Login = () => {
  return (
    <div>
        <Header />


<div className='loginn'>

       <div className='loginform'>
       <h1 className='headdd'>LOGIN</h1>
       
       </div>


<form className='writeform'>

<div className='form-ele'>
    <label className='form-l'></label>
    <input type="text" placeholder="Username" className="writeinput" autoFocus={true} />
</div>
<div className='form-ele'>
    <label className='form-l'></label>
    <input type="text" placeholder="Password" className="writeinput" autoFocus={true} />
</div>

<button className='s-b' type='submit'>Submit</button>

</form>


</div>


    </div>
  )
}

export default Login
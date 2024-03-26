import React, { useState } from 'react'
import '../login/loginn.css'

function Loggin() {

    const [userName , setuserName] = useState(" ");
    const [userPassward , setuserPassward] = useState(" ");

    const SubmitHandler =(event) =>{
        event.preventDefault() ;
        console.log(userName) ;
        console.log(userPassward) ;


    }

    return (
    <div>
     <div className="loginContainer">
     <div className="loginBox">
        <form>
            <h1 align="center">Login for Blog App</h1>
        <input placeholder='Username' className='input' onChange={(e)=>{setuserName(e.target.value)}}/>
        <input placeholder='password' className='input' type='password' onChange={(e)=>{setuserPassward(e.target.value)}}/>
        <button type='submit'className='submitBtn ' onClick={SubmitHandler} >Login</button>
        </form>
     </div>
     </div>
    </div>
  )
}

export default Loggin

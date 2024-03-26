import React, { useState } from 'react'
import '../logout/logoutt.css'

function Logoutt() {

  

    const SubmitHandler =(event) =>{
        event.preventDefault() ;
    }

    return (
    <div>
     <div className="loginContainerrr">
     <div className="loginBoxxx">
       
            <h1 align="center">Logout</h1>
        <button type='submit'className='submitBtnnn ' onClick={SubmitHandler} >Logout</button>
       
     </div>
     </div>
    </div>
  )
}

export default Logoutt

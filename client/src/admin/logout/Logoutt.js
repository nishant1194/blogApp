import React, { useState } from 'react'
import '../logout/logoutt.css'
import { useNavigate } from 'react-router-dom';

function Logoutt() {
const navigate = useNavigate() ;
    
    const SubmitHandler =(event) =>{
      localStorage.removeItem('token');
      localStorage.removeItem('fullName');
      localStorage.removeItem('email');
      event.preventDefault() ;
      alert("logout successfully");
      navigate('/admin/login') ;

      navigate('/');
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

export default Logoutt ;


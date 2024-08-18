import React, { useState } from 'react'
import '../login/loginn.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../user/Navbar/Navbar';



function Loggin() {

    const [email , setEmail] = useState(" ");
    const [userPassword , setuserPassward] = useState(" ");

 
    const SubmitHandler =(event) =>{
        axios.post("https://blog-app-api-ten.vercel.app/auth/login",{
            email:email,
            password: userPassword
        })
        .then(res=>{
            console.log(res.data)
            localStorage.setItem('token', res.data.token);
       
        })
        .catch(err=>{
            console.log(err)
        })
        event.preventDefault() ;
    }


    return (
    <div>
        <Navbar />
     <div className="loginContainer">
     <div className="loginBox">
        <form>
            <h1 align="center">Login for Blog App</h1>
        <input placeholder='E-mail' className='input' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder='password' className='input' type='password' onChange={(e)=>{setuserPassward(e.target.value)}}/>
        <button type='submit'className='submitBtn ' onClick={SubmitHandler} >Login</button>
        <Link to='/admin/signup'><button className='submitBtn '>SignUp </button> </Link>
        </form>
     </div>
     </div>
    </div>
  )
}

export default Loggin

import React, { useState, useEffect } from 'react'
import '../login/loginn.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp() {

    const [userName , setuserName] = useState(" ");
    const [userPassward , setuserPassward] = useState(" ");
    const [email , setEmail] = useState(" ");
    


const SubmitHandler = (e)=>{
     e.preventDefault(); 

        axios.post("https://blog-app-api-ten.vercel.app/auth/user/signup",{
            fullName:userName ,
            password:userPassward ,
            email:email 
        })
        .then(res=>{
            console.log("Signup successfully")
            alert("Signup successfully")
            window.location.reload();

        })
        .catch(err=>{
            console.log(err)
        })
}


    return (
    <div>
     <div className="loginContainer">
     <div className="loginBox">
        <form>
            <h1 align="center">SignUp for Blog App</h1>
        <input placeholder='Username' className='input' onChange={(e)=>{setuserName(e.target.value)}}/>
        <input placeholder='E-mail' className='input' type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder='password' className='input' type='password' onChange={(e)=>{setuserPassward(e.target.value)}}/>
        <button type='submit'className='submitBtn ' onClick={SubmitHandler} >SignUp</button>
        <Link to='/admin/login'> <button type='submit'className='submitBtn '  >Login</button></Link>
        </form>
     </div>
     </div>
    </div>
  )
}

export default SignUp

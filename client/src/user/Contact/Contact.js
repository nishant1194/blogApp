import React from 'react'
import '../Contact/contactt.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Abccc from '../Navbar/Abccc'

function Contact() {
  
 
  return (
    <div>
        <Navbar />
        <div>
        <Abccc content = 'abcc'/>
      
    <div style={{display:"flex" , justifyContent:"center", marginTop:"80px"}}>
     <div className="loginBox">
     <div className="aboout">Contact Us</div>
        <form>
       
        <input placeholder='E-mail' className='input' />
        <input placeholder='Message' className='inputt' type='text'/>
        
        <button type='submit'className='submitBtn '  >Submit</button>
      <div>
        <img src="" alt="" />
      </div>
        </form>
     </div>
     </div>
</div>
    </div>
  )
}

export default Contact;

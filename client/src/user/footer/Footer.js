import React from 'react'
import '../footer/footer.css'
import linkedin from '../../assets/linkedin.png'
import mail from '../../assets/mail.png'
import github from '../../assets/github.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='mainfooter'>
      <div className='section11'>BlogApp
        <br />
        <div  className='madeWLove' >Made with <span style={{color:"red"}} >&hearts;</span> </div>
      </div>
      <div className='section12'>
      <li className='exploref'>Explore</li>
      <Link to='/'>  <li className='footeritteems'>Home</li></Link>
      <Link to='/bllog'>  <li className='footeritteems'>Blog</li></Link>
      <Link to='/about'>  <li className='footeritteems'>About Us</li></Link>
      <Link to='/contact'>  <li className='footeritteems atm'> Contact US</li></Link>
      </div>
      <div className='sec13'>
      <div className='section13'>Contact Us </div>
     <div className="sec13div">
      <a href='https://www.linkedin.com/in/nishant-428476256/' target='black'>  <img src={linkedin} alt="" /></a>
      <a href='mailto:nishantrpr1194@gmail.com'>  <img src={mail} alt="" /></a>
      <a href='https://github.com/nishant1194' target='black'>  <img src={github} alt="" /></a>
        </div>
     
      </div>
      
        
    
    </div>
  )
}

export default Footer

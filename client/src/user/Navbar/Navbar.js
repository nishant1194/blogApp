import React, { useState } from 'react'
import '../Navbar/Navbarr.css'
import { Link } from 'react-router-dom'
import Nishant from '../../assets/Nishant.JPG'

function Navbar() {
const [menuStatus , setStatus] = useState(false)

  const menufunc =()=>{
    setStatus(!menuStatus)
     console.log(menuStatus) ;
  }
  if(menuStatus==false){
  return (
    <div>
      <div className="navBarrr">
        <div className="leftNAv">
            <img src={Nishant} alt="" style={{height:"60px", width:"60px", borderRadius:"50%", marginRight:"20px", marginLeft:"30px"}}/>
           <Link to='/' className='blogApp'><span>Blog app</span></Link> 
        </div>
        <div className="rightNav">
            <Link to='/' className='linkNav'>Home</Link>
            <Link to='/bllog' className='linkNav'>Blog</Link>
            <Link to='/' className='linkNav'>About</Link>
            <Link to='/contact' className='linkNav'>Contact</Link>
            <Link to='/admin/login' className='linkNav'>Login</Link>
            <Link to='/admin/dashboard' className='linkNav'>Dashboard</Link>
        </div>
      <button className='menuIconbtn' style={{marginRight:"30px", style:"none"}} onClick={menufunc}>
        <img src={Nishant} alt="" className="menuIcon" />
        </button>
        
      </div>
    </div>
  )}
  else{
    return(
      <div>
    <div>
      <div className="navBarrr">
        <div className="leftNAv">
            <img src={Nishant} alt="" style={{height:"60px", width:"60px", borderRadius:"50%", marginRight:"20px", marginLeft:"30px"}}/>
           <Link to='/' className='blogApp'><span>Blog app</span></Link> 
        </div>
     
      <button className='menuIconbtn' style={{marginRight:"30px", style:"none"}} onClick={menufunc}>
        <img src={Nishant} alt="" className="menuIcon" />
        </button>

       
        
      </div>
      <div className="rightNavv">
      
       <div className="mennnnu" style={{display:'flex' , flexDirection:"column", alignItems:"center", alignContent:"center" , justifyContent:"flex-end"}}>    <Link to='/' className='linkNavv'>Home</Link>
            <Link to='/bllog' className='linkNavv'>Blog</Link>
            <Link to='/' className='linkNavv'>About</Link>
            <Link to='/contact' className='linkNavv'>Contact</Link>
            <Link to='/admin/login' className='linkNavv'>Login</Link>
            <Link to='/admin/dashboard' className='linkNavv'>Dashboard</Link>
            </div> 
        </div>
        </div>
   
    
    </div>
    
    )
  }
}

export default Navbar

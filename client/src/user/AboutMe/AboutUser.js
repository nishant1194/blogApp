import React from 'react'
import Nishant from '../../assets/Nishant.JPG'
import Navbar from '../Navbar/Navbar'


function AboutUser() {
  return (

    <div>
        <Navbar />
     <section>
        <div className="userCategory">
          
          <div className="usercatItems">
          <img src={Nishant} alt="" style={{height:"200px", width:"200px", borderRadius:"50%", marginRight:"20px", marginLeft:"20px" ,boxShadow:"2px 2px 5px rgb(113, 113, 118) "}}/>
            <div style={{marginTop:"15px"}}>Category</div>
          </div>
          <div className="usercatItems">
          <img src={Nishant} alt="" style={{height:"200px", width:"200px", borderRadius:"50%", marginRight:"20px", marginLeft:"20px" ,boxShadow:"2px 2px 5px rgb(113, 113, 118) "}}/>
            <div style={{marginTop:"15px"}}>Category</div>
          </div>
          <div className="usercatItems">
          <img src={Nishant} alt="" style={{height:"200px", width:"200px", borderRadius:"50%", marginRight:"20px", marginLeft:"20px" ,boxShadow:"2px 2px 5px rgb(113, 113, 118) "}}/>
            <div style={{marginTop:"15px"}}>Category</div>
          </div>
          <div className="usercatItems">
          <img src={Nishant} alt="" style={{height:"200px", width:"200px", borderRadius:"50%", marginRight:"20px", marginLeft:"20px" ,boxShadow:"2px 2px 5px rgb(113, 113, 118) "}}/>
            <div style={{marginTop:"15px"}}>Category</div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default AboutUser

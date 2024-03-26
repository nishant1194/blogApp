import React from 'react'
import Navbar from '../Navbar/Navbar'
import Nishant from '../../assets/Nishant.JPG'
import '../Home/userHomee.css'

function UserHome() {
  return (
    <div>
      <Navbar />
      <section>
      <div className="homeContainer">
        <div className="leftUserContainr">
        <img src={Nishant} alt="" style={{height:"300px", width:"300px", borderRadius:"50%", marginRight:"20px", marginLeft:"30px"}}/>

        </div>
        <div className="rightUserContainer">
        <div className="welcomeText" style={{color:"yellow"}}>Welcome to</div>
          <div style={{fontSize:"40px" , fontWeight:"600"}}>Online Blog App</div>
        </div>
      </div>
      </section>



      <section>
        <h1 style={{textAlign:"center" ,color:"black" , fontSize:"40px"}}>Latest Categories</h1>
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


      <section>
        <h1 style={{textAlign:"center" ,color:"black" , fontSize:"40px"}}>Latest Blogs</h1>
        <div className="cardContaner">
          <div className="cardblog">
          <img src={Nishant} alt="" className='imgblog' style={{height:"220px", width:"220px",  marginRight:"20px", marginLeft:"20px"}}/>
          <div>category</div>
          <div className="blogtittle"  style={{fontSize:"20px" ,marginRight:"10px", marginLeft:"10px" , textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit, vitae libero quam reiciendis accusantium voluptate quidem nam mollitia cumque. Illo ratione consequatur facilis animi, unde mollitia similique vitae nemo?</div>
          </div>
          <div className="cardblog">
          <img src={Nishant} alt="" className='imgblog' style={{height:"220px", width:"220px",  marginRight:"20px", marginLeft:"20px"}}/>
          <div>category</div>
          <div className="blogtittle"  style={{fontSize:"20px" ,marginRight:"10px", marginLeft:"10px" , textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit, vitae libero quam reiciendis accusantium voluptate quidem nam mollitia cumque. Illo ratione consequatur facilis animi, unde mollitia similique vitae nemo?</div>
          </div><div className="cardblog">
          <img src={Nishant} alt="" className='imgblog' style={{height:"220px", width:"220px",  marginRight:"20px", marginLeft:"20px"}}/>
          <div>category</div>
          <div className="blogtittle"  style={{fontSize:"20px" ,marginRight:"10px", marginLeft:"10px" , textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit, vitae libero quam reiciendis accusantium voluptate quidem nam mollitia cumque. Illo ratione consequatur facilis animi, unde mollitia similique vitae nemo?</div>
          </div><div className="cardblog">
          <img src={Nishant} alt="" className='imgblog' style={{height:"220px", width:"220px",  marginRight:"20px", marginLeft:"20px"}}/>
          <div>category</div>
          <div className="blogtittle"  style={{fontSize:"20px" ,marginRight:"10px", marginLeft:"10px" , textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit, vitae libero quam reiciendis accusantium voluptate quidem nam mollitia cumque. Illo ratione consequatur facilis animi, unde mollitia similique vitae nemo?</div>
          </div>
        </div>

      </section>

      

    </div>
  )
}

export default UserHome

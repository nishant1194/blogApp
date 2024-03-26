import React from 'react'
import Nishant from '../../assets/Nishant.JPG'
import Navbar from '../Navbar/Navbar'
import '../Blog/bloog.css'

function Bloog() {
  return (
    <div>
        <Navbar />
        <section className='Aboutsection'>
            <section className='leftAbout'>
        <div className="cardContaner" style={{marginTop:"30px"}}>
          <div className="cardblog">
          <img src={Nishant} alt="" className='imgblog' style={{height:"220px", width:"220px",  marginRight:"20px", marginLeft:"20px"}}/>
          <div>category</div>
          <div className="blogtittle"  style={{fontSize:"20px" ,marginRight:"10px", marginLeft:"10px" , textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit, vitae libero quam reiciendis accusantium voluptate quidem nam mollitia cumque.</div>
          </div>
          <div className="cardblog">
          <img src={Nishant} alt="" className='imgblog' style={{height:"220px", width:"220px",  marginRight:"20px", marginLeft:"20px"}}/>
          <div>category</div>
          <div className="blogtittle"  style={{fontSize:"20px" ,marginRight:"10px", marginLeft:"10px" , textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit, vitae libero quam reiciendis accusantium voluptate quidem nam mollitia cumque. </div>
          </div><div className="cardblog">
          <img src={Nishant} alt="" className='imgblog' style={{height:"220px", width:"220px",  marginRight:"20px", marginLeft:"20px"}}/>
          <div>category</div>
          <div className="blogtittle"  style={{fontSize:"20px" ,marginRight:"10px", marginLeft:"10px" , textAlign:"justify"}}>Losit, vitae libero quam reiciendis accusantium voluptate quidem nam mollitia cumque. Illo ratione consequatur facilis animi, unde mollitia similio?</div>
          </div><div className="cardblog">
          <img src={Nishant} alt="" className='imgblog' style={{height:"220px", width:"220px",  marginRight:"20px", marginLeft:"20px"}}/>
          <div>category</div>
          <div className="blogtittle"  style={{fontSize:"20px" ,marginRight:"10px", marginLeft:"10px" , textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sit, vitae libero quam reiciendis accusantium voluptate quidem nam mollitia cumque. Illo o?</div>
          </div>
        </div>
            </section>
            <div className="rightAbout">
                <div className='catlistt'>All Categories</div>
                <div className='catlistt'>category</div>
                <div className='catlistt'>category</div>
                <div className='catlistt'>category</div>
                
            </div>
       

      </section>
    </div>
  )
}

export default Bloog

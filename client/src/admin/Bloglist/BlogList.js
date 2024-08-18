import { useEffect, useState } from 'react'
import React  from 'react'
import Nishant from '../../assets/Nishant.JPG'

import '../Bloglist/blog.css'
import axios from 'axios'

function BlogList() {

  const [blog, setBlog] = useState([]);
  
  const token = localStorage.getItem("token");

  useEffect(() => {
    getBlogs();
    
  }, []);

  //get blogs
  const getBlogs = () => {
    console.log(token + " = token");
    if (token) {
      axios
        .get("https://blog-app-api-ten.vercel.app/blog", {
          headers: { Authorization: "Bearer " + token },
        })

        .then((res) => {
          console.log(res.data.blogs);
          setBlog(res.data.blogs);
        });
    }
  };

  //delete blog by id

  const deleteBlog = (id)=>{
    axios.delete(`https://blog-app-api-ten.vercel.app/blog/${id}`,{
      headers: { Authorization: "Bearer "+token }
    })
    .then((res) => {
      console.log(res.data);
      window.location.reload();
    }) 
    .catch(err=>{
      console.log(err)
    })   
}


  return (
    <div>
         <h2 style={{margin:'15px'}}>Your Blog</h2>        
          <div className="cardContanerAdmin" style={{marginTop:"30px"}}>
          
          {blog.map(data=>{
            return( 
              <div className="cardblog">
              <img
                src={Nishant}
                alt=""
                className="imgblog"
                style={{
                  height: "220px",
                  width: "260px",
                  marginBottom:"5px"
                }}
              />
              <div style={{textAlign:"left"}}>{data.category}</div>
              <div
                className="blogtittle"
                style={{
                  fontSize: "20px",
                  marginBottom:"5px",
                  fontWeight:"500",
                  textAlign: "justify",
                }}
              >
                {data.tittle}
              </div>
              <div style={{display:"flex" , justifyContent:"end"}}>
              <button className='blogDele' type='submit' >View</button>
              <button className='blogDele' type='submit' onClick={()=>{deleteBlog(data._id)}} >Delete</button>
              </div>
            </div>
            )
          })}
         
        

         
        </div>
      </div>
  )
}

export default BlogList

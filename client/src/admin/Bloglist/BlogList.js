import { useEffect, useState , useContext } from 'react'
import React  from 'react'
import Nishant from '../../assets/Nishant.JPG'
import { Link } from 'react-router-dom'
import { IdContext } from '../../context/idContext';

import '../Bloglist/blog.css'
import axios from 'axios'
import Loading from '../../helpers/Loadar/Loading';

function BlogList() {
  const { id, setId } = useContext(IdContext);
  const[loadingBlog , setloadingBlog] = useState(true) ;
  const [blog, setBlog] = useState([]);
  
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const fullName = localStorage.getItem("fullName");

  useEffect(() => {
    getBlogs(fullName);
    
  }, []);

  //get blogs
  const getBlogs = (fullName) => {
    console.log(token + " = token");
    console.log(email + " = email");
    if (token) {
      axios
        .get(`https://blog-app-api-ten.vercel.app/blog/auther/${fullName}`, {
          headers: { Authorization: "Bearer " + token },
        })

        .then((res) => {
          console.log(res.data.blog);
          setBlog(res.data.blog);
          setloadingBlog(false) ;
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
        { loadingBlog?<Loading />: <div className="cardContanerAdmin" style={{marginTop:"30px"}}>
          
          {blog.map(data=>{
            return( 
              <div className="cardblogAdmin">
              <img
                src={data.imageUrl}
                alt=""
                className="imgblog"
                style={{
                  height: "220px",
                  width: "96%",
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
            <Link to={`https://blog-app-neew.vercel.app/view/${data._id}`}>
             <button className='blogDele' type='submit' onClick={()=>{ setId(data._id)}} >View</button>
            </Link> 
              <button className='blogDele' type='submit' onClick={()=>{deleteBlog(data._id)}} >Delete</button>
              </div>
            </div>
            )
          })}
         
        

         
        </div>}
      </div>
  )
}

export default BlogList

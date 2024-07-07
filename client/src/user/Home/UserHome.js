import React ,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Nishant from '../../assets/Nishant.JPG'
import '../Home/userHomee.css'
import axios from 'axios'
import Pagination from '../../helpers/Pagination';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from '../footer/Footer'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const responsiveBlog = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function UserHome() {

  const [page, setPage] = useState(1);

  const [blog, setBlog] = useState([]);
  const [category, setcategory] = useState([{name:"hena" , imageUrl:"ivhvhj"}]);
  const getcategory = async() => {
    await axios.get("https://blog-app-api-ten.vercel.app/category").then((res) => {
      console.log(res.data.categorys);
      setcategory(res.data.categorys);
    });
  };
  useEffect(() => {
    getcategory();
    getBlogs();

  }, []);


  

  // icon setup function


  //get all the blogs
  const getBlogs = () => {
   

      axios
        .get("https://blog-app-api-ten.vercel.app/blog")

        .then((res) => {
          console.log(res.data.blogs);
          setBlog(res.data.blogs);
        });
    
  };
  
  
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
          <div style={{fontSize:"40px" , fontWeight:"600"}} className='onlinevlog'>Online Blog App</div>
        </div>
      </div>
      </section>



      <section>
        <h1 style={{textAlign:"center" ,color:"black" , fontSize:"40px"}}>Latest Categories</h1>
        <div className="userCategory">
        

  <Carousel
  slidesToSlide={1}
  responsive={responsive}

  autoPlay={true}
  
  autoPlaySpeed={2000}
  infinite={true}
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
 
>
      {category.map(data=>{
          return(
          <div className="usercatItems">
          <img src={Nishant} alt="" style={{height:"200px", width:"200px", borderRadius:"50%", marginRight:"20px", marginLeft:"20px" ,boxShadow:"2px 2px 5px rgb(113, 113, 118) "}}/>
            <div style={{marginTop:"15px"}}>{data.name}</div>
          </div>
          )
        })}  
        
</Carousel>;
        
        </div>

      </section>


      <section className='bloggging'>
        <h1 style={{textAlign:"center" ,color:"black" , fontSize:"40px"}}>Latest Blogs</h1>
        
        <Carousel
          slidesToSlide={1}
          responsive={responsiveBlog}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
      
         {blog.map((data) => {
              return (
                <div className="cardbloggg">
                  <img
                    src={Nishant}
                    alt=""
                    className="imgblog"
                    style={{
                      height: "220px",
                      width: "100%",
                      marginBottom: "5px",
                    }}
                  />
                  <div style={{ textAlign: "left" }}>{data.category}</div>
                  <div
                    className="blogtittle"
                    style={{
                      fontSize: "20px",
                      marginBottom: "5px",
                      fontWeight: "500",
                      textAlign: "justify",
                    }}
                  >
                    {data.tittle}
                  </div>
                </div>
              );
          })}
         
        </Carousel>
        

      </section>
     
<Footer />
    </div>
  )
}

export default UserHome

import React, { useState, useEffect } from "react";
import Nishant from "../../assets/Nishant.JPG";
import Navbar from "../Navbar/Navbar";
import "../Blog/bloog.css";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Sidebar } from 'primereact/sidebar';
import Abccc from "../Navbar/Abccc";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
function Bloog() {
  const [menuStatus, setStatus] = useState(false);

  const [blog, setBlog] = useState([]);
  const [page, setPage] = useState(1);
  const token = localStorage.getItem("token");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getcategorys();
    getBlogs();
    getBlogsbyCategory();
  }, []);

  // icon setup function

  const menufunc = () => {
    setStatus(!menuStatus);
    console.log(menuStatus);
  };

  //get all the blogs
  const getBlogs = async () => {
      await axios
        .get("https://blog-app-api-ten.vercel.app/blog")

        .then((res) => {
          console.log(res.data.blogs);
          setBlog(res.data.blogs);
        });
    
  };

  //get blog by cayegory name

  const getBlogsbyCategory = async (category) => {
 
    await axios
        .get(`https://blog-app-api-ten.vercel.app/blog/category/${category}`, {
          headers: { Authorization: "Bearer " + token },
        })

        .then((res) => {
          console.log(res.data.blog);
          setBlog(res.data.blog);
        });
   
  };

  //get categorys

  const getcategorys = async() => {
   
     await axios
        .get("https://blog-app-api-ten.vercel.app/category")

        .then((res) => {
          console.log(res.data.categorys);
          setCategory(res.data.categorys);
        });
    
  };
  // prev page handler
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  //nextpage handler

  const nextPage = () => {
    if (page < blog.length / 3) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="rightAbout">
        
       
        <div style={{ height: "12px", visibility: "hidden", display: "flex" }}>
          w
        </div>
        <div
          className="catlistt"
          onClick={()=>{
            getBlogs()}}
        >
          All Category
        </div>
        <Carousel
          slidesToSlide={1}
          responsive={responsive}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {category.map((cat) => {
            return (
              <div
                className="catlistt"
                onClick={() => {
                  getBlogsbyCategory(cat.name);
                }}
              >
                {cat.name}
              </div>
            );
          })}
        </Carousel>
      </div>

     

      <div style={{ display: "flex" }}>
        <div
          className="leftsidee"
          style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
        >
          <div className="cardContanerr" >
            {blog.slice(page * 6 - 6, page * 6).map((data) => {
              return (
                <div className="cardblogg">
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
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="butttonSection">
        <button className="prevnextbtns" disabled={page < 2} onClick={prevPage}>
          &lt; Prev
        </button>
        <span> </span>
        <button
          className="prevnextbtns"
          disabled={page > blog.length / 3 - 2}
          onClick={nextPage}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default Bloog;

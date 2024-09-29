import React from "react";
import bb from "../../assets/BloggingClipart.png";
import Navbar from "../Navbar/Navbar";
import "../AboutMe/about.css";
import Nishant from '../../assets/Nishant.JPG'

function AboutUser() {
  return (
    <div>
      <Navbar />
      <div className="aboout">About BlogsApp</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={bb} alt="" className="bloggimgg" />
      </div>
      <p className="content" style={{ marginTop: "50px" }}>
        Welcome to BlogApp. We're dedicated to providing you the very best
        blogging expericence, with an emphasis on uniqueness, quality, and
        reliability.
      </p>
      <p className="content">
        We hope you enjoy our content, e.g., articles, tips, reviews as much as
        we enjoy offering them to you. If you have any questions or comments,
        please don't hesitate to contact us.
      </p>
      <p className="content">
        Thank you for visiting BlogApp. We hope to see you again soon!
        <div className="aboout" style={{ margin: "70px 0px 70px 0px " }}>
          {" "}
          Abount Me
        </div>

        <div className="meAbout">
       <div><p>
          Hey there everyone!
          <br />I am Nishant. Currently pursuing my B.Tech in one of the
          prestigious college of India, Indian Institute of Technology, Ropar.
          <br /> I am a full stack developer. I develope webApps using MERN
          stack.  <br />I also made mobile Apps with React-Native. <br /> Check out my resume <a href="https://drive.google.com/file/d/1BooSpofpNEeSKnGiwXKwMbPl_ydu5JwF/view?usp=sharing">here</a> and protfollio <a href="https://portfolio-sigma-one-53.vercel.app/#about">here</a>.

          <div style={{display:"flex" , justifyContent:"space-evenly"}}><button className="bbtn"><a href="https://portfolio-sigma-one-53.vercel.app/#about" target="blank">Portfollio</a></button>
          <button className="bbtn"><a href="https://drive.google.com/file/d/1BooSpofpNEeSKnGiwXKwMbPl_ydu5JwF/view?usp=sharing" target="blank"> Resume</a></button></div>
        </p>
        </div>
        <img src={Nishant} alt="" className="imgaboutme"/>
        </div> 
      </p>
    </div>
  );
}

export default AboutUser;

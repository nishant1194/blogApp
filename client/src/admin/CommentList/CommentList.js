import React , {useEffect, useState } from 'react'
import '../CommentList/comment.css'
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';

function CommentList() {
   const convertToDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = now - date;

    // Convert milliseconds to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
    const diffInMins = Math.floor((diffInMs / (1000 * 60)) % 60);
    const diffInSecs = Math.floor((diffInMs / 1000) % 60);
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

    if (diffInMins == 0) return `${diffInSecs} secs ago`;

    if (diffInHours == 0) return `${diffInMins} mins ago`;

    if (diffInDays == 0) return `${diffInHours} hour ago`;
    // Return the formatted string
    if (diffInYears == 0) return `${diffInDays} days ago`;

    return `${diffInYears} years ago`;
  };
  const navigate = useNavigate() ;

  const token = localStorage.getItem("token");
  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const [comments, setCommentt] = useState([]);

  const getCommentsByAuther = async(idd) => {
   await axios
      .get(`https://blog-app-api-ten.vercel.app/comment/auther/${idd}`)
      .then((res) => {
        setCommentt(res.data.comments);
        console.log(res.data.comments);
        console.log(comments) ;
      })
      .catch((err) => {
        console.log(err);
      });
   
  };

  const deleteHandler =(idd) =>{
    
    axios.delete(`https://blog-app-api-ten.vercel.app/comment/auther/${idd}`)
    .then(resp=>{
      alert("deleted successfully") ;

        window.location.reload() ;
    })
    .catch(err=>{
      console.log(err) ;
    })
  }

  const gotoblog=(blogId)=>{
    navigate(`/view/${blogId}`);
  }


  useEffect(()=>{
    getCommentsByAuther(fullName) ;
  },[])

  return (
    <div>
      <div className="cardbox">
      
     {comments.slice().reverse().map(data=>{
      return(<div className="comentBox">
        <div className="contentqq">
        <div className="userNamew">{data.userName} <span className="timmee">{convertToDaysAgo(data.createdAt)} <span className='blogIdd' onClick={()=>{gotoblog(data.blogId)}}>{data.userName+data.blogId.slice(3,8)}</span> </span> </div>
        <div className="comentTextw">{data.commentText}</div>

        </div>
        <button className="deleteq" onClick={()=>{deleteHandler(data._id)}}>del</button>
      </div>)
     })}
     
      </div>
    </div>
  )
}

export default CommentList

import React , {useEffect, useState } from 'react'
import '../CommentList/comment.css'
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';

function CommentList() {
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
        <div className="userNamew">{data.userName} <span className="timmee">2 years ago <span className='blogIdd' onClick={()=>{gotoblog(data.blogId)}}>{data.userName+data.blogId.slice(3,8)}</span> </span> </div>
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

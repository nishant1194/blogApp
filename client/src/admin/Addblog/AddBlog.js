import React, { useState , useEffect } from 'react';
import './addblog.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

function AddBlog() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]) ;
  const [ccategory, setccategory] = useState('') ;
  const token = localStorage.getItem('token') ;

  const getcategory = async() => {
    await axios.get("http://localhost:8000/category").then((res) => {
      console.log(res.data.categorys);
      setCategory(res.data.categorys);
    });
  };
  useEffect(() => {
    getcategory();
  }, []);

const submitHandler=()=>{
  axios.post("http://localhost:8000/blog" ,{
    tittle:title,
    description:value ,
    imageUrl: "ljngrrlnk" ,
    category: ccategory
  } , { headers: { Authorization: "Bearer "+token }
})
}


  return (
    <div>
      <div>
     <div className="catContainer">
    <h2 style={{marginTop:'0px'}}>Add new blog</h2>
    <form className='catForm'>
      <input className='blogInput formitemm' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Blog Tittle' />
      <ReactQuill className=' formitemm' theme="snow" value={value} onChange={setValue} style={{backgroundColor:"white" , height:"200px"}} />
      <select className='blogInput formitemm chooseCat' value={ccategory} onChange={(e)=>{setccategory(e.target.value)}} type='submit' style={{width:"50%" , marginTop:"40px"}} > 
      <option>Choose a Category</option>
     {category.map(data=>{
           return(<option>{data.name}</option>) 

     })} 
      </select>
      
      <input type="file" className='formitemm'  />
      <img src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG" alt="..." className="inputImg formitemm" />
      <button className='catSubmit formitemm' type='submit' onClick={submitHandler}>Submit</button>
    </form>

     </div>

    </div>
    </div>
  )
}

export default AddBlog

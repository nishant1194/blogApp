import React, { useState } from 'react';
import './addblog.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddBlog() {
  const [value, setValue] = useState('');

  return (
    <div>
      <div>
     <div className="catContainer">
    <h2 style={{marginTop:'0px'}}>Add new blog</h2>
    <form className='catForm'>
      <input className='blogInput formitemm' placeholder='Blog Tittle' />
      <ReactQuill className=' formitemm' theme="snow" value={value} onChange={setValue} style={{backgroundColor:"white" , height:"200px"}} />
      <select className='blogInput formitemm chooseCat' type='submit' style={{width:"50%" , marginTop:"40px"}} > 
      <option>Choose Category</option>
      <option>tech</option>
      <option>tsports</option>
      <option>web dev</option>
      <option>Android dev</option>

      </select>
      
      <input type="file" className='formitemm'  />
      <img src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG" alt="..." className="inputImg formitemm" />
      <button className='catSubmit formitemm' type='submit'>Submit</button>
    </form>

     </div>

    </div>
    </div>
  )
}

export default AddBlog

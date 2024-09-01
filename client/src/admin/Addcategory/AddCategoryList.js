import React, {useState} from 'react'
import './addCategory.css'
import axios from 'axios';


function AddCategoryList() {
  const [name, setName] = useState('');
    const token = localStorage.getItem('token') ;

  const submitHandler=()=>{
    
    axios.post("https://blog-app-api-ten.vercel.app/category" ,{
      name:name,
      imageUrl: "ljngrrlnk" ,
    } , { headers: { Authorization: "Bearer "+token }
  })
  .then(res=>{
    console.log(res.data.msg) ;
  })
  }
  
  return (
    <div>
     <div className="catContainer">
    <h2>Add new category</h2>
    <form className='catForm'>
      <input className='catInput formitem' placeholder='Category Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <input type="file" className='formitem'/>
      <img src="https://blog-app-neew.vercel.app/static/media/Nishant.9dcb755d866c80b0ca86.JPG" alt="..." className="inputImg formitem" />
      <button className='catSubmit formitem' type='submit' onClick={submitHandler}>Submit</button>
    </form>

     </div>

    </div>
  )

}

export default AddCategoryList

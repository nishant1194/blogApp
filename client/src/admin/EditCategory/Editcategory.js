import React, {useState} from 'react'
import './Editcategoryy.css'
import axios from 'axios';


function Editcategory() {
  const [name, setName] = useState('');

  const submitHandler=()=>{
    
    const token = localStorage.getItem('token') ;
    axios.post("http://blog-app-api-ten.vercel.app/category" ,{
      name:name,
      imageUrl: "ljngrrlnk" ,
    } , { headers: { Authorization: "Bearer "+token }
  })
  }
  return (
    <div>
     <div className="catContainer">
    <h2>Add new category</h2>
    <form className='catFormm'>
      <input className='catInputt formitemm' placeholder='Category Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <input type="file" className='formitemm'/>
      <img src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG" alt="..." className="inputImg formitem" />
      <button className='catSubmit formitemm' type='submit' onClick={submitHandler}>Submit</button>
    </form>

     </div>

    </div>
  )
}

export default Editcategory

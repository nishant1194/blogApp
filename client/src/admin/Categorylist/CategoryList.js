import React ,{useState,useEffect} from 'react'
import './categorylistt.css'
import axios from 'axios';
import Loading from '../../helpers/Loadar/Loading';

function CategoryList() {
  const [category, setCategory] = useState([]);
  const token = localStorage.getItem('token');
  const [Edit, setEdit] = useState(false) ;
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const[loadingCategory , setloadingCategory] = useState(true) ;

  const submitHandler=()=>{
    const token = localStorage.getItem('token') ;
    axios.put(`https://blog-app-api-ten.vercel.app/category/${id}` ,{
      name:name,
      imageUrl: "ljngrrlnk" ,
    } , { headers: { Authorization: "Bearer "+token }
  })
window.location.reload()
  setId('');
  setEdit(!Edit)
  }

  useEffect(() => {
    getcategorys();
  }, []);

  const getcategorys = () => {
    console.log(token +" = token")
    if(token){
    axios.get("https://blog-app-api-ten.vercel.app/category" , {
      headers: { Authorization: "Bearer "+token }
  })
    .then((res) => {
      console.log(res.data.categorys);
      setCategory(res.data.categorys);
      setloadingCategory(false) ;
    })
  }
  
  };

const deleteCategory = (id)=>{
    axios.delete(`https://blog-app-api-ten.vercel.app/category/${id}`,{
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

//edit function 

const editFunc = (id) =>{
  setEdit(!Edit);
  setId(id);
}
//cancle

const cancelHandler =()=>{
  setEdit(!Edit);

}


if(Edit===false){
  return (
    <>
  { loadingCategory?<Loading /> : <div>
     { category.map((data)=>{
       return( <div className="box">
        <span className="catText">{data.name}</span>
        <img className='catListimg' src={data.imageUrl}  alt="..." />
        
          <button className="edit btnn" onClick={()=>{editFunc(data._id)}}>edit</button>
          <button className="delete btnn" onClick={()=>{deleteCategory(data._id)}}>delete</button>
        
      </div>)
      })}
    </div> }
      </>
  )
}
else{
  return (
    <div>
     <div className="catContainer">
    <h2>Edit category</h2>
    <form className='catForm'>
      <input className='catInput formitem' placeholder='Category Name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
      <input type="file" className='formitem'/>
      <img src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG" alt="..." className="inputImg formitem" />
     <div style={{display:"flex" ,}}> <button className='catEdit formitem' type='submit' onClick={submitHandler}>Edit</button>
      <button className='catEdit formitem' type='submit' onClick={cancelHandler}>Cancel</button>
      </div>
    </form>

     </div>

    </div>)
}
}

export default CategoryList

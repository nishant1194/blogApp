import React, { useState , useEffect } from 'react';
import './addblog.css'
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios' ; 

function AddBlog() {
  const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],}
import React, { useState , useEffect } from 'react';
import './addblog.css' ;
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios' ; 

function AddBlog() {
  const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],

    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    }
};
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]) ;
  const [ccategory, setccategory] = useState('') ;
  const token = localStorage.getItem('token') ;
  const fullName = localStorage.getItem('fullName') ;
  const email = localStorage.getItem('email') ;
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const getcategory = async() => {
    await axios.get("https://blog-app-api-ten.vercel.app/category").then((res) => {
      console.log(res.data.categorys);
      setCategory(res.data.categorys);
    });
  };
  useEffect(() => {
    getcategory();
  }, []);

const submitHandler=(e)=>{
  e.preventDefault();
  axios.post("https://blog-app-api-ten.vercel.app/blog" ,{
    tittle:title,
    description:value ,
    imageUrl: image ,
    category: ccategory,
    upLoaderName:fullName,
    upLoaderEmail:email 
  } , { headers: { Authorization: "Bearer "+token }
}).then(resp=>{
  alert("Blog added Sucessfully");
  window.location.reload()
  })
  .catch(err=>{
    alert(err.response.data.msg);
  })
}
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file); // Append the file
    formData.append("upload_preset", "testingg");
    formData.append("cloud_name" , "dxxlrfpjw") // Replace with your actual unsigned preset
  
    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dxxlrfpjw/image/upload",{
        method:"POST",
        body:formData
      }
      );
      const clouddata = await response.json();

      setImage(clouddata.url);
      setUploadStatus('Upload successful');
    } catch (error) {
      console.error("Error uploading the image: ", error);
      setUploadStatus('Upload failed');
    }
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file)); // For showing a preview before upload
    uploadImage(file); // Trigger image upload on file selection
  };
  


  return (
    <div>
      <div>
     <div className="catContainer">
    <h2 style={{marginTop:'0px'}}>Add new blog</h2>
    <form className='catForm'>
      <input className='blogInput formitemm' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Blog Tittle' />


      <ReactQuill className=' formitemm' theme="snow" value={value} onChange={setValue} modules={{  toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
   
  }}  placeholder='Write your blog here' style={{backgroundColor:"white" }} />


      <select className='blogInput formitemm chooseCat' value={ccategory} onChange={(e)=>{setccategory(e.target.value)}} type='submit' style={{width:"50%" , marginTop:"40px"}} > 
      <option>Choose a Category</option>
     {category.map(data=>{
           return(<option>{data.name}</option>) 

     })} 
      </select>
      
      <input type="file" onChange={handleImageChange} />
      <br />
      {imagePreview && (
        <img src={imagePreview} alt="Preview" width="200px" />
      )}

      <br />
      {uploadStatus && <p>{uploadStatus}</p>}

      <button className='catSubmit formitemm' type='submit' onClick={submitHandler}>Submit</button>
    </form>

     </div>

    </div>
    </div>
  )
}

export default AddBlog

        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],

    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    }
};
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]) ;
  const [ccategory, setccategory] = useState('') ;
  const token = localStorage.getItem('token') ;
  const fullName = localStorage.getItem('fullName') ;
  const email = localStorage.getItem('email') ;
  console.log("fullName = "+fullName);

  const[uploaderBy, setuploaderBy] = useState(fullName);
  const[uploaderemail, setuploaderemail] = useState(email);

  const getcategory = async() => {
    await axios.get("https://blog-app-api-ten.vercel.app/category").then((res) => {
      console.log(res.data.categorys);
      setCategory(res.data.categorys);
    });
  };
  useEffect(() => {
    getcategory();
  }, []);

const submitHandler=()=>{
  axios.post("https://blog-app-api-ten.vercel.app/blog" ,{
    tittle:title,
    description:value ,
    imageUrl: "ljngrrlnk" ,
    category: ccategory,
    upLoaderName:fullName,
    upLoaderEmail:email 
  } , { headers: { Authorization: "Bearer " + token }
})
  .then((rep)=>{
    alert("Added") ;
    console.log("Added");
  })
  .catch(err=>{
    console.log(err);
  }
  )
}


  return (
    <div>
      <div>
     <div className="catContainer">
    <h2 style={{marginTop:'0px'}}>Add new blog</h2>
    <form className='catForm'>
      <input className='blogInput formitemm' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Blog Tittle' />


      <ReactQuill className=' formitemm' theme="snow" value={value} onChange={setValue} modules={{  toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
   
  }}  placeholder='Write your blog here' style={{backgroundColor:"white" }} />


      <select className='blogInput formitemm chooseCat' value={ccategory} onChange={(e)=>{setccategory(e.target.value)}} type='submit' style={{width:"50%" , marginTop:"40px"}} > 
      <option>Choose a Category</option>
     {category.map(data=>{
           return(<option>{data.name}</option>) 

     })} 
      </select>
      
      <input type="file" className='formitemm'  />
      <img src="https://blog-app-neew.vercel.app/static/media/Nishant.9dcb755d866c80b0ca86.JPG" alt="..." className="inputImg formitemm" />
      <button className='catSubmit formitemm' type='submit' onClick={submitHandler}>Submit</button>
    </form>

     </div>

    </div>
    </div>
  )
}

export default AddBlog

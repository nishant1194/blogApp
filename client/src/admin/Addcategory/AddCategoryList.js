import React, {useState} from 'react'
import './addCategory.css'
import axios from 'axios';


function AddCategoryList() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const submitHandler=(e)=>{
    e.preventDefault();

    const token = localStorage.getItem('token') ;
    axios.post("https://blog-app-api-ten.vercel.app/category" ,{
      name:name,
      imageUrl: image ,
    } , { headers: { Authorization: "Bearer "+token }
  })
  .then(resp=>{
    alert("Category added Sucessfully");
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
     <div className="catContainer">
    <h2>Add new category</h2>
    <form className='catForm'>
      <input className='catInput formitem' placeholder='Category Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <input type="file" onChange={handleImageChange} />
      <br />
      {imagePreview && (
        <img src={imagePreview} alt="Preview" width="200px" />
      )}

      <br />
      {uploadStatus && <p>{uploadStatus}</p>}

      {image && (
        <div>
          <h4>Uploaded Image:</h4>
          <img src={image} alt="Uploaded" width="300px" />
        </div>
      )}
      <button className='catSubmit formitem' type='submit' onClick={submitHandler}>Submit</button>
    </form>

     </div>

    </div>
  )

}

export default AddCategoryList

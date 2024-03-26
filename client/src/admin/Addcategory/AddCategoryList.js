import React from 'react'
import './addCategory.css'
function AddCategoryList() {
  return (
    <div>
     <div className="catContainer">
    <h2>Add new category</h2>
    <form className='catForm'>
      <input className='catInput formitem' placeholder='Category Name' />
      <input type="file" className='formitem'  />
      <img src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG" alt="..." className="inputImg formitem" />
      <button className='catSubmit formitem' type='submit'>Submit</button>
    </form>

     </div>

    </div>
  )
}

export default AddCategoryList

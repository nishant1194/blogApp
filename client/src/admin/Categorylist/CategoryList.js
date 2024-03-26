import React from 'react'
import './categorylistt.css'

function CategoryList() {
  return (
    <div>
      <div className="box">
        <span className="catText">Name</span>
        <img className='catListimg' src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG"  alt="..." />
        
          <button className="edit btnn">edit</button>
          <button className="delete btnn">delete</button>
        
      </div>
      <div className="box">
        <span className="catText">Machine learning</span>
        <img className='catListimg' src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG"  alt="..." />
        
          <button className="edit btnn">edit</button>
          <button className="delete btnn">delete</button>
        
      </div>
      <div className="box">
        <span className="catText">Geminii</span>
        <img className='catListimg' src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG"  alt="..." />
        
          <button className="edit btnn">edit</button>
          <button className="delete btnn">delete</button>
        
      </div>
      <div className="box">
        <span className="catText">Technology</span>
        <img className='catListimg' src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG"  alt="..." />
        
          <button className="edit btnn">edit</button>
          <button className="delete btnn">delete</button>
        
      </div>
      <div className="box">
        <span className="catText">Sports</span>
        <img className='catListimg' src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG"  alt="..." />
        
          <button className="edit btnn">edit</button>
          <button className="delete btnn">delete</button>
        
      </div>
      
    </div>
  )
}

export default CategoryList

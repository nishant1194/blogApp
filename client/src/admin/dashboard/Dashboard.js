import React from 'react'
import '../dashboard/dashboardd.css'
import Nishant from '../../assets/Nishant.JPG'
import { Link, Outlet } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CategoryIcon from '@mui/icons-material/Category';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Navbar from '../../user/Navbar/Navbar';

function Dashboard() {

  return (
    <div>
      <Navbar />
    <div className="container">

    <div className="sideNav">
        <div className="logoContainer">
            <img src={Nishant} alt="" className='logo'/>
            <h1 className='logoHeading'>Blog app</h1>
        </div>
        <Link to='/admin/dashboard/admin/dashboard/home' className='link'> <DashboardIcon /><span style={{marginLeft:'10px'}}>Dashboard</span></Link>
        <Link to='/admin/dashboard/admin/dashboard/blog-list' className='link'><EditNoteIcon /><span style={{marginLeft:'10px'}}>Blog List</span></Link>
        <Link to='/admin/dashboard/admin/dashboard/add-blog' className='link'><AddBoxIcon /><span style={{marginLeft:'10px'}}>Add Blog</span></Link>
        <Link to='/admin/dashboard/admin/dashboard/category-list' className='link'><CategoryIcon /><span style={{marginLeft:'10px'}}>Category List</span></Link>
        <Link  to='/admin/dashboard/admin/dashboard/add-category' className='link'><PlaylistAddIcon /><span style={{marginLeft:'10px'}}>Add Category</span></Link>
        <Link to='/admin/dashboard/admin/dashboard/comment' className='link'><PeopleAltIcon /><span style={{marginLeft:'10px'}}>Comments</span></Link>
        <Link to='/admin/dashboard/admin/dashboard/logout' className='link'><PeopleAltIcon/><span style={{marginLeft:'10px'}}>Logout</span></Link>
        <Link  className='link '><span style={{marginLeft:'10px', visibility:"hidden"}}>Logout</span></Link>


    </div>
    <div className="mainContainer">
    <Outlet />
    </div>
    </div>
    </div>
  )
}

export default Dashboard

import React from 'react'
import { Outlet } from 'react-router'

function UserLayout() {
  return (
    <div>
    <Outlet/>
    </div>
  )
}

export default UserLayout

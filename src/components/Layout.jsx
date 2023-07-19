import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Search from './Search'

export default function Layout() {
  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        {/* <Search /> */}
        <div className='px-3 mt-3'>
          <Outlet />
        </div>

      </div>

    </div>
  )
}

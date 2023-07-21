import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import PapersView from './PapersView'
import Home from './Home'

export default function Layout() {
  return (
    <div>
      <Header />
      <div className='container sm:px-12 md:px-14 lg:px-36 mx-auto'>
        {/* <Search /> */}
        <div className='px-3 mt-3'>
          <Outlet />
        </div>

      </div>
      {/* <Home /> */}
      {/* <PapersView /> */}
      {/* <Footer /> */}
    </div>
  )
}

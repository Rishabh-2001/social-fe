import React from 'react'

import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <div>
         <Outlet />
         <Footer />
    </div>
  )
}

export default GlobalLayout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Rootlayout() {
  return (
    
    <div>
      <Header/>
      <div style={{minHeight:'90vh'}}>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Rootlayout
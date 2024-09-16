import React, { useEffect, useState } from 'react'
// import Sidebar from '../layout/SideBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'
import "../scss/styles.scss"
import FallBackUI from '../components/errorHandling/FallbackHandler'

const LayoutPage = (props:any) => {
  const location =useLocation()
  
  return (
    <div>
      <div>
        {/* <Header/> */}
      <div className="content-global-wrapper">
      {location.pathname.includes("/error") ? <FallBackUI/> : <Outlet/>}
      </div>
      </div>
    </div>
  )
}

export default LayoutPage
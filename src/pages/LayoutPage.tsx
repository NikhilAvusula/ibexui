import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import "../scss/styles.scss"
import FallBackUI from '../components/errorHandling/FallbackHandler'
import Sidebar from '../components/layout/SideBar'

const LayoutPage = (props:any) => {
  const [image, setImage] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [leftToggled, setLeftToggled] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [rightToggled, setRightToggled] = useState(false);

  //leftSidebarFunction
  const handleLeftCollapsedChange = () => {
    setLeftCollapsed((prev)=>!prev);
  };
  const handleLeftToggleSidebar = (value:any) => {
    setLeftToggled(prev=>!prev);
  };

  //rightsidebarFunction
  const handleRightCollapsedChange = () => {
    setRightCollapsed((prev)=>!prev);
  };
  const handleRightToggleSidebar = (value:any) => {
    setRightToggled(prev=>!prev);
  };

  const handleImageChange = (checked:any) => {
    setImage(checked);
  };

  
  
  return (
    <div>
      <div className="sidebarMain">
      <div className={`layout-inner d-flex content-global-wrapper ${leftCollapsed ? 'sidebarToggled' : 'sidebarNotToggled'}`}>
      <Sidebar 
      image={image}
      collapsed={leftCollapsed}
      toggled={leftToggled}
      handleToggleSidebar={handleLeftToggleSidebar}
      handleCollapsedChange={handleLeftCollapsedChange}
      />
      </div>
      <Outlet/>
      <div className={`${rightToggled ? 'sidebarToggled' : 'sidebarNotToggled'}`}>
      <Sidebar 
      image={image}
      collapsed={rightCollapsed}
      toggled={rightToggled}
      handleToggleSidebar={handleRightToggleSidebar}
      handleCollapsedChange={handleRightCollapsedChange}
      />
      </div>
      </div>
    </div>
  )
}

export default LayoutPage
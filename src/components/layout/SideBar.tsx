import { Link, NavLink } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';


import { ReactComponent as EmailLogo } from "../../images/emailLogo.svg"
import "../../scss/styles.scss"
import { RoutesEnum } from '../../utils/RouteUtils';
import { sidebarData } from '../../data/sideBarData';
import { ISidebarItem } from '../../tsmodels/SidebarModel';

const Sidebar = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}: any) => {
  return (
    <ProSidebar
      image={image ? 'image' : undefined}
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
    >
      <SidebarHeader>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: '9px',
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: '1px'
                }}
              >
                Ibex
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <Menu iconShape="circle">
          {sidebarData.map((each: ISidebarItem) =>
            <MenuItem icon={each.icon}>
              {each.name}
              <Link to={each.routeUrl} />
            </MenuItem>
          )}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Sidebar;

import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/"style={{textDecoration:"none"}}><span className='logo'>lamadmin</span></Link>        
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">LISTS</p>
          
          <Link to="/users"style={{textDecoration:"none"}}>
          <li>
            <GroupIcon className='icon'/>
            <span>Users</span>
          </li></Link>

          <Link to="/products"style={{textDecoration:"none"}}>
          <li>
            <InventoryIcon className='icon'/>
            <span>Products</span>
          </li></Link>
          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <BorderColorOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li></Link>
          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <LocalShippingOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li></Link>
          <p className="title">USEFUL</p>

          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <QueryStatsOutlinedIcon className='icon'/>
            <span>Stats</span>
          </li></Link>
          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <span>Notifications</span>
          </li></Link>

          <p className="title">SERVICES</p>

          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <HealthAndSafetyOutlinedIcon className='icon'/>
            <span>System Health</span>
          </li></Link>

          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <SettingsOutlinedIcon className='icon'/>
            <span>Settings</span>
          </li></Link>
          <p className="title">USER</p>

          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <AccountBoxIcon className='icon'/>
            <span>Profile</span>
          </li></Link>

          <Link to="/dashboard"style={{textDecoration:"none"}}>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li></Link>

        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';


function Navbar() {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon className='icon'/>
          </div>
          <div className="item">
          <DarkModeOutlinedIcon className='icon'onClick={()=>dispatch({type:"TOGGLE"})} style={{cursor:"pointer"}}/>
          </div>
          <div className="item">
          <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
          <NotificationsNoneOutlinedIcon className='icon'/>
          <div className="counter">2</div>
          </div>
          <div className="item">
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
          <div className="counter">5</div>

          </div>
          <div className="item">
          <ListOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img 
                src='https://images.pexels.com/photos/2524370/pexels-photo-2524370.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='profile-img'
                className='avatar'
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import './widget.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoneyIcon from '@mui/icons-material/Money';


function Widget() {

  return (
    <div className='widget'>

        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">21321</span>
            <span className="link">see all users</span>
        </div>

        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                20%
            </div>
            <PersonOutlineOutlinedIcon className='icon' />        
        </div>
        
    </div>
  )
}

export default Widget
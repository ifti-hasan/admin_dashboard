import './widget.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoneyIcon from '@mui/icons-material/Money';


function Widget({type}) {
  let amount=100;
  let data;
  switch(type){
    case 'users':
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:<PersonOutlineOutlinedIcon 
          className='icon'
          style={{
            backgroundColor:"rgba(128, 0, 128, 0.349)",
            color:"purple",
          }}/>
    }
      break;    
    case 'orders':
      data={
        title:"ORDERS",
        isMoney:false,
        link:"See all orders",
        icon:<ShoppingCartTwoToneIcon 
          className='icon'
          style={{
            backgroundColor:"rgb(243, 243, 121)",
            color:"yellow",
          }}/>
      }
        break;
      case 'earnings':
        data={
          title:"EARNINGS",
          isMoney:true,
          link:"See all earnings",
          icon:<MoneyIcon 
            className='icon'
            style={{
              backgroundColor:"rgb(148, 252, 148)",
              color:"green",
            }}/>
      }
        break;
      case 'balance':
        data={
          title:"BALANCE",
          isMoney:true,
          link:"See details",
          icon:<AccountBalanceWalletIcon 
            className='icon'
            style={{
              backgroundColor:"rgb(252, 149, 149)",
              color:"red",
            }}/>
        }
          break; 

    default:
      break;
  }
  return (
    <div className='widget'>

        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && '$'}{amount}</span>
            <span className="link">{data.link}</span>
        </div>

        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                20%
            </div>
            {data.icon}           
        </div>
        
    </div>
  )
}

export default Widget
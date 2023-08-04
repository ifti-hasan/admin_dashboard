import { useState } from "react"
import "./new.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"

function New({inputs,title}) {
  const [file,setFile] = useState("")
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
             <img src={file ? URL.createObjectURL(file):
            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt=""/>

          </div>
          <div className="right">
            <form action="">

              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file"
                       id="file" 
                       style={{display:"none"}}
                       onChange={(e)=>setFile(e.target.files[0])} />

              </div>
              {inputs.map(input=>{
                return (
                  <div className="formInput"key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
                )
              })}

              {/* <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text"placeholder="john_doe" />
              </div>

              <div className="formInput">
                <label htmlFor="">Name and surname</label>
                <input type="text" placeholder="John Doe"/>
              </div>

              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email"placeholder="jogn_doe@gmail.com" />
              </div>

              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="123 456 789" />
              </div>

              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text"placeholder="elton street,23/4" />
              </div>

              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text"placeholder="USA" />
              </div> */}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
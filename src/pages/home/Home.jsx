import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'

function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type='users' />
            <Widget type='orders'/>
            <Widget type='earnings'/>
            <Widget type='balance'/>            
          </div>
        </div>
    </div>
  )
}

export default Home
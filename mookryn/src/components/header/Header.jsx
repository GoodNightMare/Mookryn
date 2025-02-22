import React from 'react'
import './Header.css'
import { FaStarAndCrescent } from "react-icons/fa";

export default function Header({tab, setTab}) {
  return (
    <div className='header'>
        <div className='nav-content' onClick={() => setTab('home')}>
            <p style={{fontSize:"1.2rem",backgroundColor: tab === 'home' ? 'lightblue' : 'rgb(205,205,205)'}}>Home</p>
        </div>
        <div className='nav-content' onClick={() => setTab('month')}>
            <p style={{fontSize:"1.2rem",backgroundColor: tab === 'month' ? 'lightblue' : 'rgb(205,205,205)'}}>Month</p>
        </div>
        <div className='nav-content' onClick={() => setTab('birth')}>
            <p style={{fontSize:"1.2rem",backgroundColor: tab === 'birth' ? 'lightblue' : 'rgb(205,205,205)'}}>Birth</p>
        </div>
        <div className='nav-content' onClick={() => setTab('trip')}>
            <p style={{fontSize:"1.2rem",backgroundColor: tab === 'trip' ? 'lightblue' : 'rgb(205,205,205)'}}>Trip</p>
        </div>
        <div className='nav-content' onClick={() => setTab('impressed')}>
            <p style={{fontSize:"1.2rem",backgroundColor: tab === 'impressed' ? 'lightblue' : 'rgb(205,205,205)'}}>Impressed</p>
        </div>
        <div className='nav-content'><FaStarAndCrescent /></div>
    </div>
  )
}

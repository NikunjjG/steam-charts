import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
              <Link to = "/">
                <span className='steam'>STEAM</span>
                <span className='charts'> CHARTS</span>
              </Link>
            </div>
            <div className="right">
                <span className='desc'><em> An ongoing analysis of Steam's current players </em></span>
                <input type="text" name="" id=""  placeholder='search games'/>
            </div>
        </div>
    </div>
  )
}

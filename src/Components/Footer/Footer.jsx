import React from 'react'
import './Footer.css'
import { Outlet } from 'react-router-dom'
import Icon from './icon'
import Links from './Links'

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="search">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="btn btn-primary">search</button>
        </div>

        <Icon />
        <Links />
        
        <div className="credit">
          created by <span>Shaqlin_MOndal</span> | all rights reserved!
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default Footer

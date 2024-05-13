import React from 'react'
import { history } from './Styles/Index'
import { Link } from 'react-router-dom'

function AboutVerticalNav() {
  return (
    <div className='verticalNav'>
        <h1>History & Traditions</h1>
        <div className="links">
            <Link to='/abouthistorybody' className='link'>History</Link>
            <Link to='/aboutfounder' className='link'>Founders</Link>
            <Link to='/aboutprincipals' className='link'>Past Principals</Link>
        </div>
    </div>
  )
}

export default AboutVerticalNav
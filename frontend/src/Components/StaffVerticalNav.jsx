import React from 'react'
import { Link } from 'react-router-dom'
import { history } from './Styles/Index'

const StaffVerticalNav = () => {
  return (
    <div className='verticalNav'>
        <h1>School Staffs</h1>
        <div className="links">
            <Link to='/principal' className='link'>Principal</Link>
            <Link to='/deputyprincipal' className='link'>Deputy Principal</Link>
        </div>
    </div>
  )
}

export default StaffVerticalNav
import React from 'react'
import { logo } from './Assets/Index'
import { topbar } from './Styles/Index'

const TopBar = () => {
  return (
    <div className='topbar'>
        <img src={logo} alt="logo" width='70px'/>
        <p>KM/AK/POTTUVIL CENTRAL COLLEGE(NS)</p>
    </div>
  )
}

export default TopBar
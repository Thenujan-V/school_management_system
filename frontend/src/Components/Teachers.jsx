import React from 'react'
import StaffFirst from './StaffFirst'
import Navbar from './Navbar'
import StaffVerticalNav from './StaffVerticalNav'

const Teachers = () => {
  return (
    <div>
        <Navbar />
        <StaffFirst />
        <div className='container-fluid' style={{display:'flex'}}>
            <StaffVerticalNav  />
        </div>
    </div>
  )
}

export default Teachers
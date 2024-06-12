import React from 'react'
import Navbar from '../Components/Navbar'
import ContactIndex from '../Components/ContactIndex'
import ContactUs from '../Components/ContactUs'
import TopBar from '../Components/TopBar'

const Contact = () => {
  return (
    <div>
        <TopBar />
        <Navbar />
        <ContactIndex />
        <ContactUs />
    </div>
  )
}

export default Contact
import React from 'react'
import Navbar from '../Components/Navbar'
import SyllabusIndex from '../Components/SyllabusIndex'
import SyllabusPage from '../Components/SyllabusPage'
import TopBar from '../Components/TopBar'

const Syllabus = () => {
  return (
    <div>
        <TopBar />
        <Navbar />
        <SyllabusIndex />
        <SyllabusPage />
    </div>
  )
}

export default Syllabus
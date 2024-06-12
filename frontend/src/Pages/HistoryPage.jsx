import React from 'react'
import Navbar from '../Components/Navbar'
import HistoryFrist from '../Components/HistoryFrist'
import AboutVerticalNav from '../Components/AboutVerticalNav'
import AboutBody from '../Components/AboutBody'
import TopBar from '../Components/TopBar'

const HistoryPage = () => {
  return (
    <>
        <TopBar />
        <Navbar />
        <HistoryFrist />
        <AboutBody />
    </>
  )
}

export default HistoryPage
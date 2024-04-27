import React from 'react'
import Navbar from '../Components/Navbar'
import HomeIndex from '../Components/HomeIndex'
import HomeAbout from '../Components/HomeAbout'
import NoticeBoard from '../Components/NoticeBoard'
import HomeNews from '../Components/HomeNews'
import Map from '../Components/Map'

const Home = () => {
  return (
    <>
        <Navbar />
        <HomeIndex />
        <HomeAbout />
        <NoticeBoard />
        <HomeNews />
        <Map />
    </>
  )
}

export default Home
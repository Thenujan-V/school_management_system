import React from 'react'
import Navbar from '../Components/Navbar'
import NewsIndex from '../Components/NewsIndex'
import { NewsContent } from '../Components/NewsContent'
import { news } from '../Components/Styles/Index'
import TopBar from '../Components/TopBar'

export const News = () => {
  return (
    <div>
        <TopBar />
        <Navbar />
        <NewsIndex />
        <NewsContent />
    </div>
  )
}

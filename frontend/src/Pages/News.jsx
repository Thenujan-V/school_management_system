import React from 'react'
import Navbar from '../Components/Navbar'
import NewsIndex from '../Components/NewsIndex'
import { NewsContent } from '../Components/NewsContent'
import { news } from '../Components/Styles/Index'

export const News = () => {
  return (
    <div>
        <Navbar />
        <NewsIndex />
        <NewsContent />
    </div>
  )
}

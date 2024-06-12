import React from 'react'
import Navbar from './Navbar'
import HistoryFrist from './HistoryFrist'
import AboutVerticalNav from './AboutVerticalNav'
import { founder } from './Assets/Index'
import TopBar from './TopBar'

const AboutFounder = () => {
  return (
    <>
        <TopBar />
        <Navbar />
        <HistoryFrist />
    <div className='container-fluid' style={{display:'flex'}}>
        <AboutVerticalNav  />
        <div className='body p-5 text-center'>
            <img className='img mb-5' src={founder} alt="schoolPic" height='600px'/>
            <p style={{fontWeight:'bold'}}>
                Mr. Abdul Razak Moulana, Mr.YM.Musthafa, Mr.A.Meeralebbe(GS) & Mr.MM.Ibraheem(Suprindent)MP
            </p>
        </div>
    </div>
    </>
  )
}

export default AboutFounder
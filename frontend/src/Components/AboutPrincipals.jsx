import React from 'react'
import AboutVerticalNav from './AboutVerticalNav'
import HistoryFrist from './HistoryFrist'
import Navbar from './Navbar'
import { bari } from './Assets/Index'

const AboutPrincipals = () => {
  return (
    <>
        <Navbar />
        <HistoryFrist />
        <div className='container-fluid' style={{display:'flex'}}>
            <AboutVerticalNav  />
            <div className="principals">
                <div className='principle mt-5'>
                    <h1><span>2021-2022</span>  Mr.AL.Abdul Bary(SLPS)</h1>
                    <div className='details'>
                        <img className='img mb-5' src={bari} alt="schoolPic" height='212px'/>
                        <p>
                        He has been running our school for 2 years. He led the school to achieve many outstanding achievements in the field of educatucation during that period.
                        </p>
                    </div>
                </div>
            </div>                                                                                                            
        </div>
    </>
  )
}

export default AboutPrincipals
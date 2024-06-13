import React from 'react'
import Navbar from './Navbar'
import StaffFirst from './StaffFirst'
import StaffVerticalNav from './StaffVerticalNav'
import { bari, principal } from './Assets/Index'
import TopBar from './TopBar'

const Principal = () => {
  return (
    <div>
        <TopBar />
        <Navbar />
        <StaffFirst />
        <div className='container-fluid' style={{display:'flex'}}>
            <StaffVerticalNav  />
            <div className="principals">
                <div className="row">
                    <div className="image col-lg-4">
                        <img src={principal} alt="principal photo" height='250px'/>
                    </div>
                    <div className="name col-lg-8">
                        <p className='msg'>PRINCIPAL MESSAGE</p>
                        <p className='school_name'>Ak/Pottuvil Central College(NS)</p>
                        <p className='principal_name'>Mr.KR.Nasrullah(SLPS I)</p>
                    </div>  
                </div>
                <div className="message">
                    <p>
                    Ak/Pottuvil Central College was founded in the year 1951, and  is  situated in Pottuvil, Ampara District, Eastern Province.
                    <br /><br />
                    In these 72 years of Education Journey, and with several commendable achievements therein, Ak/Pottuvil Central College today has 1200 students and 49 Teachers. Our college has a total of 33 classes from Grade 6 to Grade 13. In the Advanced Level Section, classes are conducted in Arts, Commerce, Physical Science, and Bio-Science streams, while Bi-Lingual learning facilities are provided from Grade 06 to Grade 11. We have 13 Years guaranteed education section too.
                    <br />
                    <br />Ak/Pottuvil Central College has produced many great personalities of its own, worthy of higher achievements in the Educational and Social sectors.
                    <br /><br />
                    When we look at the past, there had been many Principals who had rendered dedicated services to this school, and who are worthy of emulation.
                    <br /><br />
                    I was appointed in Principal Service 1, to this school, as a Principal in 2022.  From 2022.11.03 to date, I am functioning as the Principal of Ak/Pottuvil Central College.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Principal
import React from 'react'
import Navbar from './Navbar'
import StaffFirst from './StaffFirst'
import StaffVerticalNav from './StaffVerticalNav'
import { bari } from './Assets/Index'


const DeputyPrincipal = () => {
  return (
    <div>
        <Navbar />
        <StaffFirst />
        <div className='container-fluid' style={{display:'flex'}}>
            <StaffVerticalNav  />
            <div className="principals">
                <div className="row">
                    <div className="image col-lg-4">
                        <img src={bari} alt="principal photo" height='300px'/>
                    </div>
                    <div className="name col-lg-8">
                        <p className='msg'>DEPUTY PRINCIPAL MESSAGE</p>
                        <p className='school_name'>Ak/Pottuvil Central College(NS)</p>
                        <p className='principal_name'>Mr.NT.Mubarak Ali(SLPS)</p>
                    </div>  
                </div>
                <div className="message">
                    <p>
                    Pottuvil Central College is one of the prominent places which is located in the South Eastern part of our island in Indian Ocean. Presently, it has completed it’s  72nd anniversary. At this moment, it’s my pleasure to say that it is going to associated with the society through its web site pottuvilcc.schweb.lk. In that way, as a deputy principal I’m very glad to give my foreword to this event.                    <br /><br />
                    In these 72 years of Education Journey, and with several commendable achievements therein, Ak/Pottuvil Central College today has 1200 students and 49 Teachers. Our college has a total of 33 classes from Grade 6 to Grade 13. In the Advanced Level Section, classes are conducted in Arts, Commerce, Physical Science, and Bio-Science streams, while Bi-Lingual learning facilities are provided from Grade 06 to Grade 11. We have 13 Years guaranteed education section too.
                    <br />
                    <br />
                    This school is highly support the people who are waiting to quench their thirst beyond education. At the same time it creates, mends and provides innumerable educationalists and professionalists to this society. The report that is prepared by the  Economist Intelligent Unit [EUI] with the sponsorship of Ericsson [NASDAQ;ERICI] says that; “There are some possibilities to increase their’s gross national product by 20 percentage through improving the internet facilities in school of the poor broad band connections in countries”.                    <br /><br />
                    When we look at the past, there had been many Principals who had rendered dedicated services to this school, and who are worthy of emulation.
                    <br /><br />We are expecting some goals through out our website in school. They are as follows; motivating the students towards inventions, creating more and more in school, gaining knowledge throughout self learning, sharing knowledge between students in school, improving knowledge in computer studies, producing citizens with good at ICT qualification to this society and implementing educational information management system by intra connecting with school system. In that way, we can provide ample golden opportunities to the school students by posting student’s articles, information and accepted subject contents in the school web site.
In the conclusion, Here we are determined to develop this school which is in the leading in Pottuvil region. I conclude my compassionate words that our efforts should be in the form of action and I convey my gratitude to Mr.M.H.M.Farmiz [Tr] who is a web designer of our school.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeputyPrincipal
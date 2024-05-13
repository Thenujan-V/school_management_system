import React from 'react'
import AboutVerticalNav from './AboutVerticalNav'
import { oldSchool } from './Assets/Index'
import Navbar from './Navbar'
import HistoryFrist from './HistoryFrist'

const AboutBody = () => {
  return (
    <>
        <Navbar />
        <HistoryFrist />
    <div className='container-fluid' style={{display:'flex'}}>
        <AboutVerticalNav />
        <div className='body p-5'>
            <img className='img-fluid' src={oldSchool} alt="schoolPic" />
            <p>
                <br /><br />
            Till 1950 there were only opportunities to get primary education in the village in Pottuvil. The Methodist Mission Tamil Mixed School, which originated at the end of the 19th century, was the primary school in this town, but it had classes from elementary to high school. Government Girls' School started in 1939, Pottuvil Abhinava Sinhala Kalavan School started in 1946, Government Boys' School started in 1947 were also functioning as primary schools with up to five classes. In such a situation, only a few children of rich who were interested in education and had financial means went abroad and completed their secondary education. Many students stopped their education with primary classes due to lack of facilities. Due to this, the educational status of Pottuvil region was seen as backward.
<br /><br />
In 1948 when Sri Lanka became independent, Alhaj M.M. from Nindavoor was the Honorary Member of Parliament for Pothuvil Constituency. Ibrahim (Suprindan) In Annar Pothu, the school gate of the village was close to the Maraikayar Sabha and the dignitaries, especially Janab, the preacher of the Maraikayar Sabha, s.a.m., Abdul Razak Mela, the chief Maraikayar. Ah, Janab, one of Miralev's Vidana and Kudimaraikai, E.L. Meera Sahib was friendly with Bhodiar. On the occasions when she comes to Pothuvil, these dignitaries frequently discuss with her about Pothuli's educational status. Because of this, M.M. was well aware of Pothuvil's educational problems. Ibrahim (PBUH) was seen.
<br /><br />
At this time, Mr. who was the Minister of Education in the first cabinet of independent Sri Lanka. EA Nugavel, when he started expediting the plan to establish 'Goy't Junior School' at every district level, as per the request of Pothuvil Maraikayar Sabha. MM As a result of their efforts, Pothuvil area also got a junior school  
            </p>
        </div>
    </div>
    </>
    
  )
}

export default AboutBody
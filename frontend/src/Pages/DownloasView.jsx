import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import DownloadsNav from '../Components/DownloadsNav'
import { useNavigate, useParams } from 'react-router-dom'
import ViewNotes from '../Components/ViewNotes'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import TopBar from '../Components/TopBar'
import SubjectContent from '../Components/SubjectContent'

const DownloasView = () => {
    const params = useParams()
    const [subject, setSubject] = useState('')
    const grade = params.grade
    
    useEffect(() => {
        if(params.subject){
            setSubject(params.subject)
        }
    }, [params])
    console.log('sub :', subject)
  return (
    <div>
        <TopBar />
        <Navbar />
        <div style={{display:'flex'}}>
            <DownloadsNav 
                grade = {grade}
                // subject = {subject}
            />
            {
                subject !== 'sub' ? 
                <SubjectContent
                grade = {grade}
                subject = {subject}
            />:<p>SELECT SUBJECT</p>
            }
        </div>
    </div>
  )
}

export default DownloasView
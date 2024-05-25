import React from 'react'
import Navbar from '../Components/Navbar'
import DownloadsNav from '../Components/DownloadsNav'
import { useNavigate, useParams } from 'react-router-dom'
import ViewNotes from '../Components/ViewNotes'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'

const DownloasView = () => {
    const params = useParams()
    const grade = params.grade
    console.log('grade :', params.grade)
  return (
    <div>
        <Navbar />
        <div style={{display:'flex'}}>
            <DownloadsNav 
                grade = {grade}
            />
            {/* <ViewNotes 
                grade = {grade}
                subject = 'maths'
            /> */}
        </div>
    </div>
  )
}

export default DownloasView
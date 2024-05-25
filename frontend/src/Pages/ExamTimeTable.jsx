import React from 'react'
import Navbar from '../Components/Navbar'
import ExamTimeVerticalNav from '../Components/ExamTimeVerticalNav'
import ViewExamTimes from '../Components/ViewExamTimes'
import { useParams } from 'react-router-dom'

const ExamTimeTable = () => {
    const params = useParams()
    const grade = params.grade

  return (
    <div>
        <Navbar />
        <div style={{display:'flex'}}>
            <ExamTimeVerticalNav />
            <ViewExamTimes 
                grade = {grade}
            />
        </div>
    </div>
  )
}

export default ExamTimeTable
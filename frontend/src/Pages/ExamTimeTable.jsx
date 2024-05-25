import React from 'react'
import Navbar from '../Components/Navbar'
import ExamTimeVerticalNav from '../Components/ExamTimeVerticalNav'
import ViewExamTimes from '../Components/ViewExamTimes'
import { useParams } from 'react-router-dom'

const ExamTimeTable = () => {
    const params = useParams()
    const grade = params.grade
    const term = params.term

  return (
    <div>
        <Navbar />
        <div style={{display:'flex'}}>
            <ExamTimeVerticalNav 
                grade = {grade}
            />
            <ViewExamTimes 
                grade = {grade}
                Term = {term}
            />
        </div>
    </div>
  )
}

export default ExamTimeTable
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import ExamTimeVerticalNav from '../Components/ExamTimeVerticalNav'
import ViewExamTimes from '../Components/ViewExamTimes'
import { useNavigate, useParams } from 'react-router-dom'
import { decodeToken } from '../Services/TokenServices'


const ExamTimeTable = () => {
    const params = useParams()
    const grade = params.grade
    const term = params.term

    const navigate = useNavigate()
    const decodedToken = decodeToken()
    const [indexNo, setIndexNo] = useState('')

    useEffect(() => {
        if(decodedToken){
            const studentId = decodedToken.id
            setIndexNo(studentId)
        }
        else{
            setIndexNo('')
        }
    }, [decodedToken])

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
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import ExamTimeVerticalNav from '../Components/ExamTimeVerticalNav'
import ViewExamTimes from '../Components/ViewExamTimes'
import { useNavigate, useParams } from 'react-router-dom'
import { decodeToken, getToken } from '../Services/TokenServices'
import TopBar from '../Components/TopBar'


const ExamTimeTable = () => {
    const params = useParams()
    const grade = params.grade
    const term = params.term

    const navigate = useNavigate()
    const token = getToken()
    const decodedToken = decodeToken(token)
    const [indexNo, setIndexNo] = useState('')

    useEffect(() => {
        if(decodedToken){
            const studentId = decodedToken.indexNo
            setIndexNo(studentId)
        }
        else{
            setIndexNo('')
        }
    }, [decodedToken])

  return (
    <div>
        <TopBar />
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
import React, { useEffect, useState } from 'react'
import { resultTable } from './Styles/Index'

const ResultTable = () => {
    const results = [
        {'student_name' : 'student 1', 'index_no' : 'A200012', 'grade':'6', 'term':'2', 'maths' : '90', 'science' : '89', 'tamil' : '90', 'english' : '95'}
    ]
    const [apiResult,setApiResult] = useState('')
    const [totalMarks, setTotalMarks] = useState('')

    useEffect(() => {
        const total = Number(results[0].maths) + Number(results[0].science) + Number(results[0].tamil) + Number(results[0].english)
        setTotalMarks(total)
    })
    const avgMarks = totalMarks/10
  return (
    <div className='results'>
        <div className="details">
            <p>Student Index Number : {results[0].index_no}</p>
            <p>Student Name : {results[0].student_name}</p>
            <p>Grade : {results[0].grade} - {results[0].term} term</p>
        </div>
        <div className="results">
            <table>
                <thead>
                    <tr>
                        <th>Subjects</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tamil</td>
                        <td>{results[0].tamil}</td>
                    </tr>
                    <tr>
                        <td>Maths</td>
                        <td>{results[0].maths}</td>
                    </tr>
                    <tr>
                        <td>Science</td>
                        <td>{results[0].science}</td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>{results[0].english}</td>
                    </tr>
                    <tr>
                        <td>Tamil</td>
                        <td>{results[0].tamil}</td>
                    </tr>
                    <tr>
                        <td>Tamil</td>
                        <td>{results[0].tamil}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='average'>
            <p>TOTAL MARKS : {totalMarks}</p>
            <p>AVERAGE MARKS : {avgMarks}</p>
            <p></p>
        </div>
    </div>
  )
}

export default ResultTable
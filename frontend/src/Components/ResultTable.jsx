import React, { useEffect, useState } from 'react'
import { result, resultTable } from './Styles/Index'
import { fetchResults } from '../Services/ExamServices'

const ResultTable = ({indexNo}) => {
    console.log('index ', indexNo)
    const [results,setResults] = useState('')
    const [totalMarks, setTotalMarks] = useState('')

    useEffect(() => {
        const fetchStudentsResults = async(inderxNo) => {
            try{
                const response = await fetchResults(indexNo)
                console.log('resss : ',response.data)

                const parsedData = response.data.map((item) => {
                    const [subject, mark] = item;
                    return { subject, mark };
                  });

                setResults(parsedData)
            }
            catch(error){
                console.log('error occur :', error)
            }
        }
        fetchStudentsResults(indexNo)
    }, [indexNo])
    // const avgMarks = totalMarks/10

    console.log('res :', results)
  return (
    <div className='results'>
        <div className="details">
            {/* <p>Student Index Number : {results[0].index_no}</p>
            <p>Student Name : {results[0].student_name}</p>
            <p>Grade : {results[0].grade} - {results[0].term} term</p> */}
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
                    {
                        results && results.length > 0 && results.map((result) => (
                        <tr>
                            <td>{result.subject}</td>
                            <td>{result.mark}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className='average'>
            {/* <p>TOTAL MARKS : {totalMarks}</p>
            <p>AVERAGE MARKS : {avgMarks}</p> */}
            <p></p>
        </div>
    </div>
  )
}

export default ResultTable
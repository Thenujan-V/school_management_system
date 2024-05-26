import React, { useEffect, useState } from 'react'
import { result, resultTable } from './Styles/Index'
import { fetchResults } from '../Services/ExamServices'

const ResultTable = ({indexNo, term}) => {

    const [results,setResults] = useState('')
    const [totalMarks, setTotalMarks] = useState('')
    const [avg, setAvg] = useState('')

    useEffect(() => {
        const fetchStudentsResults = async(indexNo, term) => {
            try{
                const response = await fetchResults(indexNo, term)
                console.log('resss : ',response.data)

                const parsedData = response.data.map((item) => {
                    const [subject, mark, first_name, last_name, grade] = item;
                    return { subject, mark, first_name, last_name, grade };
                  });

                setResults(parsedData)
            }
            catch(error){
                console.log('error occur :', error)
            }
        }
        fetchStudentsResults(indexNo, term)
    }, [indexNo, term])

    useEffect(() => {
        const totalMarksOfStudents = () => {
            try{
                const total = results.reduce((acc, result) => acc + result.mark, 0);
                setTotalMarks(total)
                const avarage = total / 10
                setAvg(avarage)
            }
            catch(error){
                console.log('error occur in count total:', error)
            }
        }
        totalMarksOfStudents()
    }, [results])

    console.log('res :', totalMarks)

  return (
    <div className='results'>
        { results  && results.length > 0 ?
            <div className='d-flex w-100' style={{gap:'5vw', justifyContent:'center', alignItems:'center'}}>
                <div className="details">
                    <p>Student Index Number : {indexNo}</p>
                    <p>Student Name : {results[0].first_name} {results[0].last_name}</p>
                    <p>Grade : {results[0].grade}</p>
                    <p>Term : {term}</p>
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
                    <p>TOTAL MARKS : {totalMarks}</p>
                    <p>AVERAGE MARKS : {avg}</p>
                    <p></p>
                </div>  
            </div> : <div style={{display:'flex', justifyContent:'center', width:'100%'}}><p style={{ alignItems:'center', color:'var(--yellow)', fontSize:'22px'}}>Your Results not release... </p></div>
        }
    </div>
  )
}

export default ResultTable
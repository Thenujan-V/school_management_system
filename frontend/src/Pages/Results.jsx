import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import ResultTable from '../Components/ResultTable'
import { decodeToken, getToken } from '../Services/TokenServices'
import { useNavigate } from 'react-router-dom'

const Results = () => {
    const navigate = useNavigate()
    const token = getToken()
    const decodedToken = decodeToken(token)
    const [index_no, setIndex_no] = useState('')

    useEffect(() => {
        if(decodedToken){
            const studentId = decodedToken.indexNo
            setIndexNo(studentId)
        }
        else{
            setIndexNo('')
        }
    }, [decodedToken])

    const [indexNo, setIndexNo] = useState('')
    const [term, setTerm] = useState('')
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(true)


    const validate = () => {
        const newError = {}
        if(!indexNo){
            newError.indexNo = "Index number is require"
        }
        if(!term){
            newError.term = "Term is require"
        }
        setErrors(newError)
        return Object.keys(newError).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(validate()){
            setLoading(false)
        }
        else{
            console.log('no:');
            
        }
    }

  return (
    <>
        <Navbar />
        <div className="container results-input">
            <h2>Your Results</h2>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="index">Input Your Index Number</label>
                        <input 
                            type="text" 
                            id='indexInput' 
                            name='index' 
                            value={indexNo}
                            onChange={(e) => setIndexNo(e.target.value)}/>
                            <p>{errors.indexNo}</p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="term">Term</label>
                        <select 
                            id='term' 
                            name='term'
                            value={term}                        
                            onChange={(e) => setTerm(e.target.value)}
                            style={{width:'15vw', height:'5vh', borderRadius:'5px'}}
                            >
                            <option value="">Select Term</option>
                            <option value="1">First Term</option>
                            <option value="2">Second Term</option>
                            <option value="3">Third Term</option>
                        </select>
                        <p>{errors.term}</p>
                    </div>  
                    <button type='submit'>Submit</button>
                </form>
            </div>
            {
                loading ? null : 
                <ResultTable 
                    indexNo = {indexNo}
                    term = {term}
                />
            }
        </div>
    </>
  )
}

export default Results
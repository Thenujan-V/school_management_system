import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import ResultTable from '../Components/ResultTable'

const Results = () => {
    const [indexNo, setIndexNo] = useState('')
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(true)


    const validate = () => {
        const newError = {}
        if(!indexNo){
            newError.indexNo = "Index number is require"
        }
        setErrors(newError)
        console.log('ee : ',newError)
        return Object.keys(newError).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(validate()){
            setLoading(false)
            console.log('loo :', loading)
        }
        else{
            console.log('no:');
            
        }
    }
    console.log('no:', indexNo);

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
                            <p>{errors.indexNo}  </p>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            {
                loading ? null : 
                <ResultTable 
                    indexNo = {indexNo}
                />
            }
        </div>
    </>
  )
}

export default Results
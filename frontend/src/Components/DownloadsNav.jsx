import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSubjectNames } from '../Services/SyllabusServices'

const DownloadsNav = ({grade}) => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        const fetchSubjects = async(grade) => {
            try{
                const response = await getSubjectNames(grade)
                setSubjects(response.data)
            }
            catch(error){
                console.log('fetching error :', error)
            }
        }
        fetchSubjects(grade) 
    },[])

  return (
    <div className='verticalNav'>
        <h1>SUBJECTS</h1>
        {
            subjects && subjects.length > 0 && subjects.map((subject) => (
                <div className="links">
                    <Link to='/' className='link'>{subject}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default DownloadsNav
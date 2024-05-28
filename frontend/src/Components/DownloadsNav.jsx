import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getSubjectNames } from '../Services/SyllabusServices'

const DownloadsNav = ({grade}) => {
    const navigater = useNavigate()
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        const fetchSubjects = async(grade) => {
            try{
                const response = await getSubjectNames(grade)
            console.log('res :', response.data)

                setSubjects(response.data)
            }
            catch(error){
                console.log('fetching error :', error)
            }
        }
        fetchSubjects(grade) 
    },[])
    
    const redirectPage = (grade, sub) => {
        console.log(sub)
        navigater(`/downloasview/${grade}/${sub}`)
    }

  return (
    <div className='verticalNav'>
        <h1>SUBJECTS</h1>
        {
            subjects && subjects.length > 0 && subjects.map((subject) => (
                <div className="links">
                    {/* <Link to={`/downloasview/${grade}/${subject}`} className='link'>{subject}</Link> */}
                    <Link onClick={() => redirectPage(grade, subject)} className='link'>{subject}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default DownloadsNav
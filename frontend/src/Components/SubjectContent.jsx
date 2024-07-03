import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContentsNames } from '../Services/SyllabusServices'
import ViewNotes from './ViewNotes'
import { syllabusPage } from './Styles/Index'

const SubjectContent = ({ grade, subject }) => {
    const [headings, setHeadings] = useState([])
    const [pdfShow, setPdfShow] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchHeadings = async () => {
            try{
                const response = await getContentsNames(grade, subject)
                console.log('res :', response.data)
                setHeadings(response.data)
            }
            catch(error){
                console.log('error occure :', error)
            }
        }

        fetchHeadings()
    }, [subject])

    const handleHeadingClick = (heading) => {
        navigate(`/viewnotes/${grade}/${subject}/${heading}`)
    }

    return (
        <div className='headings'>
            <h1 className='text-center m-4'>{subject} Content for Grade {grade}</h1>
            <div className='heading'> 
                {headings.length ? (
                    headings.map((heading, index) => (
                        <div key={index} onClick={() => handleHeadingClick(heading)}>
                            <h3>{heading}</h3>
                        </div>
                    ))
                ) : (
                    <p>No content available for this subject.</p>
                )}
            </div>
        </div>
    )
}

export default SubjectContent

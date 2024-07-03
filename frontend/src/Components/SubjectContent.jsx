import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContentsNames } from '../Services/SyllabusServices'
import ViewNotes from './ViewNotes'

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
        <div>
            <h2>{subject} Content for Grade {grade}</h2>
            <div>
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
            {/* {pdfShow &&
                <ViewNotes 
                    grade = {grade}
                    subject = {subject}
                    heading = {pdfShow}
                />
            } */}
        </div>
    )
}

export default SubjectContent

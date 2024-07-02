import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SubjectContent = ({ grade, subject }) => {
    const [headings, setHeadings] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch PDF headings for the selected subject and grade
        // For example purposes, using static data
        const fetchHeadings = () => {
            const data = {
                science: ['Part 1: Basics', 'Part 2: Advanced Topics'],
                math: ['Part 1: Algebra', 'Part 2: Geometry']
            }
            setHeadings(data[subject.toLowerCase()] || [])
        }

        fetchHeadings()
    }, [subject])

    const handleHeadingClick = (heading) => {
        // Redirect to the PDFContent component with the selected heading
        navigate(`/content/${subject}/${encodeURIComponent(heading)}`)
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
        </div>
    )
}

export default SubjectContent

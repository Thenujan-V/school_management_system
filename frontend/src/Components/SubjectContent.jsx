import React from 'react'

const SubjectContent = ({ grade, subject }) => {
    // Sample data to demonstrate the structure
    const contentData = {
        science: {
            part1: ['Question 1', 'Question 2', 'Question 3'],
            part2: ['Question 4', 'Question 5', 'Question 6']
        },
        math: {
            part1: ['Question 1', 'Question 2'],
            part2: ['Question 3', 'Question 4']
        }
    }

    const subjectContent = contentData[subject.toLowerCase()]

    return (
        <div>
            <h2>{subject} Content for Grade {grade}</h2>
            {subjectContent ? (
                Object.keys(subjectContent).map(part => (
                    <div key={part}>
                        <h3>{part}</h3>
                        <ul>
                            {subjectContent[part].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No content available for this subject.</p>
            )}
        </div>
    )
}

export default SubjectContent

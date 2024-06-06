import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { resultsForm } from '../Styles/Index';
import VerticalNavbar from './VerticalNavbar';

const ResultsForm = () => {
    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        // Fetch students and subjects
        fetch('/api/students')
            .then(response => response.json())
            .then(data => setStudents(data));

        fetch('/api/exams')
            .then(response => response.json())
            .then(data => setSubjects(data));
    }, []);

    const handleMarksChange = (studentId, subjectId, value) => {
        setMarks(prevMarks => {
            const updatedMarks = [...prevMarks];
            const markIndex = updatedMarks.findIndex(mark => mark.studentId === studentId && mark.subjectId === subjectId);
            if (markIndex > -1) {
                updatedMarks[markIndex].value = value;
            } else {
                updatedMarks.push({ studentId, subjectId, value });
            }
            return updatedMarks;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        fetch('/api/saveMarks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(marks)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div style={{display:'flex'}} className='registerStudent'>
            <div style={{flex:'1'}}>
                <VerticalNavbar />
            </div>
        <div className="results-form container mt-5">
            <h2>Add Students' Results</h2>
            <form onSubmit={handleSubmit}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Student Index No</th>
                            {subjects.map(subject => (
                                <th key={subject.subjectId}>{subject.subjectName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.studentId}>
                                <td>{student.indexNo}</td>
                                {subjects.map(subject => (
                                    <td key={subject.subjectId}>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={marks.find(mark => mark.studentId === student.studentId && mark.subjectId === subject.subjectId)?.value || ''}
                                            onChange={(e) => handleMarksChange(student.studentId, subject.subjectId, e.target.value)}
                                            required
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default ResultsForm;

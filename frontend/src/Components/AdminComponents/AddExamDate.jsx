import React, { useState, useEffect } from 'react';
import { addExamDate } from '../Styles/Index';

const AddExamDate = () => {
    const [grades, setGrades] = useState([]);
    const [terms, setTerms] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState('');
    const [selectedTerm, setSelectedTerm] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [examDetails, setExamDetails] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch grades and terms from the database
        // Replace with your actual API call
        setGrades(['Grade 1', 'Grade 2', 'Grade 3']);
        setTerms(['Term 1', 'Term 2', 'Term 3']);
    }, []);

    useEffect(() => {
        if (selectedGrade && selectedTerm) {
            // Fetch subjects based on selected grade and term from the database
            // Replace with your actual API call
            fetch(`/api/subjects?grade=${selectedGrade}&term=${selectedTerm}`)
                .then(response => response.json())
                .then(data => setSubjects(data))
                .catch(error => console.error('Error fetching subjects:', error));
        }
    }, [selectedGrade, selectedTerm]);

    useEffect(() => {
        // Initialize exam details when subjects change
        setExamDetails(subjects.map(subject => ({
            subjectId: subject.id,
            date: '',
            time: '',
            hall: ''
        })));
    }, [subjects]);

    const handleGradeChange = (e) => {
        setSelectedGrade(e.target.value);
        setSubjects([]);
        setExamDetails([]);
    };

    const handleTermChange = (e) => {
        setSelectedTerm(e.target.value);
        setSubjects([]);
        setExamDetails([]);
    };

    const handleExamDetailChange = (subjectId, field, value) => {
        const updatedExamDetails = examDetails.map(detail =>
            detail.subjectId === subjectId ? { ...detail, [field]: value } : detail
        );
        setExamDetails(updatedExamDetails);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form data
        for (const detail of examDetails) {
            if (!detail.date || !detail.time || !detail.hall) {
                setError('All fields are required');
                return;
            }
        }

        // Submit the form data to the backend
        fetch('/api/exam-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(examDetails)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Exam details saved:', data);
            setError(''); // Clear error message on successful submission
        })
        .catch(error => {
            console.error('Error saving exam details:', error);
            setError('Error saving exam details');
        });
    };

    return (
        <div className="container mt-4">
            <h2>Add Exam Date</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                    <select className="form-control" id="grade" value={selectedGrade} onChange={handleGradeChange} required>
                        <option value="">Select Grade</option>
                        {grades.map(grade => (
                            <option key={grade} value={grade}>{grade}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="term">Term</label>
                    <select className="form-control" id="term" value={selectedTerm} onChange={handleTermChange} required>
                        <option value="">Select Term</option>
                        {terms.map(term => (
                            <option key={term} value={term}>{term}</option>
                        ))}
                    </select>
                </div>
                {subjects.length > 0 && (
                    <div className="subject-list">
                        {subjects.map(subject => (
                            <div key={subject.id} className="form-group row">
                                <div className="col-4">
                                    <label>{subject.name}</label>
                                </div>
                                <div className="col-2">
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={examDetails.find(detail => detail.subjectId === subject.id)?.date || ''}
                                        onChange={(e) => handleExamDetailChange(subject.id, 'date', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="time"
                                        className="form-control"
                                        value={examDetails.find(detail => detail.subjectId === subject.id)?.time || ''}
                                        onChange={(e) => handleExamDetailChange(subject.id, 'time', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hall"
                                        value={examDetails.find(detail => detail.subjectId === subject.id)?.hall || ''}
                                        onChange={(e) => handleExamDetailChange(subject.id, 'hall', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Add Exam Dates</button>
            </form>
        </div>
    );
};

export default AddExamDate;

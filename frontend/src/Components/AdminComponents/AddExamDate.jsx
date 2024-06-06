import React, { useState, useEffect } from 'react';
import { addExamDate } from '../Styles/Index';
import VerticalNavbar from './VerticalNavbar';
import { getSubjects } from '../../Services/SubjectServices';
import { addExamTimeTable } from '../../Services/AdminServices';

const AddExamDate = () => {
    const [grades, setGrades] = useState([]);
    const [terms, setTerms] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState('');
    const [selectedTerm, setSelectedTerm] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [examDetails, setExamDetails] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setGrades(['6', '7', '8', '9', '10', '11']);
        setTerms(['1', '2', '3']);
    }, []);

    useEffect(() => {
        const fetchSubjects = async (selectedGrade, selectedTerm) => {
            if (selectedGrade && selectedTerm) {
                try{
                    const response = await getSubjects(selectedGrade, selectedTerm)
                    setSubjects(response.data)
                }
                catch(error){
                    console.log('subjects fetching error :', error)
                }
            }
        }
        fetchSubjects(selectedGrade, selectedTerm)
    }, [selectedGrade, selectedTerm]);
console.log('subjecys :', subjects)

    useEffect(() => {
        // Initialize exam details when subjects change
        setExamDetails(subjects.map(subject => ({
            subjectId: subject.subject_id,
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

    const convertTo24HourFormat = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
    
        if (hours === '12') {
            hours = '00';
        }
    
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
    
        return `${hours.toString().padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
    };
    

    const handleExamDetailChange = (subjectId, field, value) => {
        if (field === 'time') {
            value = convertTo24HourFormat(value);
        }

        const updatedExamDetails = examDetails.map(detail =>
            detail.subjectId === subjectId ? { ...detail, [field]: value } : detail
        );
        setExamDetails(updatedExamDetails);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form data
        for (const detail of examDetails) {
            if (!detail.date || !detail.time || !detail.hall) {
                setError('All fields are required');
                return;
            }
            else{
                try{
                    const examDatas = {
                        'subject_id' : detail.subjectId,
                        'exam_date' : detail.date,
                        'exam_hall'  : detail.hall,
                        'exam_time' : detail.time
                    }
                    const response = await addExamTimeTable(examDatas)
                    console.log('response :', response.data)
                }
                catch(error){
                    console.log('error occur :', error)
                }
            }
        }

        console.log('datas :', examDetails)
    };

    return (
        <div style={{display:'flex'}} className='examDate'>
            <div style={{flex:'1'}}>
                <VerticalNavbar />
            </div>
        <div className="container mt-4">
            <h2>Add Exam Date</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                    <select className="form-control" id="grade" value={selectedGrade} onChange={handleGradeChange} required>
                        <option value="">Select Grade</option>
                        {grades.map(grade => (
                            <option key={grade} value={grade}>Grade {grade}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="term">Term</label>
                    <select className="form-control" id="term" value={selectedTerm} onChange={handleTermChange} required>
                        <option value="">Select Term</option>
                        {terms.map(term => (
                            <option key={term} value={term}>Term {term}</option>
                        ))}
                    </select>
                </div>
                {subjects && subjects.length > 0 && (
                    <div className="subject-list">
                        {subjects && subjects.length > 0 && subjects.map(subject => (
                            <div key={subject.subject_id} className="form-group row">
                                <div className="col-3">
                                    <label>{subject.subject_name}</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={examDetails.find(detail => detail.subjectId === subject.subject_id)?.date || ''}
                                        onChange={(e) => handleExamDetailChange(subject.subject_id, 'date', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-3">
                                    <input
                                        type="time"
                                        className="form-control"
                                        value={examDetails.find(detail => detail.subjectId === subject.subject_id)?.time || ''}
                                        onChange={(e) => handleExamDetailChange(subject.subject_id, 'time', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hall"
                                        value={examDetails.find(detail => detail.subjectId === subject.subject_id)?.hall || ''}
                                        onChange={(e) => handleExamDetailChange(subject.subject_id, 'hall', e.target.value)}
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
        </div>
    );
};

export default AddExamDate;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { resultsForm } from '../Styles/Index';
import VerticalNavbar from './VerticalNavbar';
import { addResult, studentDetails } from '../../Services/AdminServices';
import { getExamTimeTable } from '../../Services/ExamServices';
import { toast } from 'react-toastify';

const ResultsForm = () => {
    const [grade, setGrade] = useState('');
    const [term, setTerm] = useState('');
    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [marks, setMarks] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const parseSubjectData = (data) => {
        const [subjectId, grade, term, subject, exam_id, date, time, hall] = data.split(',');

        return {
            subjectId,
            grade,
            term,
            subject,
            exam_id,
            date,
            time,
            hall
        };
    };

    const handleGradeTermSubmit = async(e) => {
        e.preventDefault();
        try {
            const studentsResponse = await studentDetails(grade);
            setStudents(studentsResponse.data);

            const subjectsResponse = await getExamTimeTable(grade, term);
            const parsedSubjects = subjectsResponse.data.map(parseSubjectData);
            setSubjects(parsedSubjects);

            setShowForm(true);
        } catch (error) {
            console.log('error occurred:', error);
        }
    };

    const handleMarksChange = (student_id, exam_id, value) => {
        setMarks(prevMarks => {
            const updatedMarks = [...prevMarks];
            const markIndex = updatedMarks.findIndex(mark => mark.student_id === student_id && mark.exam_id === exam_id);
            if (markIndex > -1) {
                updatedMarks[markIndex].marks = value;
            } else {
                updatedMarks.push({ student_id, exam_id, marks: value });
            }
            return updatedMarks;
        });
    };

    const handleClear = () => {
        setMarks([])
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('data:', marks);
        try {
            const promises = marks.map(mark => addResult(mark));
            await Promise.all(promises);
            toast.success('All marks submitted successfully');
            handleClear()

        } catch (error) {
            console.log('error occurred:', error);
        }
    };

    return (
        <div style={{ display: 'flex' }} className='registerStudent'>
            <div style={{ flex: '1' }}>
                <VerticalNavbar />
            </div>
            <div className="results-form container mt-5">
                {!showForm ? (
                     <form onSubmit={handleGradeTermSubmit}>
                     <div className="mb-3">
                         <label htmlFor="grade" className="form-label">Grade</label>
                         <select 
                             className="form-select" 
                             id="grade" 
                             value={grade} 
                             onChange={(e) => setGrade(e.target.value)} 
                             required 
                         >
                             <option value="">Select Grade</option>
                             <option value="6">Grade 6</option>
                             <option value="7">Grade 7</option>
                             <option value="8">Grade 8</option>
                             <option value="9">Grade 9</option>
                             <option value="10">Grade 10</option>
                             <option value="11">Grade 11</option>
                         </select>
                     </div>
                     <div className="mb-3">
                         <label htmlFor="term" className="form-label">Term</label>
                         <select 
                             className="form-select" 
                             id="term" 
                             value={term} 
                             onChange={(e) => setTerm(e.target.value)} 
                             required 
                         >
                             <option value="">Select Term</option>
                             <option value="1">Term 1</option>
                             <option value="2">Term 2</option>
                             <option value="3">Term 3</option>
                         </select>
                     </div>
                     <button type="submit" className="btn btn-primary">Next</button>
                 </form>
                ) : (
                    <>
                        <h2>Add Students' Results</h2>
                        <form onSubmit={handleSubmit}>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Student Index No</th>
                                        {subjects.map(subject => (
                                            <th key={subject.exam_id}>{subject.subject}
                                           </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map(student => (
                                        student.active === true && 
                                        <tr key={student.student_id}>
                                            <td>{student.index_number}</td>
                                            {subjects.map(subject => (
                                                <td key={subject.exam_id}>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        value={marks && marks.find(mark => mark.student_id === student.student_id && mark.exam_id === subject.exam_id)?.marks || ''}
                                                        onChange={(e) => handleMarksChange(student.student_id, subject.exam_id, e.target.value)}
                                                        
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResultsForm;

import React, { useState } from 'react';
import axios from 'axios';
import { allStudentsAllMarks, allStudentsDetails } from '../../Services/AdminServices';
import { getExamTimeTable } from '../../Services/ExamServices';
import VerticalNavbar from './VerticalNavbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ShowAllStudentsAllResults.scss';

const ShowAllStudentsAllResults = () => {
  const [grade, setGrade] = useState('');
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [subjects, setSubjects] = useState({});
  const [students, setStudents] = useState({});
  const [filteredStudents, setFilteredStudents] = useState({});

  const fetchMarks = async (grade, term) => {
    try {
      const response = await allStudentsDetails();
      const studentsData = response.data.reduce((acc, student) => {
        acc[student.student_id] = student;
        return acc;
      }, {});
      setStudents(studentsData);

      const filtered = Object.values(studentsData).reduce((acc, student) => {
        if (student.grade === parseInt(grade, 10)) {
          acc[student.student_id] = student;
        }
        return acc;
      }, {});
      
      setFilteredStudents(filtered);

      const examsResponse = await getExamTimeTable(grade, term);
      const subjectsData = examsResponse.data.reduce((acc, exam) => {
        const [examId, grade, term, subjectName, subjectExamId, examDate, examTime, examHall] = exam.split(',');
        acc[subjectExamId] = { 
          examId, 
          grade, 
          term, 
          subjectName, 
          subjectExamId, 
          examDate, 
          examTime, 
          examHall 
        };
        return acc;
      }, {});
      setSubjects(subjectsData);

      const marksResponse = await allStudentsAllMarks(grade, term); 
      setResults(marksResponse.data);
    } catch (error) {
      console.log('error occurred:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMarks(grade, term);
  };

  const organizedResults = results.reduce((acc, curr) => {
    if (!acc[curr.student_id]) {
      acc[curr.student_id] = {};
    }
    acc[curr.student_id][curr.exam_id] = curr.marks;
    return acc;
  }, {});

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <VerticalNavbar />
      </div>
      <div className="container p-4">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label className="form-label">
              Grade:
              <select
                className="form-control"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                <option value="">Select Grade</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
              </select>
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Term:
              <select
                className="form-control"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              >
                <option value="">Select Term</option>
                <option value="1">First Term</option>
                <option value="2">Second Term</option>
                <option value="3">Third Term</option>
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Fetch Results</button>
        </form>
        <h2>Results</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Index No</th>
              {Object.values(subjects).map((subject, index) => (
                <th key={index}>{subject.subjectName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(filteredStudents).map((studentId) => (
              students[studentId].active === true &&
              <tr key={studentId}>
                <td>{students[studentId].index_number}</td>
                {Object.keys(subjects).map((examId) => (
                  <td key={examId}>
                    {organizedResults[studentId]?.[examId] || 'N/A'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllStudentsAllResults;

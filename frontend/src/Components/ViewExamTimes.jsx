import React, { useEffect, useState } from 'react';
import { getExamTimeTable } from '../Services/ExamServices';
import { viewExamTimes } from './Styles/Index';


const ViewExamTimes = ({ grade }) => {
  const [timeTable, setTimeTable] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchTimes = async (grade) => {
      try {
        const response = await getExamTimeTable(grade);
        console.log('response :', response.data);

        // Parse the response data into an array of objects
        const parsedData = response.data.map((item) => {
          const [grade, term, subject, date, time, hall] = item.split(',');
          return { term, subject, date, time, hall };
        });

        // Set the timetable and term (assuming term is the same for all entries)
        setTimeTable(parsedData);
        if (parsedData.length > 0) {
          setTerm(parsedData[0].term);
        }
      } catch (error) {
        console.log('error occur: ', error);
      }
    };
    fetchTimes(grade);
  }, [grade]);

  // Helper function to convert term number to term string
  const getTermString = (term) => {
    switch (term) {
      case '1':
        return '1st Term';
      case '2':
        return '2nd Term';
      case '3':
        return '3rd Term';
      default:
        return '';
    }
  };

  return (
    <div className="exam-timetable-container">
      <h1>Exam Time Table for Grade {grade} - {getTermString(term)}</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Hall</th>
          </tr>
        </thead>
        <tbody>
          {timeTable.map((exam, index) => (
            <tr key={index}>
              <td>{exam.subject}</td>
              <td>{new Date(exam.date).toLocaleDateString()}</td>
              <td>{exam.time}</td>
              <td>{exam.hall}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewExamTimes;

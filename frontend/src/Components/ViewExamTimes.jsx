import React, { useEffect, useState } from 'react';
import { getExamTimeTable } from '../Services/ExamServices';
import { viewExamTimes } from './Styles/Index';


const ViewExamTimes = ({ grade, Term }) => {
  const [timeTable, setTimeTable] = useState([]);
  const [term, setTerm] = useState('');
  console.log('term :', Term)

  useEffect(() => {
    const fetchTimes = async (grade, Term) => {
      try {
        const response = await getExamTimeTable(grade, Term);
        console.log('response :', response.data);

        const parsedData = response.data.map((item) => {

          const [examId, grade, term, subject, subjectId, date, time, hall] = item.split(',');
          return {examId, grade, term, subject, date, time, hall };
        });

        setTimeTable(parsedData);
        if (parsedData.length > 0) {
          setTerm(parsedData[0].term);
        }
      } catch (error) {
        console.log('error occur: ', error);
      }
    };
    fetchTimes(grade, Term);
  }, [grade, Term ]);

  const getTermString = (term) => {
    {console.log('ter :',term)}

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
      <h1>Exam Time Table for Grade {grade} - {getTermString(Term)}</h1>
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

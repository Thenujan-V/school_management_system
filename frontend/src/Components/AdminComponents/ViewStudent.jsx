import React, { useEffect, useState } from 'react';
import VerticalNavbar from './VerticalNavbar';
import { allStudentsDetails, getStudents } from '../../Services/AdminServices'; // Adjust the import path according to your project structure
import { Link } from 'react-router-dom';

const ViewStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data when the component mounts
    const fetchStudents = async () => {
      try {
        const response = await allStudentsDetails(); // Implement getStudents function in your AdminServices
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);
console.log('stu :', students)
  return (
    <div style={{ display: 'flex' }} className='viewStudent'>
      <div style={{ flex: '1' }}>
        <VerticalNavbar />
      </div>
      <div className="container mt-4">
        <h1 className='text-center mb-5'>View Students Details</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Index Number</th>
              <th>Date of Birth</th>
              <th>First Phone Number</th>
              <th>Second Phone Number</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.index_number}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.index_number}</td>
                <td>{student.date_of_birth}</td>
                <td>{student.first_phone_number}</td>
                <td>{student.second_phone_number}</td>
                <td>{student.grade}</td>
                <td>
                  <Link to={`/viewStudent/${student.index_number}/results`} className="btn btn-primary">
                    View Results
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudent;

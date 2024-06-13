import React, { useEffect, useState } from 'react';
import VerticalNavbar from './VerticalNavbar';
import { allStudentsDetails, deleteStudents } from '../../Services/AdminServices'; // Adjust the import path according to your project structure
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const ViewStudent = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.index_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async(indexNo) => {
    try{
      const response = await deleteStudents(indexNo)
      if(response.data === 'deleted'){
        toast.success('deleted student')
      } 
    }
    catch(error){
      console.log('error :', error)
    }
  }

  return (
    <div style={{ display: 'flex' }} className='viewStudent'>
      <div style={{ flex: '1' }}>
        <VerticalNavbar />
      </div>
      <div className="container mt-4">
        <h1 className='text-center mb-5'>View Students Details</h1>
            
            <div className="input-group mb-3" style={{width:'25vw'}}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by index number or first name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
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
                <td>
                  {student.active === true ? <button onClick={() => handleDelete(student.index_number)} className="btn btn-danger">
                    Delete
                  </button> : <p style={{color:'red'}}>Deleted</p>}
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

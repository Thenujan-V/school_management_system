import React, { useEffect, useState } from 'react';
import { studentDetails, studentDetailsIndexNo } from '../Services/AdminServices';
import { useNavigate } from 'react-router-dom';
import { decodeToken, getToken, logout } from '../Services/TokenServices';



const UserProfile = () => {
    const navigate = useNavigate()

    const token = getToken()
    const decodedToken = decodeToken(token)

    const [role, setRole] = useState('')
    const [indexNo, setIndexNo] = useState('')
    const [details, setDetails] = useState('')

    useEffect(() => {
        if(decodedToken){
            const userRole = decodedToken.role
            const indexNumber = decodedToken.indexNo
            setRole(userRole)
            setIndexNo(indexNumber)
        }
    }, [decodedToken])
    
    useEffect(() => {
        const fetchDetails = async(indexNo) => {
            try{
                const response = await studentDetailsIndexNo(indexNo)
                setDetails(response.data)
            }
            catch(error){
                console.log('error :', error)
            }
        }
        fetchDetails(indexNo)
    }, [indexNo])

    console.log('ddd :', details)

  const handleLogout = () => {
    logout()
    window.location.reload()
  };

  return (
    <div className='profile'>
        <div className="user-profile mt-5 p-4 border rounded ">
        {details && <div className='profileContainer'>
            <div className="d-flex align-items-center mb-4">
                <div className="profile-pic bg-primary text-white d-flex justify-content-center align-items-center me-3">
                {details && details.first_name.charAt(0).toUpperCase()}
                </div>
                <h1 className="mb-0">{`${details.first_name} ${details.last_name}`}</h1>
            </div>
            <div className="details mb-4">
                <ul className="list-unstyled">
                    <li><strong>Index Number:</strong> {details.index_number}</li>
                    <li><strong>Grade:</strong> {details.grade}</li>
                    <li><strong>Date of Birth:</strong> {details.date_of_birth}</li>
                </ul>
            </div>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
        </div>}
        </div>
    </div>
  );
};

export default UserProfile;

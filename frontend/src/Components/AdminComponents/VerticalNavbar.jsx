import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { verticalNavbar } from '../Styles/Index';
import { decodeToken, getToken, logout } from '../../Services/TokenServices';

const VerticalNavbar = () => {

    const navigate = useNavigate()

    const token = getToken()
    const decodedToken = decodeToken(token)

    const [role, setRole] = useState('')
    useEffect(() => {
        if(decodedToken){
            const userRole = decodedToken.role
            setRole(userRole)

            if(userRole === 'user'){
                navigate("/")
            }
        }
        else{
            navigate("/")
        }
    }, [decodedToken])

    
    useEffect(() => {
        const pageAuthorization = (role) => {
            if(role === 'user'){
                navigate("/")
            }
            
        }
        pageAuthorization(role)
    }, [role])

    const handleLogout = async() => {
        try{
           logout()
        }
        catch(error){
            console.log('error :', error)
        }
    }
    return (
        <div className="d-flex" style={{minHeight:'100%'}}>
            <nav className="navbar verticalNavbar navbar-expand-lg flex-column align-items-start p-3">
                <h1 className="navbar-brand">Admin Panel</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-column">
                        { role && role === 'admin' && <li className="nav-item">
                            <Link className="nav-link" to="/register-students">Register Students</Link>
                        </li>}
                        {role && role === 'admin' && <li className="nav-item">
                            <Link className="nav-link" to="/viewStudent">View Students</Link>
                        </li>}
                        {role && role === 'admin' && <li className="nav-item">
                            <Link className="nav-link" to="/exam-calendar">Exam Calendar</Link>
                        </li>}
                        {role && role === 'admin' && <li className="nav-item">
                            <Link className="nav-link" to="/exam-marks">Exam Marks Issue</Link>
                        </li>}
                        {role && (role === 'teacher' || role === 'admin') && <li className="nav-item">
                            <Link className="nav-link" to="/showallstudentsallresults">Show Marks</Link>
                        </li>}
                        {role && role === 'admin' && <li className="nav-item">
                            <Link className="nav-link" to="/syllabus-add">Syllabus & Past Papers</Link>
                        </li>}
                        {role && role === 'admin' && <li className="nav-item">
                            <Link className="nav-link" to="/addprincipal">Add Principal</Link>
                        </li>}
                        <li className="nav-item">
                            <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="content p-3">
                {/* This is where the details content will be shown */}
            </div>
        </div>
    );
};

export default VerticalNavbar;

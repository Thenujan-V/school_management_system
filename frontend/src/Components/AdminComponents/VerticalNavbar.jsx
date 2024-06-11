import React from 'react';
import { Link } from 'react-router-dom';
import { verticalNavbar } from '../Styles/Index';

const VerticalNavbar = () => {
    return (
        <div className="d-flex">
            <nav className="navbar verticalNavbar navbar-expand-lg flex-column align-items-start p-3">
                <Link className="navbar-brand" to="/">Admin Panel</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register-students">Register Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/viewStudent">View Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exam-calendar">Exam Calendar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exam-marks">Exam Marks</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/principal-details">Principal Details</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/syllabus-add">Syllabus & Past Papers</Link>
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

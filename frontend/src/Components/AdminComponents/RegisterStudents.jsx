import React, { useState } from 'react';
import { registerStudents } from '../Styles/Index';
import VerticalNavbar from './VerticalNavbar';

const RegisterStudents = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        studentNo: '',
        phone1: '',
        phone2: '',
        dob: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        console.log('Form data submitted:', formData);
        setError(''); 
    };

    return (
        <div style={{display:'flex'}} className='registerStudent'>
            <div style={{flex:'1'}}>
                <VerticalNavbar />
            </div>
            <div className="container mt-4">
            <h2>Register Students</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="studentNo">Student No</label>
                    <input
                        type="text"
                        className="form-control"
                        id="studentNo"
                        name="studentNo"
                        value={formData.studentNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone1">First Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone1"
                        name="phone1"
                        value={formData.phone1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone2">Second Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone2"
                        name="phone2"
                        value={formData.phone2}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
        </div>
    );
};

export default RegisterStudents;

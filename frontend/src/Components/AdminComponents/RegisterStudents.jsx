import React, { useState } from 'react';
import { registerStudents } from '../Styles/Index';
import VerticalNavbar from './VerticalNavbar';
import { studentsSignup } from '../../Services/AdminServices';
import { toast } from 'react-toastify';

const RegisterStudents = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        studentNo: '',
        phone1: '',
        phone2: '',
        dob: '',
        password: '',
        confirmPassword: '',
        grade: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClear = () => {
        setFormData({
            firstName: '',
            lastName: '',
            studentNo: '',
            phone1: '',
            phone2: '',
            dob: '',
            password: '',
            confirmPassword: '',
            grade: ''
        });
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};
        
        // Check for empty fields
        for (const key in formData) {
            if (!formData[key]) {
                validationErrors[key] = 'This field is empty';
            }
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        // Check password length
        if (formData.password.length < 8) {
            validationErrors.password = 'Password must be at least 8 characters long';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const data = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                index_number: formData.studentNo,
                date_of_birth: formData.dob,
                first_phone_number: formData.phone1,
                second_phone_number: formData.phone2,
                grade: formData.grade,
                password: formData.password
            };
            await studentsSignup(data);
            console.log('successfully added');
            toast.success('successfully added')
            handleClear();

        } 
        catch (error) {
            console.log('error :', error);
            toast.error('added faild')

        }
    };

    return (
        <div style={{display:'flex'}} className='registerStudent'>
            <div style={{flex:'1'}}>
                <VerticalNavbar />
            </div>
            <div className="container mt-4">
            <h2>Register Students</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.firstName}</div>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.lastName}</div>}
                    </div>
                </div>
                <div className=" row">
                    <div className="form-group col-md-6" style={{width:'15vw'}}>
                        <label htmlFor="studentNo">Student No</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentNo"
                            name="studentNo"
                            value={formData.studentNo}
                            onChange={handleChange}
                        />
                        {errors.studentNo && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.studentNo}</div>}
                    </div>
                    <div className="form-group col-md-6" style={{width:'15vw'}}>
                        <label htmlFor="grade">Grade</label>
                        <input
                            type="text"
                            className="form-control"
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                        />
                        {errors.grade && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.grade}</div>}
                    </div>
                    <div className="form-group col-md-6" style={{width:'15vw'}}>
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        {errors.dob && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.dob}</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6" style={{width:'22.5vw'}}>
                        <label htmlFor="phone1">First Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone1"
                            name="phone1"
                            value={formData.phone1}
                            onChange={handleChange}
                        />
                        {errors.phone1 && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.phone1}</div>}
                    </div>
                    <div className="form-group col-md-6" style={{width:'22.5vw'}}>
                        <label htmlFor="phone2">Second Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone2"
                            name="phone2"
                            value={formData.phone2}
                            onChange={handleChange}
                        />
                        {errors.phone2 && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.phone2}</div>}
                    </div>
                    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.password}</div>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <div className="error" style={{color:'red', textAlign:'end'}}>{errors.confirmPassword}</div>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
    );
};

export default RegisterStudents;

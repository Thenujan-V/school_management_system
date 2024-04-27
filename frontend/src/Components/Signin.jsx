import React, { useState } from 'react'
import { signin } from './Styles/Index';
import axios from 'axios'    


const Signin = () => {
    const [formData, setFormData] = useState({
        index_number: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate form data
    const validate = () => {
        const newErrors = {};
        
        if (!formData.index_number) {
            newErrors.index_number = 'Index number is required';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validate()) {
            console.log('in:', formData.index_number);
            console.log('pw:', formData.password);
            

            const response = await axios.post('http://localhost:8080/api/v1/student/signin', formData)
            console.log('response : ',response.data)
        }
    };
  return (
    <div className="signin-form-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                
                {/* Index number input */}
                <div className="form-group">
                    <label htmlFor="index_number">Index Number:</label>
                    <input
                        type="text"
                        id="index_number"
                        name="index_number"
                        value={formData.index_number}
                        onChange={handleChange}
                        className={errors.index_number ? 'error' : ''}
                    />
                    {errors.index_number && <span className="error-text">{errors.index_number}</span>}
                </div>
                
                {/* Password input */}
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-text">{errors.password}</span>}
                </div>
                
                {/* Forgot password link */}
                <a href="#" className="forgot-password-link">Forgot Password?</a>
                
                {/* Login button */}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
  )
}

export default Signin
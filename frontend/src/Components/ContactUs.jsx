import React, { useState } from 'react'
import { contact } from './Styles/Index';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, like sending data to an API
        console.log(formData);
      };

      
  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-6 contact-info">
          <h2>Common calls</h2>
          <p>+49(30)22488168</p>
          <p>+49(30)22488168</p>

          <h2>Head office</h2>
          <p>+49(30)22488168</p>
          <a href="mailto:politicwave@gmail.com">politicwave@gmail.com</a>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>GET IN TOUCH</h2>

            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Enter your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Title Field */}
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder="Enter Title"
                required
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                placeholder="Enter Your Message"
                required
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default ContactUs
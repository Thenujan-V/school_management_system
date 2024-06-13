import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VerticalNavbar from './VerticalNavbar';
import { addEventDetails } from '../../Services/AdminServices';
import { toast } from 'react-toastify';

const AdminEventForm = () => {
  const [formData, setFormData] = useState({
    event_name: '',
    description: '',
    event_date: '',
    category: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('event_name', formData.event_name);
    data.append('description', formData.description);
    data.append('event_date', formData.event_date);
    data.append('category', formData.category);
    data.append('photo', formData.photo);

    try {
      const response = await addEventDetails(data)
      console.log(response.data);
      toast.success('successfully added event details')
        window.location.reload()
    } catch (error) {
      console.error('There was an error adding the event!', error);
    }
  };

  return (
    <div style={{display:'flex'}} className='registerStudent'>
            <div style={{flex:'1'}}>
                <VerticalNavbar />
            </div>
        <div className="container mt-5">
            <h2>Add New Event</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                <label htmlFor="event_name" className="form-label">Event Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="event_name"
                    name="event_name"
                    value={formData.event_name}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
                </div>
                <div className="mb-3">
                <label htmlFor="event_date" className="form-label">Event Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="event_date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="sports">Sports</option>
                    <option value="academic">Academic</option>
                    <option value="achievements">Achievements</option>
                    <option value="festival">Festival</option>
                    <option value="celebrations">Celebrations</option>
                    <option value="sportsmeet">Sports Meet</option>
                </select>
                </div>
                <div className="mb-3">
                <label htmlFor="photo" className="form-label">Photo</label>
                <input
                    type="file"
                    className="form-control"
                    id="photo"
                    name="photo"
                    onChange={handleFileChange}
                    required
                />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>  
    </div>
  );
};

export default AdminEventForm;

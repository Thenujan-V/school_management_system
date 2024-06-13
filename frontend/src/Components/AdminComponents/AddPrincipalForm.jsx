import React, { useState } from 'react';
import axios from 'axios';
import VerticalNavbar from './VerticalNavbar';
import { addPrincipalsDetails } from '../../Services/AdminServices';
import { toast } from 'react-toastify';

const AddPrincipalForm = () => {
  const [formData, setFormData] = useState({
    p_name: '',
    details: '',
    starting_year: '',
    ending_year: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.photo);
    
    const formPayload = new FormData();
    formPayload.append('p_name', formData.p_name);
    formPayload.append('details', formData.details);
    formPayload.append('starting_year', formData.starting_year);
    formPayload.append('ending_year', formData.ending_year);
    formPayload.append('photo', formData.photo);

    try {
      const response = await addPrincipalsDetails(formPayload)
      console.log(response.data);
      toast.success('successfully added principal details')
      window.location.reload()
    } catch (error) {
      console.error('There was an error uploading the form!', error);
    }
  }

  return (
    <div style={{ display: 'flex' }}>
        <div style={{ flex: '1'}}>
            <VerticalNavbar />
        </div>
        <div className='container'>
        <h2>Add Principal</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="p_name" className="form-label">Principal Name</label>
            <input
                type="text"
                className="form-control"
                id="p_name"
                name="p_name"
                value={formData.p_name}
                onChange={handleChange}
                required
            />
            </div>
            <div className="mb-3">
            <label htmlFor="details" className="form-label">Details</label>
            <textarea
                className="form-control"
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
            ></textarea>
            </div>
            <div className="mb-3">
            <label htmlFor="starting_year" className="form-label">Starting Year</label>
            <input
                type="number"
                className="form-control"
                id="starting_year"
                name="starting_year"
                value={formData.starting_year}
                onChange={handleChange}
                required
            />
            </div>
            <div className="mb-3">
            <label htmlFor="ending_year" className="form-label">Ending Year</label>
            <input
                type="number"
                className="form-control"
                id="ending_year"
                name="ending_year"
                value={formData.ending_year}
                onChange={handleChange}
                required
            />
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
            <button type="submit" className="btn btn-primary">Add Principal</button>
        </form>
        </div>
    </div>
  );
};

export default AddPrincipalForm;

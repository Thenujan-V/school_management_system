import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { syllabusForm } from '../Styles/Index';
import VerticalNavbar from './VerticalNavbar';
import { addSyllabus } from '../../Services/AdminServices';
import { toast } from 'react-toastify';

const SyllabusForm = () => {
    const [formData, setFormData] = useState({
        subjectName: '',
        grade: '',
        syllabus: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };
    
    const handleClear = () => {
        setFormData({
            subjectName : '',
            grade: '',
            syllabus: null
         })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('subject_name', formData.subjectName);
        data.append('grade', formData.grade);
        data.append('syllabus_pdf', formData.syllabus);

        try{
            const response = await addSyllabus(data)
            console.log('successfully added')
            toast.success('successfully added')
            handleClear()
        }
        catch(error){
            console.log('error occur:',error )
        }
    };

    return (
        <div style={{display:'flex'}} className='registerStudent'>
            <div style={{flex:'1'}}>
                <VerticalNavbar />
            </div>
            <div className="syllabus-form container mt-5">
                <h2>Add Syllabus</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="subjectName">Subject Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subjectName"
                            name="subjectName"
                            value={formData.subjectName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grade">Grade</label>
                        <input
                            type="text"
                            className="form-control"
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="syllabus">Syllabus PDF</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="syllabus"
                            name="syllabus"
                            accept=".pdf"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SyllabusForm;

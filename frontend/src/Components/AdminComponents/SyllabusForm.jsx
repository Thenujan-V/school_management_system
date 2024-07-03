import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { syllabusForm } from '../Styles/Index';
import VerticalNavbar from './VerticalNavbar';
import { addSyllabus } from '../../Services/AdminServices';
import { toast } from 'react-toastify';
import { getSubjectNames } from '../../Services/SyllabusServices';

const SyllabusForm = () => {
    const [formData, setFormData] = useState({
        subjectName: '',
        grade: '',
        content:'',
        syllabus: null
    });

    const [subjects, setSubjects] = useState([]);
    
    useEffect(() => {
        const fetchSubjects = async(formData) => {
            try{
                const response = await getSubjectNames(formData.grade)
                setSubjects(response.data)
            }
            catch(error){
                console.log('error :', error)
            }
        }
        fetchSubjects(formData)
    }, [formData.grade])


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };
    
    const handleClear = () => {
        setFormData({
            subjectName: '',
            grade: '',
            content:'',
            syllabus: null
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('subject_name', formData.subjectName);
        data.append('grade', formData.grade);
        data.append('syllabus_pdf', formData.syllabus);
        data.append('subject_contents', formData.content);

        try {
            const response = await addSyllabus(data);
            toast.success('successfully added');
            handleClear();
        } catch (error) {
            console.log('error occur:', error);
        }
    };

    return (
        <div style={{ display: 'flex' }} className='registerStudent'>
            <div style={{ flex: '1' }}>
                <VerticalNavbar />
            </div>
            <div className="syllabus-form container mt-5">
                <h2>Add Syllabus</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="grade">Grade</label>
                        <select
                            className="form-control"
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Grade</option>
                            <option value="6">Grade 6</option>
                            <option value="7">Grade 7</option>
                            <option value="8">Grade 8</option>
                            <option value="9">Grade 9</option>
                            <option value="10">Grade 10</option>
                            <option value="11">Grade 11</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subjectName">Subject Name</label>
                        <select
                            className="form-control"
                            id="subjectName"
                            name="subjectName"
                            value={formData.subjectName}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Subject</option>
                            {subjects.map((subject, index) => (
                                <option key={index} value={subject}>{subject}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                            <input
                                type="text"
                                className="form-control-file"
                                id="content"
                                name="content"
                                onChange={handleChange}
                                required
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="syllabus">Content PDF</label>
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

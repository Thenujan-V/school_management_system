import React, { useEffect, useState } from 'react';
import { getSubjectNotes } from '../Services/SyllabusServices';
import { useParams } from 'react-router-dom';

const ViewNotes = () => {
    const params = useParams()
    console.log('pa :',params.grade)
    const [grade, setGrade] = useState('')
    const [subject, setSubject] = useState('')
    const [heading, setHeading] = useState('')
    const [pdfUrl, setPdfUrl] = useState('');

    useState(() => {
        const setFields = (params) => {
            try{
                setGrade(params.grade)
                setSubject(params.subject)
                setHeading(params.heading)
            }
            catch(error){
                console.log('error occured :', error)
            }
        }
        setFields(params)
    },[params])

    useEffect(() => {
        const fetchNotes = async (grade, subject, heading) => {
            console.log('hed ',heading, grade, subject )
            try {
                const response = await getSubjectNotes(grade, subject, heading)
                console.log('API full response:', response)

                if (response.headers['content-type'] === 'application/pdf') {
                    const blob = new Blob([response.data], { type: 'application/pdf' });
                    const url = URL.createObjectURL(blob);
                    setPdfUrl(url);
                } else {
                    console.error('Unexpected content type:', response.headers['content-type']);
                }
            } catch (error) {
                console.log('notes fetching error:', error);
            }
        };

        fetchNotes(grade, subject, heading);
    }, [heading]);
console.log('pfdurl :', pdfUrl)
    return (
        <div>
            {pdfUrl ? (
                <>
                    <iframe src={pdfUrl} width="1536px" height="770px" />
                </>
            ) : (
                <p>Loading PDF...</p>
            )}
        </div>
    );
};

export default ViewNotes;

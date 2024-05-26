import React, { useEffect, useState } from 'react';
import { getSubjectNotes } from '../Services/SyllabusServices';


const ViewNotes = ({ grade, subject }) => {
    const [subjectNotesData, setSubjectNotesData] = useState(null);
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await getSubjectNotes(grade, subject, {
                    headers: {
                        'Accept': 'application/pdf',
                    },
                    responseType: 'blob',
                }) ;
                const blob = new Blob([response.data], { type: 'application/pdf' })
                console.log(typeof(blob))
                // setSubjectNotesData(response.data);
                const url = URL.createObjectURL(blob);
                setPdfUrl(url)
            } 
            catch (error) {
                console.log('notes fetching error:', error);
            }
        };
        fetchNotes();
    }, [grade, subject]);
console.log('pdf :', pdfUrl)
    return (
        <div>
            {pdfUrl ? (
                <iframe src={pdfUrl} width="1220px" height="690vh"></iframe>
            ) : (
                <p>Loading PDF...</p>
            )}
            
        </div>
    )
}

export default ViewNotes

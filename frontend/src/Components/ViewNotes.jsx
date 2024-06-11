import React, { useEffect, useState } from 'react';
import { getSubjectNotes } from '../Services/SyllabusServices';

const ViewNotes = ({ grade, subject }) => {
console.log('ooooo :', subject)

    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        const fetchNotes = async (grade, subject) => {
            console.log('subject :', subject)
            try {
                const response = await getSubjectNotes(grade, subject);

                console.log('API full response:', response);

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

        fetchNotes(grade, subject);
    }, [grade, subject]);
console.log('pfdurl :', pdfUrl)
    return (
        <div>
            {pdfUrl ? (
                <>
                    <iframe src={pdfUrl} width="1220px" height="690px" />
                </>
            ) : (
                <p>Loading PDF...</p>
            )}
        </div>
    );
};

export default ViewNotes;

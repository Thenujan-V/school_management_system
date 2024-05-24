import React, { useEffect, useState } from 'react'
import { getSubjectNotes } from '../Services/SyllabusServices'
import { Link } from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf';

// Set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const ViewNotes = ({grade, subject}) => {
    const [subjectNotes, setSubjectNotes] = useState([])

    useEffect(() => {
        const fetchNotes = async(grade, subject) => {
            try{
                const response = await getSubjectNotes(grade, subject)
                setSubjectNotes(response.data)
            }
            catch(error){
                console.log('notes fetching error :', error)
            }
        }
        fetchNotes(grade, subject)
    },[grade,subject])
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        if (subjectNotes) {
            const pdfBlob = new Blob([subjectNotes], { type: 'application/pdf' });
            const reader = new FileReader();

            reader.onloadend = () => {
                const buffer = reader.result;
                setNumPages(buffer ? 1 : null);
            };

            reader.readAsArrayBuffer(pdfBlob);
        }
    }, [subjectNotes]);

// console.log("maths :",subjectNotes)
  return (
    <div>
            {numPages && (
                <Document
                    file={{ data: subjectNotes }}
                    onLoadError={(error) => console.error('PDF load error:', error)}
                >
                    <Page pageNumber={1} />
                </Document>
            )}
            {!numPages && <p>Error: Failed to load PDF data</p>}
        </div>
  )

}

export default ViewNotes
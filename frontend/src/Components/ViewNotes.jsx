// import React, { useEffect, useState } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { getSubjectNotes } from '../Services/SyllabusServices';

// const base64ToUint8Array = (base64) => {
//     const binaryString = window.atob(base64);
//     const len = binaryString.length;
//     const bytes = new Uint8Array(len);
//     for (let i = 0; i < len; i++) {
//         bytes[i] = binaryString.charCodeAt(i);
//     }
//     return bytes;
// };

// const ViewNotes = ({ grade, subject }) => {
//     const [subjectNotes, setSubjectNotes] = useState(null);

//     useEffect(() => {
//         const fetchNotes = async () => {
//             try {
//                 const response = await getSubjectNotes(grade, subject);
//                 const pdfData = base64ToUint8Array(response.data); // Assuming response.data is base64-encoded
//                 setSubjectNotes(pdfData);
//             } catch (error) {
//                 console.log('notes fetching error:', error);
//             }
//         };
//         fetchNotes();
//     }, [grade, subject]);

//     return (
//         <div>
//             <h1>GRADE {grade} {subject}</h1>
//             {subjectNotes ? (
//                 <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
//                     <Viewer fileUrl={{ data: subjectNotes }} />
//                 </Worker>
//             ) : (
//                 <p>Loading PDF...</p>
//             )}
//         </div>
//     );
// };

// export default ViewNotes;

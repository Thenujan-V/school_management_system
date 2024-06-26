import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResults } from '../../Services/ExamServices';
import VerticalNavbar from './VerticalNavbar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const StudentResults = () => {
  const { index_number } = useParams();
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchStudentResults = async () => {
    if (term === '') {
      return;
    }

    setLoading(true);

    try {
      const response = await fetchResults(index_number, term); // Implement getStudentResults function in your AdminServices
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching student results:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (term) {
        fetchStudentResults();
    }
  }, [index_number, term]);

  const marksRef = useRef();

  const generatePDF = async () => {
    const canvas = await html2canvas(marksRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('marksheet.pdf');
  }

  return (
    <div style={{display:'flex'}}>
        <div style={{flex:'1'}}>
            <VerticalNavbar />
        </div>
        <div className="container mt-4">
            <h1 className='text-center'>Results for Student {index_number}</h1>
            <div className="form-group">
                <label htmlFor="term">Select Term</label>
                <select
                id="term"
                className="form-control"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                >
                <option value="">Select Term</option>
                <option value="1">First Term</option>
                <option value="2">Second Term</option>
                <option value="3">Third Term</option>
                </select>
            </div>
            <button className="btn btn-primary mt-2" onClick={fetchStudentResults} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Results'}
            </button>
            {results.length > 0 && (
                <div>
                  <div ref={marksRef} style={{ padding: '10px', backgroundColor: 'white' }}>
                    <h5 className='text-center'>Student Index Number : {index_number}</h5>
                    <h5 className='text-center'>Term : {term === '1' ? '1st term': term === '2' ? '2nd term': term === '3' ? '3rd term':''}</h5>
                    <table className="table mt-4" >
                      <thead>
                          <tr>
                          <th>Subject</th>
                          <th>Grade</th>
                          <th>Term</th>
                          </tr>
                      </thead>
                      <tbody>
                          {results.map((result, index) => (
                          <tr key={index}>
                              {console.log('res :', result)}
                              <td>{result[0]}</td>
                              <td>{result[1]}</td>
                              <td>{term}</td>
                          </tr> 
                          ))}
                      </tbody>
                    </table>
                  </div>  
                    <button className='btn btn-warning m-2' onClick={generatePDF}>Download PDF</button>
                    <button className='btn btn-primary m-2' onClick={() => window.print()}>Print</button>
                </div>

            )}
            {results.length === 0 && !loading && (
                <p className="mt-4">No results found for the selected term.</p>
            )}
        </div>  
    </div>
  );
};

export default StudentResults;

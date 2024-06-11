import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResults } from '../../Services/ExamServices';
import VerticalNavbar from './VerticalNavbar';

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
                <table className="table mt-4">
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
            )}
            {results.length === 0 && !loading && (
                <p className="mt-4">No results found for the selected term.</p>
            )}
        </div>  
    </div>
  );
};

export default StudentResults;

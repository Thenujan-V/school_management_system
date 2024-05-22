import React, { useState } from 'react';
import { syllabusPage } from './Styles/Index';

const SyllabusPage = () => {
  const [activeSection, setActiveSection] = useState('Upper School');

  const upperSchoolStreams = {
    'Science stream': ['Biology', 'Chemistry', 'Physics', 'General English', 'GIT'],
    'Art stream': ['Tamil Language', 'Economics', 'Logic and the scientific method', 'Geography', 'History', 'Political science', 'Agriculture'],
    'Commerce stream': ['Economics', 'Business Statistics', 'Business Studies', 'Accounting'],
    'Physical Science Stream': ['Compained Maths', 'Physics', 'Chemistry', 'GIT']
  };

  const lowerSchoolSubjects = {
    'Grades 6 to 9': ['Tamil', 'English', 'Maths', 'Science', 'History', 'Religion', 'Civilization', 'Geography'],
    'Grades 10 and 11': [
      'Tamil', 'Religion', 'History', 'Maths', 'Science', 'English',
      { 
        name: 'Choice Subjects (Basket 1)', 
        subjects: ['Commerce', 'Geography', 'Civilization']
      },
      {
        name: 'Choice Subjects (Basket 2)', 
        subjects: ['Art', 'Drama', 'Music','Dance', 'Tamil Literature', 'English Literature']
      },
      {
        name: 'Choice Subjects (Basket 3)', 
        subjects: ['ICT', 'Health']
      }
    ]
  };

  const renderSubjects = (subjects) => {
    if (Array.isArray(subjects)) {
      return (
        <table className="table table-bordered">
          <tbody>
            <tr>
              {subjects.map((subject, idx) => (
                <td key={idx} className="p-3">{subject}</td>
              ))}
            </tr>
          </tbody>
        </table>
      );
    } else if (subjects.subjects) {
      return (
        <>
          <h3 className="stream-header bg-warning text-white p-2">{subjects.name}</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                {subjects.subjects.map((subject, idx) => (
                  <td key={idx} className="p-3">{subject}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </>
      );
    } else {
      return null; // Handle any other cases here if necessary
    }
  };
  

  return (
    <div className="container syllabus-page">
      <div className="row">
        <div className="col-md-3">
          <nav className="nav flex-column bg-dark text-white p-3">
            <h3>Syllabus</h3>
            <a 
              className={`nav-link ${activeSection === 'Upper School' ? 'active' : ''}`} 
              href="#" 
              onClick={() => setActiveSection('Upper School')}
            >
              Upper School
            </a>
            <a 
              className={`nav-link ${activeSection === 'Lower School' ? 'active' : ''}`} 
              href="#" 
              onClick={() => setActiveSection('Lower School')}
            >
              Lower School
            </a>
          </nav>
        </div>
        <div className="col-md-9">
          {activeSection === 'Upper School' && (
            <>
              <h2 className="page-header">UPPER SCHOOL</h2>
              <p>We carry out academic activities in our school up to Year 13 ensuring continuous education from Year 13 onwards.</p>
              <ul className="list-unstyled">
                <li><span className="dot"></span>Mathematics</li>
                <li><span className="dot"></span>Science</li>
                <li><span className="dot"></span>Commerce</li>
                <li><span className="dot"></span>Arts</li>
                <li><span className="dot"></span>13 Years Education</li>
              </ul>
              {Object.keys(upperSchoolStreams).map((stream, index) => (
                <div key={index} className="stream">
                  <h3 className="stream-header bg-warning text-white p-2">{stream}</h3>
                  {renderSubjects(upperSchoolStreams[stream])}
                </div>
              ))}
            </>
          )}

          {activeSection === 'Lower School' && (
            <>
              <h2 className="page-header">LOWER SCHOOL</h2>
              <p>We carry out academic activities in our school from Grades 6 to 11 ensuring continuous education from Grade 6 onwards.</p>
              {Object.keys(lowerSchoolSubjects).map((grade, index) => (
                <div key={index} className="stream">
                  <h3 className="stream-header bg-warning text-white p-2">{grade}</h3>
                  {lowerSchoolSubjects[grade].map((subjects, idx) => (
                    <div key={idx}>
                      {renderSubjects(subjects)}
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;

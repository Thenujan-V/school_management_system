import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { downloads } from '../Components/Styles/Index';
import { Link } from 'react-router-dom';

const Downloads = () => {
    const [subject, setSubject] = useState('maths')
  return (
    <>
        <Navbar />
        <div className='container' id='downloads'>
            <h1>syllabus Meterials</h1>
            <div className='row grades'>
                <Link to={`/downloasview/6/${subject}`} className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 6</p>
                </Link>
                <Link  to='/downloasview/7' className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 7</p>
                </Link>
                <Link to='/downloasview/8'  className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 8</p>
                </Link>
                <Link to='/downloasview/9'  className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 9</p>
                </Link>
                <Link to='/downloasview/10'  className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 10</p>
                </Link>
                <Link to='/downloasview/11'  className='col-lg-3   grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 11</p>
                </Link>
            </div>

        </div>
    </>
  )
}

export default Downloads
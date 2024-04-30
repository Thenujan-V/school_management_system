import React from 'react'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { downloads } from '../Components/Styles/Index';
import { Link } from 'react-router-dom';

const Downloads = () => {
  return (
    <>
        <Navbar />
        <div className='container' id='downloads'>
            <h1>syllabus Meterials</h1>
            <div className='row grades'>
                <Link className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 6</p>
                </Link>
                <Link className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 7</p>
                </Link>
                <Link className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 8</p>
                </Link>
                <Link className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 9</p>
                </Link>
                <Link className='col-lg-3 grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 10</p>
                </Link>
                <Link className='col-lg-3   grade'>
                    <FontAwesomeIcon icon={faFileLines} id='FontAwesomeIcon'/>
                    <p>Grade 11</p>
                </Link>
            </div>

        </div>
    </>
  )
}

export default Downloads
import React from 'react'
import { Link } from 'react-router-dom'

function ExamTimeVerticalNav({grade}) {
  return (
    <div className='verticalNav'>
        <div>
            <h1>GRADES</h1>
            <div className="links">
                <Link to='/examtimetable/6/1' className='link'>Grade 6</Link>
            </div>
            <div className="links">
                <Link to='/examtimetable/7/1' className='link'>Grade 7</Link>
            </div>
            <div className="links">
                <Link to='/examtimetable/8/1' className='link'>Grade 8</Link>
            </div>
            <div className="links">
                <Link to='/examtimetable/9/1' className='link'>Grade 9</Link>
            </div>
            <div className="links">
                <Link to='/examtimetable/10/1' className='link'>Grade 10</Link>
            </div>
            <div className="links">
                <Link to='/examtimetable/11/1' className='link'>Grade 11</Link>
            </div>
        </div>
        <div className='m-5'>
            <h1>TERM</h1>
            <div className="links">
                <Link to={`/examtimetable/${grade}/1`} className='link'>1st Term</Link>
            </div>
            <div className="links">
                <Link to={`/examtimetable/${grade}/2`} className='link'>2nd Term</Link>
            </div>
            <div className="links">
                <Link to={`/examtimetable/${grade}/3`} className='link'>3rd Term</Link>
            </div>
        </div>
    </div>
  )
}

export default ExamTimeVerticalNav
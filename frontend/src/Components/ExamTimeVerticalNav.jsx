import React from 'react'
import { Link } from 'react-router-dom'

function ExamTimeVerticalNav() {
  return (
    <div className='verticalNav'>
        <h1>SUBJECTS</h1>
        <div className="links">
            <Link to='/examtimetable/6' className='link'>Grade 6</Link>
        </div>
        <div className="links">
            <Link to='/examtimetable/7' className='link'>Grade 7</Link>
        </div>
        <div className="links">
            <Link to='/examtimetable/8' className='link'>Grade 8</Link>
        </div>
        <div className="links">
            <Link to='/examtimetable/9' className='link'>Grade 9</Link>
        </div>
        <div className="links">
            <Link to='/examtimetable/10' className='link'>Grade 10</Link>
        </div>
        <div className="links">
            <Link to='/examtimetable/11' className='link'>Grade 11</Link>
        </div>
    </div>
  )
}

export default ExamTimeVerticalNav
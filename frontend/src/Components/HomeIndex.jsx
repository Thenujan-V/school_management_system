import React from 'react'
import { homeIndex } from './Styles/Index'
import { child, student, school } from './Assets/Index'
import { Link } from 'react-router-dom'
const HomeIndex = () => {
  return (
    <>
    <div id="carousel" classNameName="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={school} className="img-fluid d-block w-100" alt="..." />
            </div>
            <div className="carousel-item active">
            <img src={student} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src={child} className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    <div id='educates'>
        <div id='download'><Link id='link'>Downloads</Link></div>
        <div id='result'><Link id='link'>Exam Result 6-9</Link></div>
        <div id='exam'><Link id='link'>Exam Result 10-11</Link></div>
    </div>
    </>
  )
}

export default HomeIndex
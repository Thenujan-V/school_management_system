import React from 'react'
import { homeNews } from './Styles/Index'
import { child, student, school } from './Assets/Index'
import { Link } from 'react-router-dom'
import arrow_right_alt from '@mui/icons-material/ArrowRightAlt';


const HomeNews = () => {
  return (
    <>
        <h1 id='head'>News and Highlights</h1>
    <div id='homeNews'>
        <div className = "card">
            <img src={student} alt="" />
            <div className="card-content">
                <h3>2023 spetember 10th</h3>
            <h2>
                sportmeet
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse, libero sapiente consequuntur quaerat amet.
            </p>
            <Link href="#" className="btn">
                see more 
                <span className="material-symbols-outlined">
                <arrow_right_alt />
                </span>
            </Link>
            </div>
        </div>
        <div className = "card">
            <img src={student} alt="" />
            <div className="card-content">
            <h3>2023 spetember 10th</h3>

            <h2>
                sportmeet
            </h2>

            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam culpa accusamus! Veniam, enim autem?
            </p>
            <Link href="#" className="btn">
                see more 
                <span className="material-symbols-outlined">
                <arrow_right_alt />

                </span>
            </Link>
            </div>
        </div>
        <div className = "card">
            <img src={student} alt="" />
            <div className="card-content">
            <h3>2023 spetember 10th</h3>

            <h2>
                sportmeet
            </h2>
            <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas aperiam doloremque harum fugit vero reiciendis.            </p>
            <Link href="#" className="btn">
                see more 
                <span className="material-symbols-outlined">
                <arrow_right_alt />

                </span>
            </Link>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default HomeNews
import React from 'react'
import { principle } from './Assets/Index'
import { Link } from 'react-router-dom'

const HomeAbout = () => {
  return (
    <div>
        <div className=" home_about">
            <div className="row">
                <div className="col-lg-6 principle_photo">
                    <img src={principle} className='img-fluid' alt="principle_photo" />
                </div>
                <div className="col-lg-6 our_school">
                    <h2>WELCOME TO OUR SCHOOL </h2>
                    <p>Our school is located in Pottuvil, Ampara district in the Eastern Province. The academic activities of the college are carried out under secondary section. We have Bio Science, Physical science, Arts & Commerce streams. We also have a Vocational Education Division which was started under the 13 year Continuing Education Project. Our school is one of the first schools in the region to start this division</p>
                    <Link to='' className='btn'>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout
import React from 'react'
import { noticeBoard } from './Styles/Index'
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import BookIcon from '@mui/icons-material/MenuBook';
import Download from '@mui/icons-material/SystemUpdate';
import Guide from '@mui/icons-material/Note';
import { child, student, school } from './Assets/Index'


const NoticeBoard = () => {
  return (
    <div id='notice'>
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-4 edu_links">
                <h1>Educational links</h1>
                <div className="links">
                        <Button className='btn' variant='text' startIcon={<LanguageIcon />} >e-Thaksalawa</Button>
                        <Button className='btn' variant='text' startIcon={<BookIcon />} >text book download</Button>
                        <Button className='btn' variant='text' startIcon={<Guide />} >teachers guide</Button>
                        <Button className='btn' variant='text' startIcon={<Download />} >syllabus download </Button>
                        <Button className='btn' variant='text' startIcon={<LanguageIcon />} >ministry of education</Button>
                        <Button className='btn' variant='text' startIcon={<LanguageIcon />} >Examination</Button>            
                </div>
            </div>
            <div className="col-lg-8 notice_board">
                <h1>Notice board</h1>
                <div id="carousel" classNameName="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={school} className="img-fluid d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item ">
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
            </div>
            </div>
        </div>
    </div>
  )
}

export default NoticeBoard
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
            <Button className='btn' variant='text' startIcon={<LanguageIcon />}>
                <a href='https://www.e-thaksalawa.moe.gov.lk/Si/index.php' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    e-Thaksalawa
                </a>
            </Button>
            <Button className='btn' variant='text' startIcon={<BookIcon />}>
                <a href='http://www.edupub.gov.lk/BooksDownload.php' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Text Book Download
                </a>
            </Button>
            <Button className='btn' variant='text' startIcon={<Guide />}>
                <a href='https://nie.lk/selesyll' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Teachers Guide
                </a>
            </Button>
            <Button className='btn' variant='text' startIcon={<Download />}>
                <a href='http://moe.gov.lk/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Syllabus Download
                </a>
            </Button>
            <Button className='btn' variant='text' startIcon={<LanguageIcon />}>
                <a href='http://doenets.lk/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Ministry of Education
                </a>
            </Button>
            <Button className='btn' variant='text' startIcon={<LanguageIcon />}>
                <a href='https://dmb.moe.gov.lk/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Examination
                </a>
            </Button>
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
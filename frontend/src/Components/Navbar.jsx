import React from 'react'
import { navbar } from './Styles/Index'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid" id='navbar'>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">HOME</Link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ABOUT
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link class="dropdown-item" href="#">History</Link></li>
                    <li><Link class="dropdown-item" href="#">Rules&Regutations</Link></li>
                    <li><Link class="dropdown-item" href="#">Identity</Link></li>
                </ul>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    STAFFS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link class="dropdown-item" href="#">Principle</Link></li>
                    <li><Link class="dropdown-item" href="#">Deputy Principles</Link></li>
                    <li><Link class="dropdown-item" href="#">Teachers</Link></li>
                </ul>
                </li>
                <li class="nav-item">
                <Link class="nav-link" href="#">SYLLABUS</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" href="#">NEWS</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" href="#">CONTACT</Link>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { navbar } from './Styles/Index'
import { Link, useNavigate } from 'react-router-dom'
import { decodeToken, getToken } from '../Services/TokenServices'

const Navbar = () => {
    // const navigate = useNavigate()

    // const token = getToken()
    // const decodedToken = decodeToken(token)

    // const [role, setRole] = useState('')
    // useEffect(() => {
    //     if(decodedToken){
    //         const userRole = decodedToken.role
    //         setRole(userRole)
    //     }
    // }, [decodedToken])

    
    // useEffect(() => {
    //     const pageAuthorization = (role) => {
    //         if(role === 'user'){
    //             navigate("/")
    //         }
    //         else if(role === 'admin'){
    //             navigate("/adminpanel")
    //         }
    //         else if(role === 'teacher'){
    //             navigate("/")
    //         }
    //     }
    //     pageAuthorization(role)
    // }, [role])
    // console.log('ins :', decodedToken)

    // console.log('role :', role)
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
                <Link class="nav-link active" aria-current="page" to='/'>HOME</Link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ABOUT
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link class="dropdown-item" to="/abouthistorybody">History</Link></li>
                    <li><Link class="dropdown-item" to='/rules'>Rules&Regutations</Link></li>
                    <li><Link class="dropdown-item" href="#">Identity</Link></li>
                </ul>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    STAFFS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link class="dropdown-item" to='/principal'>Principle</Link></li>
                    <li><Link class="dropdown-item" to='/deputyprincipal'>Deputy Principles</Link></li>
                    <li><Link class="dropdown-item" to='/teacher'>Teachers</Link></li>
                </ul>
                </li>
                <li class="nav-item">
                <Link to='/syllabus' class="nav-link">SYLLABUS</Link>
                </li>
                <li class="nav-item">
                <Link to="/news" class="nav-link">NEWS</Link>
                </li>
                <li class="nav-item">
                <Link to='/contact' class="nav-link">CONTACT</Link>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
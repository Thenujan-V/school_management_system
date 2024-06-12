import React, { useEffect, useState } from 'react'
import { navbar } from './Styles/Index'
import { Link, useNavigate } from 'react-router-dom'
import { decodeToken, getToken } from '../Services/TokenServices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate()

    const token = getToken()
    const decodedToken = decodeToken(token)

    const [role, setRole] = useState('')
    const [indexNo, setIndexNo] = useState('')
    useEffect(() => {
        if(decodedToken){
            const userRole = decodedToken.role
            const indexNumber = decodedToken.indexNo
            setRole(userRole)
            setIndexNo(indexNumber)
        }
    }, [decodedToken])

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
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        STAFFS
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link class="dropdown-item" to='/principal'>Principle</Link></li>
                        <li><Link class="dropdown-item" to='/deputyprincipal'>Deputy Principles</Link></li>
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
                    {indexNo &&
                        <li class="nav-item userNavItem">
                            <Link to='/userprofile' class="nav-link"><FontAwesomeIcon icon={faUser} size='2x' /></Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
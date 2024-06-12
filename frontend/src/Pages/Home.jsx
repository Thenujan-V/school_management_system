import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import HomeIndex from '../Components/HomeIndex'
import HomeAbout from '../Components/HomeAbout'
import NoticeBoard from '../Components/NoticeBoard'
import HomeNews from '../Components/HomeNews'
import Map from '../Components/Map'
import Signin from '../Components/Signin'
import { useNavigate } from 'react-router-dom'
import { decodeToken, getToken } from '../Services/TokenServices'
import TopBar from '../Components/TopBar'

const Home = () => {
  const navigate = useNavigate()

    const token = getToken()
    const decodedToken = decodeToken(token)

    const [role, setRole] = useState('')
    useEffect(() => {
        if(decodedToken){
            const userRole = decodedToken.role
            setRole(userRole)
        }
    }, [decodedToken])

    
    useEffect(() => {
        const pageAuthorization = (role) => {
            if(role === 'user'){
                navigate("/")
            }
            else if(role === 'admin'){
                navigate("/adminpanel")
            }
            else if(role === 'teacher'){
                navigate("/adminpanel")
            }
        }
        pageAuthorization(role)
    }, [role])
  return (
    <>
        <TopBar />
        <Navbar />
        <HomeIndex />
        <HomeAbout />
        <NoticeBoard />
        <Signin />
        <HomeNews />
        <Map />
    </>
  )
}

export default Home
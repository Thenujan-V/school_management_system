import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import UserProfile from '../Components/UserProfile'
import { useNavigate } from 'react-router-dom'
import { decodeToken, getToken } from '../Services/TokenServices'

const User = () => {
    const navigate = useNavigate()

    const token = getToken()
    const decodedToken = decodeToken(token)

    const [role, setRole] = useState('')
    useEffect(() => {
        if(decodedToken){
            const userRole = decodedToken.role
            setRole(userRole)
        }
        else{
            navigate('/')
        }
    }, [decodedToken])

  return (
    <div>
        <Navbar />
        <UserProfile />
    </div>
  )
}

export default User
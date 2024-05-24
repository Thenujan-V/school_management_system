import React, { useEffect, useState } from 'react'
import AboutVerticalNav from './AboutVerticalNav'
import HistoryFrist from './HistoryFrist'
import Navbar from './Navbar'
import { bari } from './Assets/Index'
import { getPrincipalsDetails } from '../Services/PrincipalService'

const AboutPrincipals = () => {

    const [principals, setPrincipals] = useState([])
    useEffect(() => {
        const fetchPrincipalsDetails = async() => {
            try{
                const response = await getPrincipalsDetails()
                console.log('res :', response)
                setPrincipals(response.data)
            }
            catch(error){
                console.log('error occure when fetching principals details :', error)
            }
        }
        fetchPrincipalsDetails()
    }, [])
  return (
    <>
        <Navbar />
        <HistoryFrist />
        <div className='container-fluid' style={{display:'flex'}}>
            <AboutVerticalNav  />
            <div className="principals">
                {/* <div className='principle mt-5'>
                    <h1><span>2021-2022</span>  Mr.AL.Abdul Bary(SLPS)</h1>
                    <div className='details'>
                        <img className='img mb-5' src={bari} alt="schoolPic" height='212px'/>
                        <p>
                        He has been running our school for 2 years. He led the school to achieve many outstanding achievements in the field of educatucation during that period.
                        </p>
                    </div> */}

                    {
                        principals && principals.length > 0 && principals.map((principal) => (
                            <div className='principle mt-5'>
                                <h1><span>{principal.starting_year} - {principal.ending_year}</span> {principal.p_name}</h1>
                                <div className='details'>
                                    <img className='img mb-5' src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(principal.photo)))}`} alt="schoolPic" height='212px' />

                                    {/* <img className='img mb-5' src={URL.createObjectURL(principal.photo)} alt="schoolPic" height='212px'/> */}
                                    <p>{principal.details}</p>
                                </div>
                            </div>
                        ))
                    }
            </div>                                                                                                            
        </div>
    </>
  )
}

export default AboutPrincipals
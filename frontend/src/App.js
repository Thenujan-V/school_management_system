import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Downloads from './Pages/Downloads'
import Results from './Pages/Results'
import HistoryPage from './Pages/HistoryPage'
import AboutBody from './Components/AboutBody'
import AboutFounder from './Components/AboutFounder'
import AboutPrincipals from './Components/AboutPrincipals'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/downloads' element={<Downloads />}/>
        <Route path='/results' element={<Results />}/>
        {/* <Route path='/abouthistorybody' element={<HistoryPage />}/> */}
        <Route path='/abouthistorybody' element={<AboutBody />}/>
        <Route path='/aboutfounder' element={<AboutFounder />}/>
        <Route path='/aboutprincipals' element={<AboutPrincipals />}/>

        
      </Routes>
    </>
  )
}

export default App
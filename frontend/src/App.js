import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Downloads from './Pages/Downloads'
import Results from './Pages/Results'
import HistoryPage from './Pages/HistoryPage'
import AboutBody from './Components/AboutBody'
import AboutFounder from './Components/AboutFounder'
import AboutPrincipals from './Components/AboutPrincipals'
import Rules from './Pages/Rules'
import Principal from './Components/Principal'
import DeputyPrincipal from './Components/DeputyPrincipal'
import Teachers from './Components/Teachers'
import Contact from './Pages/Contact'
import { News } from './Pages/News'

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
        <Route path='/rules' element={<Rules />}/>
        <Route path='/principal' element={<Principal />}/>
        <Route path='/deputyprincipal' element={<DeputyPrincipal />}/>
        <Route path='/teachers' element={<Teachers />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/contact' element={<Contact />}/>

        
      </Routes>
    </>
  )
}

export default App
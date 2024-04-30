import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Downloads from './Pages/Downloads'
import Results from './Pages/Results'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/downloads' element={<Downloads />}/>
        <Route path='/results' element={<Results />}/>
      </Routes>
    </>
  )
}

export default App
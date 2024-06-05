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
import Syllabus from './Pages/Syllabus'
import DownloasView from './Pages/DownloasView'
import ExamTimeTable from './Pages/ExamTimeTable'
import DownloadsNav from './Components/DownloadsNav'
import VerticalNavbar from './Components/AdminComponents/VerticalNavbar'
import RegisterStudents from './Components/AdminComponents/RegisterStudents'
import AddExamDate from './Components/AdminComponents/AddExamDate'


const ExamMarks = () => <div>Exam Marks Page</div>;
const PrincipalDetails = () => <div>Principal Details Page</div>;
const SyllabusPastPapers = () => <div>Syllabus & Past Papers Page</div>;

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
        <Route path='/syllabus' element={<Syllabus />}/>
        {/* <Route path='/downloasview/:grade' element={<DownloadsNav />}/> */}
        <Route path='/downloasview/:grade/:subject' element={<DownloasView />}/>
        <Route path='/examtimetable/:grade/:term' element={<ExamTimeTable />}/>

        <Route path="/register-students" element={<RegisterStudents />} />
        <Route path="/exam-calendar" element={<AddExamDate />} />
        <Route path="/exam-marks" element={ExamMarks} />
        <Route path="/principal-details" element={PrincipalDetails} />
        <Route path="/syllabus-past-papers" element={SyllabusPastPapers} />
        <Route path="/adminpanel" element={<VerticalNavbar />} />

      </Routes>
    </>
  )
}

export default App
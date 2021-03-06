import { Component } from 'react';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path='/' element={<ListStudentComponent />} />
              <Route path='/student' element={<ListStudentComponent/>} />
              <Route path='/add-student' element={<CreateStudentComponent/>} />      
              <Route path='/update-student/:id' element={<UpdateStudentComponent/>} />        
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>

    </div>
  )
}

export default App;

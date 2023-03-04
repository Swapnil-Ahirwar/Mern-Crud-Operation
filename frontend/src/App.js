import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<CodeForInterview />} />
          <Route path='/all-users' element={<AllUser />} />
          <Route path='/add-user' element={<AddUser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

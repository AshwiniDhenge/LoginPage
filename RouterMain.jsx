import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import './style.css';

const RouterMain = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default RouterMain;

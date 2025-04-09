import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Diologs from './components/Diologs/Diologs';
import Friends from './components/Friends/Friends';
import Photos from './components/Photos/Photo';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (

    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/dialogs' Component={Diologs} />
            <Route path='/profile' Component={Profile} />
            <Route path='/friends' Component={Friends} />
            <Route path='/photos' Component={Photos} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Profile />
      </main>
    </div>
  );
};

export default App;

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <ProfileCard />
      </main>
    </div>
  );
};

export default App;

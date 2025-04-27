import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Photos from './components/Photos/Photo';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/profile' element={<Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
          <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path="/dialogs/:id" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path='/friends' element={<Friends state={props.state.sideBar} />} />
          <Route path='/photos' element={<Photos />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

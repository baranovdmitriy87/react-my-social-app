import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Photos from './components/Photos/Photo';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path="/dialogs">
            <Route index element={<DialogsContainer />} />
            <Route path=":id" element={<DialogsContainer />} />
          </Route>
          <Route path='/friends' element={<Friends store={props.store} />} />
          <Route path='/photos' element={<Photos />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Friends from './components/Friends/Friends';
import Photos from './components/Photos/Photo';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          {/* <Route path='/profile/' element={<ProfileContainer />} /> */}
          <Route path='/dialogs'>
            <Route index element={<DialogsContainer />} />
            <Route path=':id' element={<DialogsContainer />} />
          </Route>
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/friends' element={<Friends store={props.store} />} />
          <Route path='/photos' element={<Photos />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

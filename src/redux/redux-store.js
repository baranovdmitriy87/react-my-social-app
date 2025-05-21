import { createStore, combineReducers } from '@reduxjs/toolkit';
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  sideBar: sidebarReduser
})

let store = createStore(redusers);

export default store;

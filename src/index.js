import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/state';

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
          dispatch={store.dispatch.bind(store)}
          addMessage={store.addMessage.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


reportWebVitals();

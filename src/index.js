import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/todoApp/todo';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyRouter from './component/todoApp/route';
import MyCounter from './component/todoApp/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRouter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

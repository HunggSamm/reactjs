import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const HienNgay = () => {
  const date = new Date();
  let ngay = date.getDate();
  let thang = date.getMonth() + 1;
  let nam = date.getFullYear();
  return "Hôm nay là ngày " + ngay + " tháng " + thang + " năm " + nam;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HienNgay />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

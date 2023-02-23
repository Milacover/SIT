import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import MyForm from './component/Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MyForm/>
    <App />
  </React.StrictMode>
);


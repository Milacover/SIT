import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailedView from './views/DetailedView';
import SearchButton from './component/SearchButton';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
<SearchButton/>
    <DetailedView />
  </React.StrictMode>,
)
 


import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../views/Home';
import DetailedView from '../views/DetailedView';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/DetailedView' element={<DetailedView/>}></Route>
           
        </Routes>
    </BrowserRouter>
  )
}

export default Router
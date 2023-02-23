import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../views/Home';
import DetailedView from '../views/DetailedView';

import FormAds from '../views/FormAds';


import Form from '../views/Form';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/DetailedView' element={<DetailedView/>}></Route>

            <Route path='/formAds' element={<FormAds/>}></Route>

            <Route path='/Form' element={<Form />}></Route>
           

        </Routes>
    </BrowserRouter>
  )
}

export default Router
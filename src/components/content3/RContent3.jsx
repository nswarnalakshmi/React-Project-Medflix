import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Content3 from './Content3';

const RContent3 = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Content3/>}/>
    </Routes>
  )
}

export default RContent3
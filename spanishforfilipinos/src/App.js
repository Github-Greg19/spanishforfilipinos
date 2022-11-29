import './App.css';
import React from 'react';
import {Header} from './pages/Header.js';
import { Route, Routes } from "react-router-dom"
import {Home} from './pages/Home'
import {Videos} from './pages/Videos'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      
    </>
  );
}

export default App;

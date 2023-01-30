import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/index.css"

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

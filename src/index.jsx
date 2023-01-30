import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/index.css"

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Header from './components/Header';
import Footer from './components/Footer';

import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>

  </Provider>
);

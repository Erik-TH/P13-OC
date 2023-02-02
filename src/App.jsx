import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./styles/index.css"

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {

    return (
        <Router>
            <Header />
            <Routes>
                {/* Public Routes */}
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Routes */}
                <Route path="/profile" element={<Profile />} />
                
            </Routes>
            <Footer />
        </Router>
    )
}
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./styles/index.css"

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Header from './components/Header';
import Footer from './components/Footer';

import RequireAuth from "./features/auth/RequireAuth";

export default function App() {

    return (
        <Router>
            <Header />
            <Routes>
                {/* Public Routes */}
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Routes */}
                <Route path='/profile' element={<RequireAuth />}>
                    <Route path='/profile' element={<Profile />} />
                </Route>
                
            </Routes>
            <Footer />
        </Router>
    )
}
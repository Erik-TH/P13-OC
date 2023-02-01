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
        <>
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </Router>
        </div>
        </>
    )
}
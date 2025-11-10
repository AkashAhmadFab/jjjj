import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import Login from './pages/Login'
import './App.css'

function App() {
 return (
 <Router>
 <div className="min-h-screen bg-gray-50">
 <Routes>
 <Route path="/login" element={<Login />} />
 <Route path="/" element={
 <>
 <Navigation />
 <HeroSection />
 <TestimonialsSection />
 <PricingSection />
 <Footer />
 </>
 } />
 </Routes>
 </div>
 </Router>
 )
}

export default App
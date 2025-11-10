import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, X, Home, Info, Mail, User, LogIn } from 'lucide-react'

/**
 * Modern Navigation Component
 * Features: Responsive design, smooth animations, backdrop blur
 */
const Navigation = () => {
 const [isOpen, setIsOpen] = useState(false)
 const [scrolled, setScrolled] = useState(false)
 const navigate = useNavigate()

 const navItems = [
 { icon: Home, label: 'Home', href: '#home', active: true },
 { icon: Info, label: 'About', href: '#about' },
 { icon: User, label: 'Services', href: '#services' },
 { icon: Mail, label: 'Contact', href: '#contact' }
 ]

 useEffect(() => {
 const handleScroll = () => {
 setScrolled(window.scrollY > 50)
 }
 
 window.addEventListener('scroll', handleScroll)
 return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 const handleNavClick = (href) => {
 setIsOpen(false)
 
 // Smooth scroll behavior
 if (href.startsWith('#')) {
 const element = document.querySelector(href)
 if (element) {
 element.scrollIntoView({ behavior: 'smooth' })
 } else {
 // If section doesn't exist, scroll to top for demo
 window.scrollTo({ top: 0, behavior: 'smooth' })
 }
 }
 }

 const handleLoginClick = () => {
 navigate('/login')
 setIsOpen(false)
 }

 return (
 <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
 scrolled 
 ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
 : 'bg-transparent'
 }`}>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16">
 {/* Logo */}
 <div className="flex-shrink-0">
 <button 
 onClick={() => handleNavClick('#home')}
 className={`text-2xl font-bold transition-colors duration-300 ${
 scrolled ? 'text-gray-800' : 'text-white'
 }`}
 >
 Modern<span className="text-purple-600">Hero</span>
 </button>
 </div>

 {/* Desktop Navigation */}
 <div className="hidden md:block">
 <div className="ml-10 flex items-baseline space-x-8">
 {navItems.map((item) => {
 const IconComponent = item.icon
 return (
 <button
 key={item.label}
 onClick={() => handleNavClick(item.href)}
 className={`group inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
 scrolled
 ? item.active
 ? 'text-purple-600 bg-purple-100'
 : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
 : item.active
 ? 'text-white bg-white/20'
 : 'text-white/90 hover:text-white hover:bg-white/10'
 }`}
 >
 <IconComponent className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
 {item.label}
 </button>
 )
 })}
 </div>
 </div>

 {/* CTA Buttons */}
 <div className="hidden md:flex items-center space-x-4">
 <button
 onClick={handleLoginClick}
 className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
 scrolled
 ? 'text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:ring-gray-500'
 : 'text-white/90 hover:text-white hover:bg-white/10 focus:ring-white'
 }`}
 >
 <LogIn className="w-4 h-4 mr-2" />
 Login
 </button>
 <button
 onClick={() => handleNavClick('#contact')}
 className={`inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
 scrolled
 ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 shadow-lg hover:shadow-xl'
 : 'text-purple-600 bg-white hover:bg-gray-50 focus:ring-white shadow-lg hover:shadow-xl'
 }`}
 >
 Get Started
 </button>
 </div>

 {/* Mobile menu button */}
 <div className="md:hidden">
 <button
 onClick={() => setIsOpen(!isOpen)}
 className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset ${
 scrolled
 ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500'
 : 'text-white hover:text-white hover:bg-white/10 focus:ring-white'
 }`}
 >
 {isOpen ? (
 <X className="block h-6 w-6" />
 ) : (
 <Menu className="block h-6 w-6" />
 )}
 </button>
 </div>
 </div>
 </div>

 {/* Mobile Navigation Menu */}
 {isOpen && (
 <div className="md:hidden">
 <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-300 ${
 scrolled 
 ? 'bg-white/95 backdrop-blur-md border-t border-gray-200/20' 
 : 'bg-black/50 backdrop-blur-md'
 }`}>
 {navItems.map((item) => {
 const IconComponent = item.icon
 return (
 <button
 key={item.label}
 onClick={() => handleNavClick(item.href)}
 className={`group flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
 scrolled
 ? item.active
 ? 'text-purple-600 bg-purple-100'
 : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
 : item.active
 ? 'text-white bg-white/20'
 : 'text-white/90 hover:text-white hover:bg-white/10'
 }`}
 >
 <IconComponent className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
 {item.label}
 </button>
 )
 })}
 
 <button
 onClick={handleLoginClick}
 className={`group flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
 scrolled
 ? 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
 : 'text-white/90 hover:text-white hover:bg-white/10'
 }`}
 >
 <LogIn className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
 Login
 </button>
 
 <button
 onClick={() => handleNavClick('#contact')}
 className={`w-full flex justify-center items-center px-3 py-2 mt-4 border border-transparent text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
 scrolled
 ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
 : 'text-purple-600 bg-white hover:bg-gray-50 focus:ring-white'
 }`}
 >
 Get Started
 </button>
 </div>
 </div>
 )}
 </nav>
 )
}

export default Navigation
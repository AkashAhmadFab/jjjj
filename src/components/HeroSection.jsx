import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react'
import HeroImage from './HeroImage'
import FloatingElements from './FloatingElements'

/**
 * Modern Hero Section Component
 * Features: Dynamic headlines, interactive CTA buttons, animated elements
 */
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentHeadline, setCurrentHeadline] = useState(0)

  const headlines = [
    "Transform Your Digital Presence",
    "Build Amazing Web Experiences",
    "Create Something Extraordinary"
  ]

  const stats = [
    { icon: Users, label: "Happy Clients", value: "10K+" },
    { icon: Star, label: "5-Star Reviews", value: "4.9" },
    { icon: Award, label: "Awards Won", value: "25+" }
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Dynamic headline rotation
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleGetStarted = () => {
    // Simulate CTA action with smooth scroll to content
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
    
    // Show success feedback
    const button = document.getElementById('cta-button')
    if (button) {
      button.textContent = 'Welcome aboard! 🚀'
      setTimeout(() => {
        button.innerHTML = 'Get Started <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>'
      }, 2000)
    }
  }

  const handleWatchDemo = () => {
    // Simulate demo modal or video player
    alert('🎥 Demo video would open here! This is a fully functional hero section.')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Floating background elements */}
      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className={`text-center lg:text-left space-y-8 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0'
          }`}>
            {/* Dynamic Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                <Star className="w-4 h-4 mr-2 text-yellow-300" />
                New: Advanced Features Available
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow">
                {headlines[currentHeadline]}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Today
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Join thousands of innovators who are building the future with our cutting-edge platform. 
              Experience seamless design, powerful functionality, and unmatched performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                id="cta-button"
                onClick={handleGetStarted}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:glow-effect transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleWatchDemo}
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="flex items-center space-x-2 text-white/90">
                    <IconComponent className="w-5 h-5 text-yellow-300" />
                    <span className="font-bold text-lg">{stat.value}</span>
                    <span className="text-sm">{stat.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Hero Image Section */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <HeroImage />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
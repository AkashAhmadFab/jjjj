import React from 'react'
import { Code, Zap, Shield, Rocket } from 'lucide-react'

/**
 * Floating Background Elements Component
 * Adds visual interest with animated floating icons and shapes
 */
const FloatingElements = () => {
  const floatingItems = [
    {
      icon: Code,
      className: "absolute top-20 left-10 text-white/20 w-8 h-8 animate-float",
      delay: "0s"
    },
    {
      icon: Zap,
      className: "absolute top-40 right-20 text-white/20 w-6 h-6 animate-float",
      delay: "1s"
    },
    {
      icon: Shield,
      className: "absolute bottom-40 left-20 text-white/20 w-7 h-7 animate-float",
      delay: "2s"
    },
    {
      icon: Rocket,
      className: "absolute bottom-20 right-10 text-white/20 w-8 h-8 animate-float",
      delay: "0.5s"
    }
  ]

  const geometricShapes = [
    {
      shape: "circle",
      className: "absolute top-32 right-32 w-12 h-12 bg-white/10 rounded-full animate-pulse",
      delay: "0s"
    },
    {
      shape: "square",
      className: "absolute bottom-32 left-32 w-8 h-8 bg-white/10 rounded-lg rotate-45 animate-spin",
      delay: "3s",
      duration: "8s"
    },
    {
      shape: "triangle",
      className: "absolute top-1/2 left-8 w-0 h-0 border-l-6 border-r-6 border-b-8 border-transparent border-b-white/10 animate-bounce",
      delay: "1.5s"
    }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      {floatingItems.map((item, index) => {
        const IconComponent = item.icon
        return (
          <IconComponent
            key={`icon-${index}`}
            className={item.className}
            style={{
              animationDelay: item.delay,
              animationDuration: '3s'
            }}
          />
        )
      })}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={shape.className}
          style={{
            animationDelay: shape.delay,
            animationDuration: shape.duration || '2s'
          }}
        ></div>
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        
        {/* Diagonal lines */}
        <line
          x1="0" y1="20%" x2="30%" y2="0"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="70%" y1="100%" x2="100%" y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </svg>
      
      {/* Particle Effects */}
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}

export default FloatingElements
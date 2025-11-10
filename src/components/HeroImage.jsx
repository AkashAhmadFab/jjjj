import React, { useState } from 'react'
import { Monitor, Smartphone, Tablet } from 'lucide-react'

/**
 * Interactive Hero Image Component
 * Features: Device mockups, hover effects, responsive design
 */
const HeroImage = () => {
  const [activeDevice, setActiveDevice] = useState('desktop')

  const devices = [
    { id: 'desktop', icon: Monitor, label: 'Desktop' },
    { id: 'tablet', icon: Tablet, label: 'Tablet' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile' }
  ]

  return (
    <div className="relative">
      {/* Device Selector */}
      <div className="flex justify-center mb-6 space-x-2">
        {devices.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveDevice(id)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              activeDevice === id
                ? 'bg-white/20 text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
            }`}
            title={label}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Main Hero Image Container */}
      <div className="relative group">
        {/* Desktop View */}
        {activeDevice === 'desktop' && (
          <div className="animate-float transform transition-all duration-500">
            <div className="bg-gray-800 rounded-t-xl p-2 shadow-2xl">
              <div className="flex space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 h-64 rounded-lg p-6relative overflow-hidden">
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 space-y-2">
                    <div className="h-3 bg-white/40 rounded w-full"></div>
                    <div className="h-3 bg-white/40 rounded w-3/4"></div>
                    <div className="h-3 bg-white/40 rounded w-1/2"></div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                    <div className="w-12 h-8 bg-white/30 rounded"></div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        )}

        {/* Tablet View */}
        {activeDevice === 'tablet' && (
          <div className="animate-float transform transition-all duration-500">
            <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl mx-auto max-w-sm">
              <div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 h-80 rounded-xl p-6 relative overflow-hidden">
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 h-16"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 h-32"></div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 h-32"></div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 h-20"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile View */}
        {activeDevice === 'mobile' && (
          <div className="animate-float transform transition-all duration-500">
            <div className="bg-gray-800 rounded-3xl p-3 shadow-2xl mx-auto max-w-xs">
              <div className="bg-gradient-to-br from-pink-400 via-red-500 to-yellow-500 h-96 rounded-2xl p-4 relative overflow-hidden">
                <div className="space-y-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 h-12"></div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 h-24"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 h-16"></div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 h-16"></div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 h-20"></div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 h-16"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Feature highlights around the image */}
      <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
        ✨ New
      </div>
      
      <div className="absolute -bottom-4 -left-4 bg-green-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
        🚀 Fast
      </div>
    </div>
  )
}

export default HeroImage
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import LoginForm from '../components/LoginForm'

const Login = () => {
 return (
 <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
 {/* Back to home button */}
 <div className="absolute top-6 left-6">
 <Link 
 to="/" 
 className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200"
 >
 <ArrowLeft className="w-4 h-4 mr-2" />
 Back to Home
 </Link>
 </div>

 <div className="sm:mx-auto sm:w-full sm:max-w-md">
 {/* Logo */}
 <div className="text-center">
 <h1 className="text-3xl font-bold text-gray-900 mb-2">
 Modern<span className="text-purple-600">Hero</span>
 </h1>
 <h2 className="text-2xl font-semibold text-gray-800 mb-2">
 Welcome back
 </h2>
 <p className="text-gray-600">
 Sign in to your account to continue
 </p>
 </div>
 </div>

 <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
 <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
 <LoginForm />
 
 {/* Footer */}
 <div className="mt-6">
 <div className="relative">
 <div className="absolute inset-0 flex items-center">
 <div className="w-full border-t border-gray-200" />
 </div>
 <div className="relative flex justify-center text-sm">
 <span className="px-2 bg-white text-gray-500">New to ModernHero?</span>
 </div>
 </div>
 
 <div className="mt-6 text-center">
 <Link 
 to="/" 
 className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200"
 >
 Create an account
 </Link>
 </div>
 </div>
 </div>
 </div>
 
 {/* Background decoration */}
 <div className="absolute inset-0 -z-10 overflow-hidden">
 <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
 <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
 <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
 </div>
 </div>
 )
}

export default Login
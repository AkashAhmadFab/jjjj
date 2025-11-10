import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react'

const LoginForm = () => {
 const [formData, setFormData] = useState({
 email: '',
 password: ''
 })
 const [errors, setErrors] = useState({})
 const [showPassword, setShowPassword] = useState(false)
 const [isLoading, setIsLoading] = useState(false)
 const navigate = useNavigate()

 const validateForm = () => {
 const newErrors = {}
 
 // Email validation
 if (!formData.email) {
 newErrors.email = 'Email is required'
 } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
 newErrors.email = 'Please enter a valid email address'
 }
 
 // Password validation
 if (!formData.password) {
 newErrors.password = 'Password is required'
 } else if (formData.password.length < 6) {
 newErrors.password = 'Password must be at least 6 characters'
 }
 
 setErrors(newErrors)
 return Object.keys(newErrors).length === 0
 }

 const handleSubmit = async (e) => {
 e.preventDefault()
 
 if (!validateForm()) return
 
 setIsLoading(true)
 
 try {
 // Simulate API call
 await new Promise(resolve => setTimeout(resolve, 1500))
 
 // For demo purposes, accept any valid email/password combination
 console.log('Login successful:', formData)
 
 // Navigate back to home page
 navigate('/')
 } catch (error) {
 setErrors({ general: 'Login failed. Please try again.' })
 } finally {
 setIsLoading(false)
 }
 }

 const handleChange = (e) => {
 const { name, value } = e.target
 setFormData(prev => ({
 ...prev,
 [name]: value
 }))
 
 // Clear error when user starts typing
 if (errors[name]) {
 setErrors(prev => ({
 ...prev,
 [name]: ''
 }))
 }
 }

 return (
 <form onSubmit={handleSubmit} className="space-y-6">
 {/* General Error */}
 {errors.general && (
 <div className="rounded-lg bg-red-50 border border-red-200 p-4">
 <div className="flex items-center">
 <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
 <p className="text-sm text-red-800">{errors.general}</p>
 </div>
 </div>
 )}

 {/* Email Field */}
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
 Email address
 </label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 <Mail className="h-5 w-5 text-gray-400" />
 </div>
 <input
 id="email"
 name="email"
 type="email"
 autoComplete="email"
 value={formData.email}
 onChange={handleChange}
 className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
 errors.email
 ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
 : 'border-gray-300 focus:border-purple-500 focus:ring-purple-500'
 }`}
 placeholder="Enter your email"
 />
 </div>
 {errors.email && (
 <p className="mt-2 text-sm text-red-600">{errors.email}</p>
 )}
 </div>

 {/* Password Field */}
 <div>
 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
 Password
 </label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 <Lock className="h-5 w-5 text-gray-400" />
 </div>
 <input
 id="password"
 name="password"
 type={showPassword ? 'text' : 'password'}
 autoComplete="current-password"
 value={formData.password}
 onChange={handleChange}
 className={`block w-full pl-10 pr-12 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
 errors.password
 ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
 : 'border-gray-300 focus:border-purple-500 focus:ring-purple-500'
 }`}
 placeholder="Enter your password"
 />
 <button
 type="button"
 onClick={() => setShowPassword(!showPassword)}
 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
 >
 {showPassword ? (
 <EyeOff className="h-5 w-5" />
 ) : (
 <Eye className="h-5 w-5" />
 )}
 </button>
 </div>
 {errors.password && (
 <p className="mt-2 text-sm text-red-600">{errors.password}</p>
 )}
 </div>

 {/* Remember me & Forgot password */}
 <div className="flex items-center justify-between">
 <div className="flex items-center">
 <input
 id="remember-me"
 name="remember-me"
 type="checkbox"
 className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-colors"
 />
 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
 Remember me
 </label>
 </div>

 <div className="text-sm">
 <a
 href="#"
 className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200"
 >
 Forgot your password?
 </a>
 </div>
 </div>

 {/* Submit Button */}
 <div>
 <button
 type="submit"
 disabled={isLoading}
 className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
 isLoading
 ? 'bg-purple-400 cursor-not-allowed'
 : 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg transform hover:-translate-y-0.5'
 }`}
 >
 {isLoading ? (
 <>
 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
 </svg>
 Signing in...
 </>
 ) : (
 'Sign in'
 )}
 </button>
 </div>

 {/* Demo credentials */}
 <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
 <h4 className="text-sm font-medium text-gray-700 mb-2">Demo Credentials:</h4>
 <div className="text-xs text-gray-600 space-y-1">
 <p>Email: demo@example.com</p>
 <p>Password: password123</p>
 <p className="text-gray-500 mt-2">Or use any valid email format with 6+ character password</p>
 </div>
 </div>
 </form>
 )
}

export default LoginForm
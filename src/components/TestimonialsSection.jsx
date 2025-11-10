import React from 'react'

const TestimonialsSection = () => {
 const testimonials = [
 {
 id: 1,
 name: 'Sarah Johnson',
 role: 'Marketing Director',
 company: 'TechCorp Inc.',
 content: 'This product has completely transformed our workflow. The results exceeded our expectations and the support team is outstanding.',
 avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
 rating: 5
 },
 {
 id: 2,
 name: 'Michael Chen',
 role: 'CEO',
 company: 'StartupXYZ',
 content: 'Incredible value for money. Our productivity increased by 40% within the first month of implementation.',
 avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
 rating: 5
 },
 {
 id: 3,
 name: 'Emily Rodriguez',
 role: 'Operations Manager',
 company: 'Global Solutions Ltd.',
 content: 'The user interface is intuitive and the features are exactly what we needed. Highly recommend to any growing business.',
 avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
 rating: 5
 }
 ]

 const renderStars = (rating) => {
 return Array.from({ length: 5 }, (_, index) => (
 <svg
 key={index}
 className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
 fill="currentColor"
 viewBox="0 0 20 20"
 >
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </svg>
 ))
 }

 return (
 <section className="py-16 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
 What Our Customers Say
 </h2>
 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Don't just take our word for it. Here's what real customers have to say about their experience.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {testimonials.map((testimonial) => (
 <div
 key={testimonial.id}
 className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
 >
 <div className="flex items-center mb-4">
 {renderStars(testimonial.rating)}
 </div>
 <blockquote className="text-gray-700 mb-6 italic">
 "{testimonial.content}"
 </blockquote>
 <div className="flex items-center">
 <img
 src={testimonial.avatar}
 alt={testimonial.name}
 className="w-12 h-12 rounded-full object-cover mr-4"
 />
 <div>
 <div className="font-semibold text-gray-900">
 {testimonial.name}
 </div>
 <div className="text-sm text-gray-600">
 {testimonial.role}, {testimonial.company}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>

 <div className="text-center mt-12">
 <p className="text-gray-600 mb-4">
 Join thousands of satisfied customers
 </p>
 <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
 Get Started Today
 </button>
 </div>
 </div>
 </section>
 )
}

export default TestimonialsSection
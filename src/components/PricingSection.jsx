import React from 'react'

const PricingSection = () => {
 const pricingPlans = [
 {
 name: 'Basic',
 price: '$9',
 period: '/month',
 features: [
 'Up to 5 projects',
 'Basic support',
 '1GB storage',
 'Email integration'
 ],
 popular: false,
 buttonText: 'Get Started',
 buttonClass: 'bg-gray-600 hover:bg-gray-700 text-white'
 },
 {
 name: 'Pro',
 price: '$29',
 period: '/month',
 features: [
 'Unlimited projects',
 'Priority support',
 '10GB storage',
 'Advanced integrations',
 'Team collaboration',
 'Analytics dashboard'
 ],
 popular: true,
 buttonText: 'Start Free Trial',
 buttonClass: 'bg-blue-600 hover:bg-blue-700 text-white'
 },
 {
 name: 'Enterprise',
 price: '$99',
 period: '/month',
 features: [
 'Everything in Pro',
 'Custom integrations',
 'Unlimited storage',
 '24/7 dedicated support',
 'Advanced security',
 'Custom branding'
 ],
 popular: false,
 buttonText: 'Contact Sales',
 buttonClass: 'bg-gray-600 hover:bg-gray-700 text-white'
 }
 ]

 return (
 <section className="py-16 bg-white">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
 Simple, Transparent Pricing
 </h2>
 <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
 Choose the perfect plan for your needs. No hidden fees, cancel anytime.
 </p>
 </div>

 {/* Pricing Cards */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {pricingPlans.map((plan, index) => (
 <div
 key={index}
 className={`relative rounded-lg border ${plan.popular 
 ? 'border-blue-500 shadow-lg scale-105' 
 : 'border-gray-200'
 } p-8 bg-white transition-transform hover:scale-105`}
 >
 {/* Popular Badge */}
 {plan.popular && (
 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
 <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
 Most Popular
 </span>
 </div>
 )}

 {/* Plan Name */}
 <div className="text-center">
 <h3 className="text-2xl font-bold text-gray-900 mb-2">
 {plan.name}
 </h3>
 
 {/* Price */}
 <div className="mb-6">
 <span className="text-4xl font-bold text-gray-900">
 {plan.price}
 </span>
 <span className="text-gray-600">
 {plan.period}
 </span>
 </div>
 </div>

 {/* Features */}
 <ul className="space-y-3 mb-8">
 {plan.features.map((feature, featureIndex) => (
 <li key={featureIndex} className="flex items-start">
 <svg 
 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" 
 fill="currentColor" 
 viewBox="0 0 20 20"
 >
 <path 
 fillRule="evenodd" 
 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
 clipRule="evenodd"
 />
 </svg>
 <span className="text-gray-700">{feature}</span>
 </li>
 ))}
 </ul>

 {/* CTA Button */}
 <button
 className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonClass}`}
 >
 {plan.buttonText}
 </button>
 </div>
 ))}
 </div>

 {/* Bottom Section */}
 <div className="mt-12 text-center">
 <p className="text-gray-600 mb-4">
 All plans include a 14-day free trial. No credit card required.
 </p>
 <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
 <span className="flex items-center">
 <svg className="h-4 w-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
 </svg>
 Cancel anytime
 </span>
 <span className="flex items-center">
 <svg className="h-4 w-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
 </svg>
 No setup fees
 </span>
 <span className="flex items-center">
 <svg className="h-4 w-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
 </svg>
 Secure payments
 </span>
 </div>
 </div>
 </div>
 </section>
 )
}

export default PricingSection
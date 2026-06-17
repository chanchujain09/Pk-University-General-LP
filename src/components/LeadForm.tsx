import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel-light rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[450px]"
      >
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your inquiry has been received. Our admission counselor will contact you shortly to guide you through the next steps.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-brand-magenta font-medium hover:underline text-sm"
        >
          Submit another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-panel-light rounded-2xl p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/20 rounded-bl-[100px] z-0 pointer-events-none blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="mb-6 border-b border-gray-100 pb-5">
          <h3 className="text-2xl font-bold font-display text-gray-900">Enquire Now</h3>
          <p className="text-sm text-gray-600 mt-1">Get details on fees, admission process, and scholarships.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 pt-1">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-gray-50/50 focus:bg-white"
              placeholder="Enter your full name" 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 pt-1">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-gray-50/50 focus:bg-white"
                placeholder="+91" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 pt-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-gray-50/50 focus:bg-white"
                placeholder="email@example.com" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="program" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5 pt-1">Program of Interest *</label>
            <div className="relative">
              <select 
                id="program" 
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all bg-gray-50/50 focus:bg-white appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a program</option>
                <option value="mba">MBA (Master of Business Administration)</option>
                <option value="bba">BBA (Bachelor of Business Administration)</option>
                <option value="pgdm">PGDM</option>
                <option value="diploma">Professional Diploma</option>
                <option value="other">Other UG/PG Program</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-brand-red/30 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center space-x-2">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  Get Free Counselling
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-2 pt-3 text-xs text-gray-500">
            <Shield className="w-3.5 h-3.5" />
            <span>Your information is 100% secure with us.</span>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Calendar, User, Phone, Mail, GraduationCap } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="bg-brand-dark pt-20 md:pt-24 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#e4321b]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#393185]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative w-full">
        {/* Banner Image Area */}
        <div className="relative w-full">
          <picture>
            <img 
              src="https://i.postimg.cc/N0qgqX9s/aistudio.png" 
              alt="P.K. University Admissions 2026" 
              className="w-full h-auto object-contain bg-[#240348]"
              referrerPolicy="no-referrer"
            />
          </picture>

          {/* Subtle Overlay gradient on mobile to enhance text/form readability if it overlaps */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />

          {/* Form Overlay Container - Aligned exactly with empty space on the right side on desktop */}
          {/* Stays visually centred, has comfortable margins, minimal elegant style */}
          <div className="w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[2%] lg:right-[3.5%] xl:right-[4.5%] z-20 md:w-[350px] lg:w-[370px] xl:w-[380px] p-6 md:p-0">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="bg-white/95 backdrop-blur-md md:bg-white/95 md:backdrop-blur-lg rounded-2xl md:rounded-[20px] p-5 lg:p-6 shadow-2xl border border-white/40 shadow-slate-950/20"
                >
                  <div className="mb-4 text-left">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold text-[#e4321b] bg-[#e4321b]/10 uppercase tracking-wider mb-2">
                      <Calendar className="w-2.5 h-2.5" /> Admissions open 2026-27
                    </span>
                    <h3 className="text-lg lg:text-xl font-bold text-[#0a1b2f] tracking-tight">
                      Enrollment Enquiry
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Secure fee discount details & eligibility criteria
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Full Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name *"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-150 outline-none text-xs sm:text-sm focus:border-[#393185] focus:ring-1 focus:ring-[#393185] transition-all bg-gray-50/50"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number *"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-150 outline-none text-xs sm:text-sm focus:border-[#393185] focus:ring-1 focus:ring-[#393185] transition-all bg-gray-50/50"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email Address *"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-150 outline-none text-xs sm:text-sm focus:border-[#393185] focus:ring-1 focus:ring-[#393185] transition-all bg-gray-50/50"
                      />
                    </div>

                    {/* Course Interested in selecting input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <GraduationCap className="w-3.5 h-3.5" />
                      </div>
                      <select
                        required
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-gray-150 outline-none text-xs sm:text-sm focus:border-[#393185] focus:ring-1 focus:ring-[#393185] transition-all bg-gray-50/50 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Course Interested In *</option>
                        <option value="MBA">MBA (Management)</option>
                        <option value="BBA">BBA (Undergraduate)</option>
                        <option value="PGDM">PGDM (Diploma)</option>
                        <option value="Engineering">B.Tech / Faculty of Engineering</option>
                        <option value="Pharmacy">B.Pharm / D.Pharm (Pharmacy)</option>
                        <option value="Law">BA LL.B / LL.B / LL.M (Law)</option>
                        <option value="Agriculture">B.Sc / M.Sc Agriculture</option>
                        <option value="Science">Faculty of Science & Arts</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#e4321b] hover:bg-[#be2310] active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#e4321b]/20 flex items-center justify-center gap-2 mt-3 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <p className="text-[9px] text-center text-gray-400 pt-1.5 flex items-center justify-center gap-1">
                      <Shield className="w-3 h-3 text-emerald-500" />
                      <span>Compliant with privacy policies</span>
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="thank-you-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-[20px] p-6 shadow-2xl border border-white/40 text-center py-8"
                >
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a1b2f] mb-1">Enquiry Received</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[280px] mx-auto mb-4">
                    Thank you <span className="font-semibold">{formData.name}</span>! An admission representative will contact you shortly on <span className="font-medium">{formData.phone}</span> with eligibility guidelines.
                  </p>
                  <button
                    onClick={() => {
                      setFormData({ name: '', phone: '', email: '', course: '' });
                      setIsSubmitted(false);
                    }}
                    className="text-[10px] text-[#393185] hover:text-[#e4321b] font-bold uppercase tracking-wider hover:underline"
                  >
                    Submit Class Enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Excellence from './components/Excellence';
import ProgramsOffered from './components/ProgramsOffered';
import WhyChooseUs from './components/WhyChooseUs';
import CampusLife from './components/CampusLife';
import Recruiters from './components/Recruiters';
import AdmissionProcess from './components/AdmissionProcess';
import { MapPin, Phone, Mail, Globe, Award, ShieldCheck, GraduationCap } from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden selection:bg-brand-magenta/30">
      <Navbar />
      <main>
        <Hero />
        <Excellence />
        <ProgramsOffered />
        <WhyChooseUs />
        <Recruiters />
        <CampusLife />
        <AdmissionProcess />
        

      </main>

      <footer className="bg-[#0b1329] text-gray-400 py-16 border-t border-gray-800 font-sans">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main University Info column - grid span 4 */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5 bg-white p-3 rounded-xl border border-white/10 shadow-sm">
              <img 
                src="https://pkuniversity.edu.in/wp-content/uploads/2024/06/pku-logo5.png" 
                alt="P.K. University Logo" 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6 font-light">
              P.K. University is established by the MP State Legislature and is authorized to award degrees under Section 2(f) of the UGC Act, 1956. We champion multi-disciplinary higher education in Madhya Pradesh.
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                UGC Approved
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-slate-300 font-medium">
                <Award className="w-3.5 h-3.5 text-[#e4321b]" />
                AICTE Approved
              </span>
            </div>
          </div>

          {/* Contact Information Block - grid span 5 */}
          <div className="lg:col-span-5">
            <h5 className="text-white text-sm font-semibold tracking-[0.1em] uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#e4321b]">
              Contact Information
            </h5>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#393185]/10 group-hover:border-[#393185]/20 transition-all">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 font-light leading-relaxed pt-0.5">
                  P.K. University, Shivpuri Village Thanra, NH-27, Jhansi–Shivpuri Highway, Tehsil Karera, District Shivpuri, Madhya Pradesh – 473665
                </p>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e4321b]/10 group-hover:border-[#e4321b]/20 transition-all">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-semibold font-mono tracking-tight leading-none pt-0.5">
                    Phone Numbers
                  </p>
                  <p className="text-gray-400 text-xs font-mono mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    <a href="tel:+917241115081" className="hover:text-[#e4321b] transition-colors">+91 7241115081</a>
                    <span className="text-white/10">|</span>
                    <a href="tel:+917241115082" className="hover:text-[#e4321b] transition-colors">+91 7241115082</a>
                    <span className="text-white/10">|</span>
                    <a href="tel:+917241115083" className="hover:text-[#e4321b] transition-colors">+91 7241115083</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#393185]/10 group-hover:border-[#393185]/20 transition-all">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-semibold leading-none pt-0.5">
                    Email Address
                  </p>
                  <p className="text-sm mt-2">
                    <a href="mailto:info@pkuniversity.edu.in" className="hover:text-white font-mono text-gray-400 text-xs hover:underline decoration-[#393185]">
                      info@pkuniversity.edu.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e4321b]/10 group-hover:border-[#e4321b]/20 transition-all">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-semibold leading-none pt-0.5">
                    Official Website
                  </p>
                  <p className="text-sm mt-2">
                    <a href="https://pkuniversity.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono text-gray-400 text-xs hover:underline decoration-[#e4321b]">
                      https://pkuniversity.edu.in/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column - grid span 3 */}
          <div className="lg:col-span-3">
            <h5 className="text-white text-sm font-semibold tracking-[0.1em] uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#393185]">
              Quick Links
            </h5>
            <ul className="space-y-3.5 text-sm font-light">
              <li>
                <a href="#about" className="hover:text-white hover:underline decoration-[#393185] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#393185]" />
                  University Excellence
                </a>
              </li>
              <li>
                <a href="#faculties" className="hover:text-white hover:underline decoration-[#e4321b] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e4321b]" />
                  Programs Offered
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white hover:underline decoration-[#393185] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#393185]" />
                  Why Choose PKU
                </a>
              </li>
              <li>
                <a href="#campus-life" className="hover:text-white hover:underline decoration-[#e4321b] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e4321b]" />
                  Campus Ecosystem
                </a>
              </li>
              <li>
                <a href="#admission-process" className="hover:text-white hover:underline decoration-[#393185] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#393185]" />
                  Admission Guidelines
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div id="footer-copyright-bar" className="max-w-[1300px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-light text-slate-400">
              © {new Date().getFullYear()} P.K. University. All rights reserved. Self-contained Admissions portal created for prospective management students.
            </p>
            <p className="text-slate-400/80 font-normal tracking-wide">
              Design and Developed By <span className="text-[#393185] font-semibold hover:text-[#e4321b] transition-colors cursor-pointer">Mediagarh</span>
            </p>
          </div>
          <div className="flex space-x-6 text-slate-400 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


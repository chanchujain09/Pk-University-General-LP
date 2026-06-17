import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  PhoneCall, 
  FileCheck, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ClipboardList,
  AlertCircle,
  HelpCircle,
  X,
  Plus
} from 'lucide-react';

export default function AdmissionProcess() {
  const [activeModal, setActiveModal] = useState<'apply' | 'callback' | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', program: '', message: '' });

  // Handle CTA simple forms
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setActiveModal(null);
      setFormData({ name: '', phone: '', email: '', program: '', message: '' });
    }, 2000);
  };

  const steps = [
    {
      id: "1",
      title: "Fill Out The Application Form",
      desc: "Complete our quick and easy digital application form online or on-campus.",
      icon: FileText,
      badge: "Step 01",
      bgColor: "bg-indigo-50/70",
      iconColor: "text-[#393185]",
      borderColor: "border-indigo-100"
    },
    {
      id: "2",
      title: "Speak With Admission Counselor",
      desc: "Get personalized counseling from our career experts to choose the right academic path.",
      icon: PhoneCall,
      badge: "Step 02",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-100"
    },
    {
      id: "3",
      title: "Submit Required Documents",
      desc: "Upload or verify necessary transcripts, ID proofs, and certifications.",
      icon: FileCheck,
      badge: "Step 03",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100"
    },
    {
      id: "4",
      title: "Confirm Admission & Start Your Journey",
      desc: "Pay a nominal seat-confirmation token and embark on your leadership destiny.",
      icon: Compass,
      badge: "Step 04",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-100"
    }
  ];

  const documents = [
    "Academic Marksheet (10th, 12th & Graduation if applicable)",
    "Passport Size Photograph",
    "ID Proof (Aadhaar Card, PAN Card, or Passport)",
    "Transfer Certificate (TC) & Migration (If Applicable)",
    "Other Relevant Documents (Category or Extra-curricular Certificates)"
  ];

  return (
    <section className="py-24 bg-slate-50/70 font-sans overflow-hidden border-t border-gray-100" id="admission-process">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Section Headers aligned precisely with visual guidelines */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#393185] uppercase block mb-3">
            ADMISSION PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-serif font-semibold text-[#0a1b2f] tracking-tight leading-tight">
            Simple Admission Process
          </h2>
          <div className="w-12 h-1 bg-[#393185]/20 mx-auto mt-4 mb-3 rounded-full" />
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
            Follow our streamlined multi-stage guidelines designed to transition your academic qualifications into executive preparedness.
          </p>
        </div>

        {/* Custom Process Pathway Grid with Curving Connectors matching image */}
        <div className="relative mb-24 max-w-5xl mx-auto">
          
          {/* Dashed curved connector 1 -> 2 (Downwards curve) */}
          <div className="absolute top-[52px] left-[15.5%] w-[18%] h-[40px] pointer-events-none hidden lg:block z-0 opacity-80">
            <svg className="w-full h-full text-[#393185]/30" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
              <path d="M 0,10 Q 50,45 100,10" stroke="#393185" strokeWidth="1.5" strokeDasharray="6,6" strokeLinecap="round" />
            </svg>
          </div>

          {/* Dashed curved connector 2 -> 3 (Upwards curve) */}
          <div className="absolute top-[22px] left-[40.5%] w-[18%] h-[40px] pointer-events-none hidden lg:block z-0 opacity-80">
            <svg className="w-full h-full text-[#393185]/30" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
              <path d="M 0,30 Q 50,-5 100,30" stroke="#393185" strokeWidth="1.5" strokeDasharray="6,6" strokeLinecap="round" />
            </svg>
          </div>

          {/* Dashed curved connector 3 -> 4 (Downwards curve) */}
          <div className="absolute top-[52px] left-[65.5%] w-[18%] h-[40px] pointer-events-none hidden lg:block z-0 opacity-80">
            <svg className="w-full h-full text-[#393185]/30" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
              <path d="M 0,10 Q 50,45 100,10" stroke="#393185" strokeWidth="1.5" strokeDasharray="6,6" strokeLinecap="round" />
            </svg>
          </div>

          {/* Steps Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center text-center group">
                  
                  {/* Step Circular Node */}
                  <div className="relative mb-6">
                    
                    {/* Step label on top-left of the circle */}
                    <span className="absolute -top-3.5 -left-3.5 font-mono text-[10px] font-bold text-gray-400 bg-zinc-50 border border-zinc-200/60 px-2 py-0.5 rounded-full shadow-xs">
                      {step.id}
                    </span>

                    {/* Outer beautiful shadow ring and target border */}
                    <div className="w-24 h-24 rounded-full bg-white border border-gray-100/80 shadow-md group-hover:shadow-lg transition-shadow flex items-center justify-center p-2 relative">
                      
                      {/* Dotted circular alignment border like image */}
                      <div className="absolute inset-1 rounded-full border border-dashed border-gray-200 group-hover:border-[#393185]/30 transition-colors" />

                      {/* Solid color filled inner core circle */}
                      <div className={`w-16 h-16 rounded-full ${step.bgColor} shadow-inner flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className={`w-7 h-7 ${step.iconColor}`} />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description with supreme typography */}
                  <span className="text-[10px] font-bold tracking-widest text-[#393185] uppercase mb-1.5 block">
                    {step.badge}
                  </span>
                  <h3 className="text-base font-bold text-[#0a1b2f] leading-snug mb-2 max-w-[210px] group-hover:text-[#393185] transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light px-3">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Split Section: Documents Required Box & CTA controls side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mt-6 bg-gradient-to-br from-zinc-50 to-white p-8 sm:p-10 rounded-2xl border border-zinc-100 shadow-xs">
          
          {/* Documents Required: Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-[#393185]/10 rounded-lg flex items-center justify-center">
                <ClipboardList className="w-5.5 h-5.5 text-[#393185]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0a1b2f]">
                  Documents Required
                </h3>
                <p className="text-xs text-[#393185]/80 font-mono tracking-wider uppercase mt-0.5">
                  Submission checklist for validation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1.5 pt-1">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-start gap-3 p-2 bg-white rounded-lg border border-gray-100/50 hover:border-gray-200 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 font-sans leading-tight">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box Options: Right Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#0a1b2f] rounded-xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#393185]/20 rounded-full blur-2xl pointer-events-none" />
            
            <Sparkles className="w-6 h-6 text-[#d48c29] mb-4" />
            <h4 className="text-lg font-bold font-serif mb-2 tracking-tight">Need Immediate Guidance?</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 max-w-xs">
              Talk directly to our admission counselor or apply online in a few clicks to lock your seat.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full">
              {/* Apply Online Button */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-[#393185] hover:bg-[#2c246f] text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-md shadow-[#393185]/30 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Request Callback Button */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-[#1e293b] hover:bg-[#334155] text-white border border-[#393185]/20 py-3.5 px-6 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Request Callback</span>
              </button>
            </div>

            <span className="text-[10px] text-slate-400 mt-5 block font-mono">
              ★ UGC & AICTE Approved Batch 2026
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const pkuPoints = [
  {
    id: 1,
    title: "Expert Management Faculty",
    description: "Learn from experienced academicians and industry professionals with corporate expertise across Finance, IT, and Marketing."
  },
  {
    id: 2,
    title: "IMD Delhi Collaboration",
    description: "PKU is the first university in the region to collaborate with IMD Delhi — bringing metro-level management education to Shivpuri."
  },
  {
    id: 3,
    title: "Real-World Corporate Exposure",
    description: "Industry projects, case studies, live assignments, and regular corporate visits to top companies across sectors."
  },
  {
    id: 4,
    title: "Leadership Development",
    description: "Dedicated training in leadership, communication, teamwork, and decision-making to groom future business leaders."
  },
  {
    id: 5,
    title: "Placement Support",
    description: "Dedicated placement cell with resume building, mock interviews, and tie-ups with 200+ hiring partners across India."
  },
  {
    id: 6,
    title: "UGC & AICTE Approved",
    description: "All MBA programs are fully approved by UGC and AICTE, ensuring a nationally recognized and industry-respected degree."
  }
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to Real-World Corporate Exposure (index 2) match image

  // Image source matching the exact mockup conference room
  const mainImage = "https://pkuniversity.edu.in/wp-content/uploads/2025/05/pku-april-2025.jpg";

  return (
    <section className="py-20 bg-white select-none overflow-hidden font-sans border-y border-gray-100">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Main centered headers following the attached design */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif text-[#0a1b2f] font-bold tracking-tight"
          >
            Why PKU MBA
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#e4321b] uppercase mt-2.5 block"
          >
            EVERYTHING YOU NEED TO LEAD
          </motion.span>
        </div>

        {/* Outer Grid of split design matching the mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Side image with the brand indicator & Red connection node */}
          <div className="lg:col-span-5 flex flex-col items-start relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.15] rounded-xl overflow-visible shadow-xl border border-gray-100/60 bg-gray-50">
              <img
                src={mainImage}
                alt="P.K. University MBA Classroom and Discussion Room"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Optional dynamic shadow tint overlap */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none rounded-xl" />

              {/* Connecting Red Node on the right-middle boundary overlapping the photo exactly like mockup */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#e4321b] border-[4px] border-white shadow-lg flex items-center justify-center z-20 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Connecting Horizontal Line to the timeline (only visible on desktop) with a beautiful dual-color split gradient */}
              <div className="absolute top-1/2 -translate-y-1/2 left-full w-[48px] lg:w-[64px] h-[2px] bg-gradient-to-r from-[#e4321b] to-[#393185] hidden lg:block z-10 pointer-events-none" />
            </div>

            {/* Bottom brand pointer PKU with red circle right arrow as represented in mockup */}
            <div className="mt-6 flex items-center gap-1.5 text-[#e4321b] font-bold tracking-[0.15em] text-sm uppercase">
              <span>PKU</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#e4321b] text-[#e4321b]">
                <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>

          {/* Right Column: Custom Vertical Timeline with interactivity */}
          <div className="lg:col-span-7 relative pl-0 sm:pl-8 py-4">
            
            {/* The vertical timeline track mimicking the mockup */}
            {/* Top dashed line extension */}
            <div className="absolute left-[7px] sm:left-[31px] w-[2px] h-[24px] border-l-2 border-dashed border-[#393185] top-[-8px] hidden sm:block pointer-events-none" />
            
            {/* Main vertical line */}
            <div className="absolute left-[7px] sm:left-[31px] w-[2px] bg-[#393185] top-[16px] bottom-[16px] hidden sm:block pointer-events-none" />
            
            {/* Bottom dashed line extension */}
            <div className="absolute left-[7px] sm:left-[31px] w-[2px] h-[24px] border-l-2 border-dashed border-[#393185] bottom-[-8px] hidden sm:block pointer-events-none" />

            {/* Timeline points list */}
            <div className="space-y-8">
              {pkuPoints.map((point, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div 
                    key={point.id}
                    onClick={() => setActiveIndex(idx)}
                    className="relative cursor-pointer group flex items-start"
                  >
                    {/* Timeline circle indicator with dynamic focus effect */}
                    <div className="absolute left-[0px] sm:left-[24px] top-[4px] z-10 hidden sm:flex items-center justify-center">
                      <div 
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#393185] border-[#393185] scale-125 shadow-md shadow-indigo-200' 
                            : 'bg-white border-[#393185] hover:border-[#4c42ad] hover:scale-110'
                        }`}
                      />
                    </div>

                    {/* Content Box with premium typography */}
                    <div className="pl-0 sm:pl-16 transition-all duration-300">
                      <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 leading-tight ${
                        isActive ? 'text-[#0a1b2f]' : 'text-gray-800 group-hover:text-[#393185]'
                      }`}>
                        {point.title}
                      </h3>
                      <p className={`mt-1 text-xs sm:text-sm leading-relaxed transition-all duration-300 max-w-[560px] ${
                        isActive ? 'text-[#1e293b] font-normal font-sans' : 'text-gray-500 font-sans font-light'
                      }`}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


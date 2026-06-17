import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Award, BookOpen, GraduationCap } from 'lucide-react';

const facultiesData = [
  { id: "engineering", name: "Faculty Of Engineering", programs: ["B.Tech", "M.Tech"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", category: "professional" },
  { id: "cs", name: "Faculty Of Computer Science & Application", programs: ["BCA", "MCA", "PGDCA"], image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", category: "professional" },
  { id: "management", name: "Faculty Of Management", programs: ["BBA", "MBA", "BHMCT"], image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", category: "professional" },
  { id: "science", name: "Faculty Of Science", programs: ["B.Sc", "M.Sc Programs"], image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", category: "academic" },
  { id: "arts", name: "Faculty Of Arts and Social Science", programs: ["BA", "MA Programs", "BSW"], image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop", category: "academic" },
  { id: "agriculture", name: "Faculty Of Agriculture", programs: ["B.Sc Agriculture", "M.sc Agriculture"], image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop", category: "academic" },
  { id: "pharmacy", name: "Faculty Of Pharmacy", programs: ["D.Pharm", "B.Pharm", "M.Pharm"], image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop", category: "professional" },
  { id: "law", name: "Faculty Of Law", programs: ["LL.B", "BA LL.B", "LLM"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROm_fMTt4NBNA3CavZK_KrTcfiJ8pI3EKR4w&s", category: "professional" },
  { id: "ayush", name: "Faculty Of AYUSH", programs: ["BAMS"], image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", category: "professional" },
  { id: "research", name: "Research Programs", programs: ["Ph.D."], image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=800&auto=format&fit=crop", category: "academic" },
  { id: "commerce", name: "Faculty Of Commerce", programs: ["B.Com", "M.Com"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", category: "academic" }
];

export default function ProgramsOffered() {
  const [selectedCategory, setSelectedCategory] = useState<'professional' | 'academic'>('professional');

  const filteredFaculties = facultiesData.filter(f => f.category === selectedCategory);

  return (
    <section className="py-20 bg-[#fafafa] text-[#0a1b2f] font-sans" id="faculties">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#393185]/10 flex items-center justify-center text-[#393185]">
              <BookOpen className="w-5.5 h-5.5" />
            </div>
            <h3 className="font-bold text-[18px] tracking-tight text-[#0a1b2f]">
              P.K. University <span className="font-light text-[#393185]">—</span> Faculties
            </h3>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[38px] font-serif font-semibold text-[#0a1b2f] text-left sm:text-right leading-tight tracking-tight">
            Our Academic Programs
          </h2>
        </div>
 
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column (Fixed Info and Stats) */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:border-r lg:border-gray-150 lg:pr-8">
            
            {/* About Block */}
            <div>
              <h3 className="font-bold border-b border-[#e4321b]/30 pb-2 mb-4 text-[12px] uppercase tracking-wider text-[#e4321b]">
                Overview
              </h3>
              <p className="text-[13.5px] font-normal text-gray-500 leading-relaxed">
                P.K. University offers industry-aligned undergraduate, postgraduate, and doctorate programs with deep emphasis on comprehensive mentorship, standard-backed laboratories, and expert research guidelines.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#393185]" />
                <div>
                  <h4 className="text-sm font-bold text-[#0a1b2f]">11 Faculties</h4>
                  <p className="text-[10px] text-gray-400">Multi-disciplinary ecosystems</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#e4321b]" />
                <div>
                  <h4 className="text-sm font-bold text-[#0a1b2f]">UGC Recognised</h4>
                  <p className="text-[10px] text-gray-400">UGC Act, 1956 compliance</p>
                </div>
              </div>
            </div>
 
            {/* CTA Block */}
            <div className="mt-2">
              <a href="#admission-process" className="inline-block w-full text-center bg-[#e4321b] hover:bg-[#be2310] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-md shadow-[#e4321b]/10">
                Apply Online 2026
              </a>
            </div>
 
          </div>
 
          {/* Right Column (All courses in a clean grid, split into 2 tabs) */}
          <div className="lg:col-span-9">
            <div className="border-b border-gray-150 pb-3 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h3 className="font-bold text-[12px] uppercase tracking-wider text-gray-400">Departments & Programs</h3>
                <span className="text-[12px] text-[#e4321b] font-semibold">{filteredFaculties.length} depts listed</span>
              </div>
              
              {/* Tab Toggles Box */}
              <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200/50">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('professional')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${selectedCategory === 'professional' ? 'bg-white text-[#0a1b2f] shadow-xs' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  Professional & Tech
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('academic')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${selectedCategory === 'academic' ? 'bg-white text-[#0a1b2f] shadow-xs' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  Sciences & Humanities
                </button>
              </div>
            </div>
            
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {filteredFaculties.map((faculty) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    key={faculty.id}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-gray-200 transition-all duration-300 p-4"
                  >
                    {/* Image Block */}
                    <div className="h-28 sm:h-32 w-full mb-3.5 relative overflow-hidden bg-gray-50 rounded-xl">
                       <img 
                         src={faculty.image} 
                         alt={faculty.name} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                         referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80" />
                    </div>
                    
                    <h4 className="font-bold text-[14px] sm:text-[15px] text-[#0a1b2f] mb-1.5 leading-snug group-hover:text-[#e4321b] transition-colors">{faculty.name}</h4>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {faculty.programs.map((prog, pIdx) => (
                        <span key={pIdx} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-gray-55/70 text-gray-600 border border-gray-100">
                          {prog}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between text-[11px] text-gray-400 pt-2.5 border-t border-gray-50 group-hover:text-[#0a1b2f] transition-all">
                       <span className="font-medium">Admissions Open 2026</span>
                       <div className="w-5 h-5 rounded-full bg-gray-55 shadow-xs text-[#0a1b2f] flex items-center justify-center transform group-hover:bg-[#393185] group-hover:text-white transition-all duration-300">
                         <Plus className="w-3 h-3" />
                       </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

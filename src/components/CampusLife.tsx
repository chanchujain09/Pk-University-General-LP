import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  School, 
  BookOpen, 
  Wifi, 
  Users, 
  Award, 
  Landmark, 
  Coffee, 
  Compass, 
  GraduationCap, 
  Sparkles,
  ChevronRight,
  Shield,
  Clock,
  HeartHandshake
} from 'lucide-react';

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState<'facilities' | 'activities'>('facilities');

  const facilitiesList = [
    { name: "Spacious Green Campus", icon: Landmark, desc: "Eco-friendly natural surrounding layout", highlight: "100+ Acres" },
    { name: "Modern Classrooms", icon: School, desc: "Audio-visual teaching-learning resources", highlight: "Smart Boards" },
    { name: "Well-Equipped Laboratories", icon: Compass, desc: "State-of-the-art practical research labs", highlight: "Advance Kits" },
    { name: "Central Library", icon: BookOpen, desc: "Vast collection of academic literature", highlight: "50,000+ Books" },
    { name: "Boys & Girls Hostel", icon: Building2, desc: "Secure, separate, comfortable living quarters", highlight: "24/7 Security" },
    { name: "Sports & Recreation Facilities", icon: Award, desc: "Active indoor and outdoor game arenas", highlight: "Multi-court" },
    { name: "Wi-Fi Enabled Learning Spaces", icon: Wifi, desc: "Seamless high-speed internet accessibility", highlight: "Gigabit Speed" },
    { name: "Seminar Halls & Auditorium", icon: Users, desc: "Hi-tech venues for guest lectures & gatherings", highlight: "500+ Seater" },
    { name: "Cafeteria & Common Areas", icon: Coffee, desc: "Social relaxation zones & hygienic dining", highlight: "Multi-cuisine" }
  ];

  const activitiesList = [
    { name: "Cultural Events", icon: Sparkles, desc: "Vibrant festivals, talent showcases & celebrations", highlight: "Annual Fest" },
    { name: "Technical Workshops", icon: Compass, desc: "Hands-on learning of modern industry tools", highlight: "Weekly Labs" },
    { name: "Sports Activities", icon: Award, desc: "Competitive leagues and campus-wide tournaments", highlight: "Gold Medals" },
    { name: "Seminars & Guest Lectures", icon: Users, desc: "Direct interactions with domain specialists", highlight: "Industry CXOs" },
    { name: "Skill Development", icon: GraduationCap, desc: "Personality training & soft-skills bootcamps", highlight: "Placement Prep" },
    { name: "Scholarships Guide", icon: Landmark, desc: "Financial support plans for merited talents", highlight: "Need & Merit" },
    { name: "Career Counseling", icon: Compass, desc: "Meticulous preparation for top corporate positions", highlight: "1-on-1 Sessions" }
  ];

  const activeItems = activeTab === 'facilities' ? facilitiesList : activitiesList;
  const themeAccent = activeTab === 'facilities' ? '#e4321b' : '#393185';
  const themeBgLight = activeTab === 'facilities' ? 'rgba(228, 50, 27, 0.05)' : 'rgba(57, 49, 133, 0.05)';

  return (
    <section className="py-24 bg-white font-sans overflow-hidden border-t border-gray-100" id="campus-life">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Section Header & Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left: Beautifully Framed Campus Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#e4321b]/10 rounded-2xl transform translate-x-3 translate-y-3 -z-10 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[1.4] border border-gray-100 bg-white">
                <img 
                  src="https://pkuniversity.edu.in/wp-content/uploads/2024/10/DSC_3993-min-scaled.jpg" 
                  alt="Students collaborating at P.K. University Campus" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b2f]/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Embedded Floating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-lg border border-gray-100/50 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e4321b] animate-pulse" />
                  <span className="text-xs font-bold text-[#0a1b2f] tracking-wide uppercase">Vibrant Multi-disciplinary Ecosystem</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Information and Tabs Navigation */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#0a1b2f] tracking-tight leading-tight mb-5 text-left">
              Experience Student Life Beyond The Classroom
            </h2>
            
            <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base font-normal mb-8 text-left">
              P.K. University provides a vibrant, secure, and resource-rich environment designed to support technical learning, creative pursuits, and personal wellness—making it an ideal hub for future leaders.
            </p>

            {/* Premium Tab Bar with Custom Dynamic Indicator */}
            <div className="flex bg-zinc-100 p-1.5 rounded-xl max-w-md w-full relative">
              <button 
                onClick={() => setActiveTab('facilities')}
                className={`flex-1 relative py-3 px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
                  activeTab === 'facilities' ? 'text-[#0a1b2f] shadow-sm bg-white' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Building2 className={`w-4 h-4 ${activeTab === 'facilities' ? 'text-[#e4321b]' : 'text-gray-400'}`} />
                Campus Facilities
              </button>
              
              <button 
                onClick={() => setActiveTab('activities')}
                className={`flex-1 relative py-3 px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
                  activeTab === 'activities' ? 'text-[#0a1b2f] shadow-sm bg-white' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <Sparkles className={`w-4 h-4 ${activeTab === 'activities' ? 'text-[#393185]' : 'text-gray-400'}`} />
                Student Development
              </button>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                <Shield className="w-3.5 h-3.5 text-[#e4321b]" />
                <span>Separate Secure Hostels</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-[#393185]" />
                <span>24/7 Academic Assistance</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Card Display Grid */}
        <div className="relative mt-8 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {activeItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="group bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-200/80 hover:shadow-xs transition-all duration-300 flex items-start gap-4 relative"
                  >
                    {/* Small clean icon box on the left */}
                    <div 
                      style={{ color: themeAccent, backgroundColor: `${themeAccent}08` }}
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    >
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm font-bold text-[#0a1b2f] truncate">
                          {item.name}
                        </h3>
                        <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase bg-gray-50 border border-gray-100/70 px-1.5 py-0.5 rounded flex-shrink-0">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Network, Laptop, Globe2, Shapes } from 'lucide-react';

const programs = [
  {
    title: "MBA Programs",
    desc: "Transform your career with our flagship dual-specialization MBA focused on leadership.",
    icon: <Globe2 className="w-8 h-8 text-brand-purple" />,
    color: "bg-purple-50"
  },
  {
    title: "BBA / UG Degrees",
    desc: "Lay a strong foundation in business management with practical, industry-aligned curriculums.",
    icon: <Shapes className="w-8 h-8 text-brand-magenta" />,
    color: "bg-rose-50/70"
  },
  {
    title: "Specialised Programs",
    desc: "Niche programs in Business Analytics, Supply Chain, and Digital Marketing.",
    icon: <Network className="w-8 h-8 text-brand-purple" />,
    color: "bg-purple-50/70"
  },
  {
    title: "PG Diploma",
    desc: "1-year intensive professional diplomas for working executives and fresh graduates.",
    icon: <Laptop className="w-8 h-8 text-brand-red" />,
    color: "bg-rose-50/80"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-magenta uppercase tracking-widest mb-3">Academic Excellence</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">Programs Designed for the Modern Economy</h3>
          <p className="text-gray-600 text-lg">
            Our curriculum bridges the gap between traditional academics and real-world industry requirements, ensuring our graduates are day-one ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-brand-purple/5 transition-all bg-white group hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-xl ${prog.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {prog.icon}
              </div>
              <h4 className="text-xl font-bold font-display text-gray-900 mb-3">{prog.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{prog.desc}</p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-brand-magenta hover:text-brand-purple transition-colors">
                Explore Program <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

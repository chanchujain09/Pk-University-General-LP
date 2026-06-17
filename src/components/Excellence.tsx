import React from 'react';
import { motion } from 'motion/react';

const excellenceMarks = [
  {
    title: '"Excellence in Education" for Most Preferred University',
    subtitle: 'By DANIK JAGRAN',
    image: 'https://i.postimg.cc/NGrXq30t/logo1.png',
  },
  {
    title: 'First university in the Region in Collaboration with',
    subtitle: 'IMD-Delhi',
    image: 'https://i.postimg.cc/mZF9fvg0/logo-25.png',
  },
  {
    title: '1st Private University',
    subtitle: 'in Bundelkhand Region',
    image: 'https://i.postimg.cc/ryt4XBpk/logo-3.png',
  },
  {
    title: 'University established under section 2(F) UGC Act 1956',
    subtitle: 'vide MP GOVT. Act. No. 17 of 2015',
    image: 'https://i.postimg.cc/CMf8T3KS/logo-4.png',
  }
];

export default function Excellence() {
  return (
    <section className="py-16 bg-white border-y border-brand-purple/10 relative overflow-hidden">
      {/* Premium subtle background glow for high highlight presence */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-brand-purple/5 to-brand-magenta/5 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Multi-colored top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-purple to-brand-magenta" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-magenta font-semibold uppercase tracking-wider text-xs mb-2"
          >
            Is Your Future Secure With Us?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-display font-bold text-gray-900 leading-tight"
          >
            Well, These Marks of <span className="text-brand-purple">Excellence</span> Speak For Us!
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {excellenceMarks.map((mark, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group flex flex-col items-center justify-start"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center p-1 group-hover:-translate-y-1 transition-transform duration-300">
                <img 
                  src={mark.image} 
                  alt={mark.title} 
                  className="w-full h-full object-contain transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-gray-800 font-medium text-sm leading-snug mb-1">
                {mark.title}
              </h4>
              <p className="text-brand-magenta font-semibold text-xs">
                {mark.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

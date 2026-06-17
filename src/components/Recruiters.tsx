import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Building2 } from 'lucide-react';

const recruiterList = [
  { name: "TCS", sector: "Technology Services", color: "from-blue-500/10 to-blue-600/10", text: "text-blue-600", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqg0KtMMH4RREUA6kPgf13HtwKENOL2O8MVQ&s" },
  { name: "Infosys", sector: "IT Consulting", color: "from-sky-500/10 to-blue-500/10", text: "text-sky-600", logoUrl: "https://static.vecteezy.com/system/resources/previews/020/190/476/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg" },
  { name: "Wipro", sector: "Software & Technology", color: "from-purple-500/10 to-indigo-500/10", text: "text-indigo-600", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uoHY05Eu2jXKCcLR4u8ck04pOFM5tZY_wQ&s" },
  { name: "Cognizant", sector: "Digital Engineering", color: "from-cyan-500/10 to-blue-500/10", text: "text-cyan-700", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cognizant_logo_and_wordmark.svg/512px-Cognizant_logo_and_wordmark.svg.png" },
  { name: "HDFC Bank", sector: "Banking & Finance", color: "from-blue-600/10 to-indigo-600/10", text: "text-blue-700", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HDFC_Bank_Logo.svg/512px-HDFC_Bank_Logo.svg.png" },
  { name: "ICICI Bank", sector: "Financial Services", color: "from-orange-500/10 to-amber-500/10", text: "text-orange-600", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/512px-ICICI_Bank_Logo.svg.png" },
  { name: "Axis Bank", sector: "Retail Banking", color: "from-red-700/10 to-rose-800/10", text: "text-rose-700", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Axis_Bank_logo.svg/512px-Axis_Bank_logo.svg.png" },
  { name: "Citibank", sector: "Global Banking", color: "from-sky-600/10 to-blue-500/10", text: "text-blue-600", logoUrl: "https://1000logos.net/wp-content/uploads/2016/11/Citibank-Logo.png" },
  { name: "NVIDIA", sector: "AI & Computing", color: "from-green-600/10 to-emerald-600/10", text: "text-green-600", logoUrl: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg" },
  { name: "Jio", sector: "Telecom & Digital", color: "from-blue-700/10 to-indigo-800/10", text: "text-blue-800", logoUrl: "https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.3.jpg" },
  
  { name: "PepsiCo", sector: "Consumer Goods", color: "from-blue-600/10 to-sky-500/10", text: "text-blue-700", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg" },
  { name: "Adobe", sector: "Creative Software", color: "from-red-500/10 to-rose-500/10", text: "text-red-600", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVYHKeBmM8N9YMgEUTvLiiZ-ctm4vq7XAKg&s" },
  { name: "JW Marriott", sector: "Hospitality & Leisure", color: "from-yellow-600/10 to-amber-550/10", text: "text-amber-700", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/JWMarriott.svg/1280px-JWMarriott.svg.png" },
  { name: "Nestlé", sector: "Food & Beverage", color: "from-blue-800/10 to-sky-700/10", text: "text-blue-800", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1v-BxWqmnQNkUhqT4KV2_6laihjSQM6rYA&s" },
  { name: "Swiggy", sector: "On-Demand Delivery", color: "from-orange-500/10 to-amber-500/10", text: "text-orange-600", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Swiggy_Logo_2024.webp" },
  { name: "Accenture", sector: "Strategy & Consulting", color: "from-purple-600/10 to-fuchsia-600/10", text: "text-purple-700", logoUrl: "https://www.pngfind.com/pngs/m/57-572285_accenture-logo-png-transparent-svg-vector-freebie-supply.png" },
  { name: "Deloitte", sector: "Professional Advisory", color: "from-green-600/10 to-emerald-600/10", text: "text-green-700", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/DeloitteNewLogo.jpg" },
  { name: "HP", sector: "Enterprise Hardware", color: "from-blue-400/10 to-sky-400/10", text: "text-blue-500", logoUrl: "https://cdn.brandfetch.io/domain/hp.com/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed" },
  { name: "Tech Mahindra", sector: "Communication Tech", color: "from-red-500/10 to-rose-500/10", text: "text-red-600", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/3840px-Tech_Mahindra_New_Logo.svg.png" },
  { name: "Microsoft", sector: "Technology Leader", color: "from-sky-600/10 to-indigo-600/10", text: "text-indigo-700", logoUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1" },
 
  { name: "Mankind Pharma", sector: "Pharmaceuticals", color: "from-indigo-500/10 to-blue-500/10", text: "text-indigo-700", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mankind_Serving_Life.png" },
  { name: "John Deere", sector: "Heavy Machinery", color: "from-green-500/10 to-emerald-500/10", text: "text-green-700", logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/John_Deere_Logo_%E2%80%93_Flat_2_Color.svg/1280px-John_Deere_Logo_%E2%80%93_Flat_2_Color.svg.png" },
  { name: "Flipkart", sector: "E-Commerce", color: "from-blue-500/10 to-yellow-500/10", text: "text-blue-600", logoUrl: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" },
  { name: "L&T", sector: "Heavy Engineering", color: "from-zinc-700/10 to-neutral-800/10", text: "text-amber-600", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Larsen_%26_Toubro_logo.svg/512px-Larsen_%26_Toubro_logo.svg.png" },
  { name: "Paytm", sector: "Digital Payments", color: "from-red-600/10 to-rose-600/10", text: "text-red-600", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Paytm_Logo.png" },
  { name: "Amazon", sector: "E-Commerce", color: "from-amber-500/10 to-amber-600/10", text: "text-[#0a1b2f]", logoUrl: "https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png" },
  { name: "PwC", sector: "Professional Advisory", color: "from-orange-655/10 to-red-600/10", text: "text-orange-700", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/512px-PricewaterhouseCoopers_Logo.svg.png" },
  { name: "HCL Tech", sector: "Technology Services", color: "from-blue-500/10 to-sky-500/10", text: "text-blue-600", logoUrl: "https://vectorseek.com/wp-content/uploads/2023/04/HCLTech-Logo-Vector.jpg" },
  { name: "Shriram Finance", sector: "Financial Services", color: "from-amber-600/10 to-yellow-600/10", text: "text-amber-700", logoUrl: "https://seekvectorlogo.com/wp-content/uploads/2018/01/shriram-transport-finance-company-stfc-vector-logo.png" },
  { name: "Somany Ceramics", sector: "Building Products", color: "from-stone-600/10 to-stone-700/10", text: "text-stone-700", logoUrl: "https://d2ki7eiqd260sq.cloudfront.net/New-Somany-Logo-Tiles-Bathware-Guidelines_16-04-2026-09550d3f59-f871-4d0c-ab1f-18339632736085b97d49-d9aa-485f-a8e0-698d44a07c6d.jpg" },
  { name: "IBM", sector: "Technology & Consulting", color: "from-blue-600/10 to-indigo-650/10", text: "text-blue-700", logoUrl: "https://images.icon-icons.com/2699/PNG/512/ibm_logo_icon_170000.png" }
];

interface RowProps {
  items: typeof recruiterList;
  direction: 'left' | 'right';
  speed: number;
}

function RecruiterCard({ recruiter }: { recruiter: typeof recruiterList[0]; key?: React.Key | string }) {
  const [failed, setFailed] = React.useState(false);

  if (failed || !recruiter.logoUrl) {
    return null;
  }

  return (
    <div className="group bg-white p-2.5 rounded-xl border border-gray-100/80 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-gray-200 hover:shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-300 flex justify-center items-center text-center relative overflow-hidden w-[150px] sm:w-[180px] h-14 sm:h-16 flex-shrink-0">
      <div className="h-10 sm:h-12 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 select-none hover:rotate-1">
        <img 
          src={recruiter.logoUrl} 
          alt={`${recruiter.name} logo`} 
          className="max-h-full max-w-[130px] sm:max-w-[155px] object-contain transition-all duration-300"
          onError={() => setFailed(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

function RecruiterRow({ items, direction, speed }: RowProps) {
  const duplicatedItems = [...items, ...items];
  const xValue = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="relative flex overflow-hidden w-full py-1.5 animate-fade-in">
      <motion.div
        className="flex gap-4 flex-nowrap"
        animate={{ x: xValue }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        style={{
          width: "max-content",
        }}
      >
        {duplicatedItems.map((recruiter, index) => (
          <RecruiterCard key={`${recruiter.name}-${index}`} recruiter={recruiter} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Recruiters() {
  const half = Math.ceil(recruiterList.length / 2);
  const firstRow = recruiterList.slice(0, half);
  const secondRow = recruiterList.slice(half);

  return (
    <section className="py-12 bg-slate-50/70 font-sans overflow-hidden border-t border-gray-100" id="placements">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Header Block following design layout guidelines */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#393185] uppercase block mb-1.5">
            Placements
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-semibold text-[#0a1b2f] tracking-tight leading-none">
            Our Key Recruiters
          </h2>
        </div>

        {/* Two auto-scrolling rows moving in opposite directions with horizontal fade filters */}
        <div 
          className="flex flex-col gap-2 relative select-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)'
          }}
        >
          <RecruiterRow items={firstRow} direction="left" speed={40} />
          <RecruiterRow items={secondRow} direction="right" speed={40} />
        </div>

      </div>
    </section>
  );
}

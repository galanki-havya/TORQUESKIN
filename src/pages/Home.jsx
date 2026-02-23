import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, Sun, CheckCircle2, ArrowRight,
  BarChart3, Globe2, Users2, XCircle, Zap, Car, Eye, Award, Layers
} from 'lucide-react';

import heroImage from '../assets/hero.png'; 
import bgTexture from '../assets/bg-texture.jpg';
import scienceImage from '../assets/science-of-safety.png'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen text-white font-sans overflow-x-hidden bg-[#0b0b14]"
      style={{ 
        backgroundImage: `url(${bgTexture})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      
      <section className="relative w-full h-screen flex items-center pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} className="w-full h-full object-cover object-center md:object-right opacity-90" alt="Torqueskin" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b14] via-[#0b0b14]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b14] via-transparent to-transparent z-10" />
        </div>
        <div className="relative z-20 w-full px-4 md:pl-8 lg:pl-12">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="max-w-xl text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase italic">
              <span className="text-white">TORQUE</span><span className="text-[#d4af37]">SKIN</span>
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-gray-200 mt-3 italic uppercase">Ultimate Vehicle Protection</h2>
            <p className="mt-5 text-xs md:text-sm text-white font-bold tracking-wide max-w-sm border-l-4 border-[#d4af37] pl-4">
              Advanced TPU Paint Protection Films and Nano-Ceramic Window Tints. Engineered for Performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/products')}
                className="bg-[#d4af37] text-black px-8 py-3.5 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all flex items-center gap-2"
              >
                Explore Series <ArrowRight size={14} />
              </button>

              <button 
                onClick={() => navigate('/contact')}
                className="border-2 border-white/50 px-8 py-3.5 rounded-sm font-black uppercase tracking-widest text-[10px] text-white hover:bg-white/10 transition-all"
              >
                Book Installation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white/5 backdrop-blur-xl border-y border-white/10 relative z-30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem icon={<Globe2 size={20}/>} label="Global Network" value="25+ Countries" />
          <StatItem icon={<Shield size={20}/>} label="Vehicles Shielded" value="500k+" />
          <StatItem icon={<Users2 size={20}/>} label="Master Technicians" value="1200+" />
          <StatItem icon={<BarChart3 size={20}/>} label="Heat Rejection" value="99.9%" />
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">The <span className="text-[#d4af37]">Torque</span> Series</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[#d4af37] to-transparent opacity-50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard title="Armor Pro" icon={<Shield size={32} className="text-[#d4af37]" />} desc="Flagship 195+ Micron TPU film with zero orange peel finish." features={["10 Year Warranty", "Instant Self-Healing"]} />
          <ProductCard title="Satin Lite" icon={<Layers size={32} className="text-[#d4af37]" />} desc="Premium matte transformation with elite surface energy." features={["Matte-Satin Finish", "Hydrophobic Shield"]} />
          <ProductCard title="Therm-X" icon={<Sun size={32} className="text-[#d4af37]" />} desc="Advanced nano-ceramic solar protection with maximum heat rejection." features={["99% IR Rejection", "Zero Signal Interference"]} />
        </div>
      </section>

      <section className="py-24 relative bg-white/[0.03] border-y border-white/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
           <span className="text-[18vw] font-black italic uppercase text-white/[0.03] leading-none tracking-tighter">ENGINEERED</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-[#d4af37]/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <img src={scienceImage} alt="Torqueskin Tech" className="relative rounded-lg border border-white/20 shadow-2xl w-full object-cover aspect-[4/3]" />
            </div>
            <div className="bg-black/40 border border-white/20 p-10 rounded-2xl max-w-lg backdrop-blur-xl shadow-2xl">
              <h2 className="text-3xl font-black uppercase italic mb-6 text-white">The <span className="text-[#d4af37]">Science</span> of Safety</h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-8 font-semibold italic">Torqueskin PPF is a multi-layer molecular shield engineered for extreme road conditions.</p>
              <div className="space-y-5 mt-6">
                <LayerInfo step="01" title="Nano-Ceramic Top Coat" detail="High-density TPU for instant self-healing." />
                <LayerInfo step="02" title="Impact Core" detail="195+ Microns to absorb high-velocity energy." />
                <LayerInfo step="03" title="Ultra-Clear Adhesive" detail="Patented residue-free Aliphatic formula." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              The <span className="text-[#d4af37]">Torque</span> Edge
            </h2>
            <p className="text-gray-300 text-xs uppercase tracking-[0.4em] mt-3 font-black">Superior Engineering vs Industry Standards</p>
          </div>
          <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-8 text-xs uppercase tracking-widest font-black text-white border-b border-white/10">Feature Comparison</th>
                  <th className="p-8 text-xs uppercase tracking-widest font-black text-gray-400 border-b border-white/10 text-center">Standard Films</th>
                  <th className="p-8 text-sm uppercase tracking-widest font-black text-[#d4af37] border-b border-[#d4af37]/30 text-center bg-[#d4af37]/10">TorqueSkin Elite</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold">
                <ComparisonRow label="Healing Tech" standard="Heat Required" torque="Instant Ambient Healing" />
                <ComparisonRow label="Thickness" standard="150 Microns" torque="195+ Microns (Heavy Duty)" />
                <ComparisonRow label="Surface Energy" standard="Low (Holds Dirt)" torque="High Hydrophobic" />
                <ComparisonRow label="Warranty" standard="3 - 5 Years" torque="Up to 10 Years International" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 border-t border-white/10">
        <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-white border-b-4 border-[#d4af37] pb-2 inline-block">
          Installation Journey
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StepCard number="01" icon={<Zap size={24}/>} title="Decon" desc="Full chemical bath & clay bar treatment." />
          <StepCard number="02" icon={<Eye size={24}/>} title="Precision" desc="Digital plotting for zero-blade contact." />
          <StepCard number="03" icon={<Car size={24}/>} title="Expert Wrap" desc="Seamless edge tucking for factory finish." />
          <StepCard number="04" icon={<Award size={24}/>} title="Curing" desc="Heat-bonded long-term durability." />
        </div>
      </section>
    </div>
  );
};

const ComparisonRow = ({ label, standard, torque }) => (
  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
    <td className="p-8 font-black uppercase tracking-wider text-white text-xs">{label}</td>
    <td className="p-8 text-center text-gray-400 italic text-xs">
      <div className="flex items-center justify-center gap-2">
        <XCircle size={16} className="text-red-500/50" />
        <span className="font-semibold">{standard}</span>
      </div>
    </td>
    <td className="p-8 bg-[#d4af37]/5 text-center">
      <div className="flex items-center justify-center gap-2">
        <CheckCircle2 size={20} className="text-[#d4af37]" />
        <span className="text-white font-black italic text-sm tracking-tight">{torque}</span>
      </div>
    </td>
  </tr>
);

const StepCard = ({ number, icon, title, desc }) => (
  <div className="relative p-8 border border-white/20 bg-white/5 rounded-xl group hover:border-[#d4af37] transition-all duration-300">
    <div className="text-[#d4af37] mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <span className="absolute top-4 right-6 text-5xl font-black text-white/5 italic select-none">{number}</span>
    <h4 className="text-sm font-black uppercase italic text-white mb-2 tracking-widest">{title}</h4>
    <p className="text-gray-300 text-[10px] leading-relaxed font-bold uppercase tracking-tight">{desc}</p>
  </div>
);

const StatItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center text-center space-y-2 group">
    <div className="text-[#d4af37] group-hover:scale-110 transition-transform">{icon}</div>
    <div className="text-2xl font-black italic text-white tracking-tighter">{value}</div>
    <div className="text-[10px] uppercase tracking-widest text-gray-300 font-black">{label}</div>
  </div>
);

const LayerInfo = ({ step, title, detail }) => (
  <div className="flex gap-4 items-start border-b border-white/10 pb-4 group last:border-0">
    <span className="text-[#d4af37] font-black italic text-base leading-none">{step}</span>
    <div>
      <h4 className="font-black uppercase text-[10px] tracking-[0.15em] text-white leading-none">{title}</h4>
      <p className="text-gray-200 text-xs mt-2 font-semibold leading-relaxed">{detail}</p>
    </div>
  </div>
);

const ProductCard = ({ title, icon, desc, features }) => (
  <div className="bg-black/40 border border-white/20 p-10 hover:border-[#d4af37] transition-all shadow-2xl backdrop-blur-md group relative">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-2xl font-black uppercase italic mb-3 text-white">{title}</h3>
    <p className="text-gray-200 text-xs mb-8 font-semibold leading-relaxed italic">"{desc}"</p>
    <div className="space-y-3 border-t border-white/10 pt-6">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase text-white tracking-widest">
          <CheckCircle2 size={12} className="text-[#d4af37]" /> {f}
        </div>
      ))}
    </div>
  </div>
);

export default Home;
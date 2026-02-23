import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, ChevronDown, Zap, FileText, Activity, 
  Droplets, Sun, Wind, Eye, Layers, Wrench, CheckCircle2,
  MousePointer2
} from 'lucide-react';
import bgTexture from '../assets/bg-texture.jpg';

import clearImage from '../assets/clear-ppf.png';
import matteImage from '../assets/matte-ppf.png';
import colorImage from '../assets/colour-ppf.png';
import sunfilmImage from '../assets/sun-film2.png';
import windshieldImage from '../assets/windshield.png';

const Products = () => {
  // Updated state to null initially
  const [activeTab, setActiveTab] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const productData = {
    "Clear PPF": {
      imgSrc: clearImage,
      category: "Paint Protection Film",
      tagline: "Transparent High-Gloss Armor",
      description: "Advanced TPU protection available in three elite tiers to preserve factory paint with self-healing technology and optical clarity.",
      tiers: [
        { name: "Torqueskin Element", detail: "5 Years Warranty" },
        { name: "Torqueskin Armor", detail: "7 Years Warranty" },
        { name: "Torqueskin Armor Pro", detail: "10 Years Warranty" }
      ],
      specs: [
        { label: "Base Material", value: "Aliphatic TPU" },
        { label: "Thickness", value: "195+ Microns" },
        { label: "Finish", value: "Ultra Glossy" },
        { label: "Healing", value: "Instant Self-Healing" }
      ],
      features: ["Optical Grade Transparency", "Non-Yellowing UV Shield", "Advanced Puncture Resistance"],
      performance: [
        { icon: <Activity />, title: "Self-Healing", desc: "Heat-activated swirl removal" },
        { icon: <Droplets />, title: "Hydrophobic", desc: "Easy-clean water repelling" },
        { icon: <Eye />, title: "Ultra Clarity", desc: "Zero orange peel texture" },
        { icon: <Wind />, title: "Impact Guard", desc: "High-density rock chip defense" }
      ],
      composition: ["High-Gloss Clear Coat", "Self-Healing Layer", "Aliphatic TPU Base", "Pressure Sensitive Adhesive"],
      maintenance: "Use pH-neutral soap. Avoid pressure washing within 48 hours of install."
    },
    "Matte PPF": {
      imgSrc: matteImage,
      category: "Paint Protection Film",
      tagline: "Torqueskin Satin Lite",
      description: "Transform gloss into a premium satin-matte finish while maintaining heavy-duty environmental protection.",
      tiers: [{ name: "Torqueskin Satin Lite", detail: "5 Years Warranty" }],
      specs: [
        { label: "Base Material", value: "Matte TPU" },
        { label: "Thickness", value: "190+ Microns" },
        { label: "Appearance", value: "Satin Stealth" },
        { label: "Maintenance", value: "Fingerprint Resistant" }
      ],
      features: ["Satin Silk Texture", "Deep Matte Pigmentation", "Stain Resistance Coating"],
      performance: [
        { icon: <Shield />, title: "Satin Finish", desc: "Non-reflective stealth look" },
        { icon: <Sun />, title: "Anti-Yellowing", desc: "High UV stability" },
        { icon: <Droplets />, title: "Dirt Repellent", desc: "Low surface energy coating" },
        { icon: <Activity />, title: "Edge Tuck", desc: "High stretch for seamless wrap" }
      ],
      composition: ["Matte Satin Topcoat", "Impact-Absorption TPU", "Non-Yellowing Adhesive"],
      maintenance: "Avoid waxes or polishes. Use specific matte-safe cleaning agents."
    },
    "Color PPF": {
      imgSrc: colorImage,
      category: "Paint Protection Film",
      tagline: "Rainbow Edition Series",
      description: "Elite 7-layer TPU structure with nano-pigments for deep color transformation and maximum shield strength.",
      tiers: [
        { name: "Torqueskin Rainbow", detail: "Black Edition" },
        { name: "Torqueskin Rainbow", detail: "White Edition" }
      ],
      specs: [
        { label: "Structure", value: "7-Layer TPU" },
        { label: "Color Type", value: "Nano-Pigment" },
        { label: "Finish", value: "Paint-Like Depth" },
        { label: "UV Block", value: "99% Protection" }
      ],
      features: ["Color Stability Tech", "High Impact Shield", "Nano-Pigment Saturation"],
      performance: [
        { icon: <Activity />, title: "Color Depth", desc: "Rich pigment saturation" },
        { icon: <Shield />, title: "Armor Level", desc: "Heavy-duty stone guard" },
        { icon: <Droplets />, title: "Self-Cleaning", desc: "Nano-ceramic top coat" },
        { icon: <Sun />, title: "Fade Guard", desc: "Extreme pigment stability" }
      ],
      composition: ["Nano-Pigment Layer", "7-Layer TPU Core", "UV Stabilizer Film"],
      maintenance: "Clean with soft microfiber. Treat like high-end automotive paint."
    },
    "Sunfilm": {
      imgSrc: sunfilmImage,
      category: "Window Tinting Solution",
      tagline: "Thermal Management Series",
      description: "High-performance automotive window films designed for maximum heat rejection and cabin cooling.",
      tiers: [
        { name: "Torqueskin Therm-X", detail: "3 & 5 Year Options" },
        { name: "Torqueskin Optix", detail: "Lifetime Warranty" }
      ],
      specs: [
        { label: "IR Rejection", value: "Up to 98%" },
        { label: "UV Protection", value: "99.9% Block" },
        { label: "Visibility", value: "High Definition" },
        { label: "Glare", value: "Reduced Eye Strain" }
      ],
      features: ["Heat Management Tech", "Signal Friendly Design", "HD Optical Clarity"],
      performance: [
        { icon: <Sun />, title: "Heat Block", desc: "Superior TSER performance" },
        { icon: <Eye />, title: "Privacy", desc: "Enhanced cabin security" },
        { icon: <Wind />, title: "Cooling", desc: "Reduces AC load" },
        { icon: <Activity />, title: "Purity", desc: "Zero signal interference" }
      ],
      composition: ["Scratch Resistant Coating", "Nano-Ceramic Layer", "Deep Dye Polyester", "UV Adhesive"],
      maintenance: "Clean with ammonia-free glass cleaner and soft cloth only."
    },
    "Windshield Protection": {
      imgSrc: windshieldImage,
      category: "External Glass Armor",
      tagline: "TPU Based WPF",
      description: "Impact-absorbing exterior film for windshields to prevent chips and cracks from road debris.",
      tiers: [{ name: "Torqueskin WPF", detail: "Impact Absorption" }],
      specs: [
        { label: "Material", value: "Specialized TPU" },
        { label: "Hardness", value: "9H Equivalent" },
        { label: "Clarity", value: "Optical Grade" },
        { label: "Scratch", value: "Wiper Resistant" }
      ],
      features: ["Grit-Guard Coating", "Energy Dispersion Layer", "Ultra-Smooth Finish"],
      performance: [
        { icon: <Wind />, title: "Impact Defense", desc: "Rock chip energy absorption" },
        { icon: <Droplets />, title: "Hydrophobic", desc: "Enhanced wet weather vision" },
        { icon: <Shield />, title: "Glass Guard", desc: "Prevents costly glass replacement" },
        { icon: <Eye />, title: "Distortion Free", desc: "Zero vision warping" }
      ],
      composition: ["Hydrophobic Topcoat", "9H Shock Absorption TPU", "Optical Grade Adhesive"],
      maintenance: "Ensure wiper blades are clean and free of grit to avoid surface scratches."
    }
  };

  const current = activeTab ? productData[activeTab] : null;

  return (
    <div 
      className="min-h-screen text-white font-sans overflow-x-hidden bg-[#0b0b14]"
      style={{ 
        backgroundImage: `url(${bgTexture})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <div className="min-h-screen w-full bg-black/40 pt-32 pb-16 px-6">
        
        {/* Dropdown Section */}
        <div className="max-w-xl mx-auto mb-16 relative z-50">
          <p className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-center italic">
            Select a solution to view details
          </p>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full bg-black/80 border ${isDropdownOpen ? 'border-[#d4af37]' : 'border-white/10'} p-5 rounded-xl flex justify-between items-center font-black italic uppercase text-xl tracking-tight hover:border-[#d4af37]/50 transition-all shadow-2xl backdrop-blur-xl`}
          >
            {activeTab || "Select Products"}
            <ChevronDown size={20} className={`text-[#d4af37] transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="absolute w-full bg-black border border-white/10 mt-2 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-[60]">
                {Object.keys(productData).map((name) => (
                  <button key={name} className="w-full text-left px-6 py-4 hover:bg-[#d4af37] hover:text-black font-bold italic uppercase border-b border-white/5 transition-all text-sm group flex justify-between items-center"
                    onClick={() => { setActiveTab(name); setIsDropdownOpen(false); }}>
                    {name}
                    <Zap size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {!activeTab ? (
            /* Initial State Before Selection */
            <motion.div 
              key="placeholder"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-4xl mx-auto text-center py-20 border border-white/5 bg-black/20 rounded-3xl backdrop-blur-sm"
            >
              <div className="inline-block p-6 bg-white/5 rounded-full mb-8">
                <MousePointer2 size={48} className="text-[#d4af37] animate-bounce" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Explore Products</h2>
              
            </motion.div>
          ) : (
            /* Product Details State */
            <motion.div 
              key={activeTab} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }} 
              className="container mx-auto max-w-7xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                
                {/* Left Column: Image & Quick Specs */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative aspect-square md:aspect-video bg-black/60 border border-white/10 rounded-2xl overflow-hidden shadow-2xl group flex items-center justify-center cursor-zoom-in">
                     {current.imgSrc ? (
                       <motion.img 
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          whileHover={{ scale: 1.15 }} 
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          src={current.imgSrc} 
                          className="w-full h-full object-cover z-20" 
                          alt={activeTab} 
                       />
                     ) : (
                       <Shield size={100} className="text-[#d4af37] opacity-20 absolute" />
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-30 pointer-events-none" />
                     
                     <div className="absolute bottom-4 right-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-lg backdrop-blur-md border border-white/10">
                        <Eye size={14} className="text-[#d4af37]" />
                     </div>
                  </div>

                  <div className="bg-white/[0.02] p-8 border border-white/10 rounded-2xl">
                     <h4 className="text-[#d4af37] text-[12px] font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-2 italic">
                       <Zap size={16} /> Technical Specifications
                     </h4>
                     <div className="space-y-6">
                       {current.specs.map((s, i) => (
                         <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                           <span className="text-[12px] text-gray-300 font-bold uppercase tracking-widest">{s.label}</span>
                           <span className="text-base font-black uppercase italic text-[#d4af37]">{s.value}</span>
                         </div>
                       ))}
                     </div>
                  </div>

                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-[#d4af37] text-black py-5 rounded-xl text-sm font-black uppercase tracking-widest italic hover:bg-white transition-all shadow-xl active:scale-95"
                  >
                    Request Pricing
                  </button>
                </div>

                {/* Right Column: Product Info */}
                <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em]">
                      <span className="w-6 h-[1px] bg-[#d4af37]"></span> {current.category}
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight mb-2">{activeTab}</h2>
                    <h3 className="text-xl font-bold italic text-gray-400 uppercase tracking-tight">{current.tagline}</h3>
                    
                    <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
                      {current.tiers.map((tier, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl shadow-2xl hover:border-[#d4af37]/50 transition-all min-w-[190px]">
                          <span className="font-black text-white italic block text-sm mb-1 uppercase tracking-tight">{tier.name}</span>
                          <span className="text-[#d4af37] text-[12px] font-black uppercase tracking-[0.1em]">{tier.detail}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium mt-8 pt-8 border-t border-white/10 text-left">
                      {current.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-white/[0.02] p-6 border border-white/10 rounded-2xl">
                        <h4 className="text-[#d4af37] text-[11px] font-black uppercase tracking-[0.2em] mb-5 flex items-center gap-2 italic">
                          <CheckCircle2 size={16} /> Advanced Features
                        </h4>
                        <div className="space-y-3">
                           {current.features.map((feat, idx) => (
                             <div key={idx} className="flex items-center gap-3 text-[11px] font-bold uppercase text-gray-300 text-left">
                               <div className="h-1.5 w-1.5 rounded-full bg-[#d4af37] shrink-0" /> {feat}
                             </div>
                           ))}
                        </div>
                     </div>

                     <div className="bg-white/[0.02] p-6 border border-white/10 rounded-2xl">
                        <h4 className="text-[#d4af37] text-[11px] font-black uppercase tracking-[0.2em] mb-5 flex items-center gap-2 italic">
                          <Layers size={16} /> Film Composition
                        </h4>
                        <div className="space-y-3">
                          {current.composition?.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-[11px] font-bold uppercase text-gray-300 text-left">
                              <span className="text-[#d4af37] font-black">{idx + 1}.</span> {item}
                            </div>
                          ))}
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
                    {current.performance.map((p, i) => (
                      <div key={i} className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left group">
                        <div className="p-3 bg-white/5 text-[#d4af37] rounded-xl group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                          {React.cloneElement(p.icon, { size: 24 })}
                        </div>
                        <div>
                          <h5 className="text-[11px] font-black uppercase italic mb-1 text-white">{p.title}</h5>
                          <p className="text-[9px] text-gray-400 leading-tight uppercase font-bold">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-2xl flex gap-5 items-center">
                     <Wrench size={24} className="text-[#d4af37] shrink-0" />
                     <div className="text-left">
                       <p className="text-[10px] font-black uppercase text-[#d4af37] italic tracking-widest">Care & Maintenance</p>
                       <p className="text-[12px] text-white font-bold uppercase leading-tight mt-1">{current.maintenance}</p>
                     </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products;
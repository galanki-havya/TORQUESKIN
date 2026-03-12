import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, ChevronDown, Zap, Activity, 
  Droplets, Sun, Wind, Eye, Layers, Wrench, CheckCircle2,
  ArrowRight, ShieldCheck, ThermometerSun, X, Maximize2, MousePointer2, ChevronUp
} from 'lucide-react';

import bgTexture from '../assets/bg-texture.jpg';
import armorPro from "../assets/armor-pro.jpg";
import armor from "../assets/armor.jpg";
import element from "../assets/element.jpg";
import satinLite from "../assets/satin-lite.jpg";
import sunfilm from "../assets/sunfilm.jpg";

const Products = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  
  const detailRef = useRef(null);

  useEffect(() => {
    if (activeTab) {
      if (window.innerWidth < 1024) {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [activeTab]);

  const productData = {
    "Armor Pro": {
      imgSrc: armorPro,
      category: "Paint Protection Film",
      description: "Our flagship high-gloss protection solution featuring a Nano Hydrophobic topcoat and advanced Lubrizol material for maximum durability.",
      warranty: "10 Years",
      specs: [
        { label: "Material", value: "Lubrizol Aliphatic TPU" },
        { label: "Topcoat", value: "Nano Hydrophobic" },
        { label: "Adhesive", value: "Ashland Glue" }
      ],
      performance: [
        { icon: <Activity size={20} />, title: "Self-Healing", desc: "Heat activated" },
        { icon: <Shield size={20} />, title: "Anti-Scratch", desc: "Surface Protection" },
        { icon: <Droplets size={20} />, title: "Hydrophobic", desc: "Water repelling" },
        { icon: <Zap size={20} />, title: "Extreme Gloss", desc: "Mirror finish" }
      ]
    },
    "Armor": {
      imgSrc: armor,
      category: "Paint Protection Film",
      description: "Engineered for high-performance defense, Armor provides a crystal-clear shield against debris while maintaining original paint depth with American Tech Nano Ceramic technology.",
      warranty: "7 Years",
      specs: [
        { label: "Technology", value: "American Tech Nano Ceramic" },
        { label: "Core", value: "Aliphatic TPU" },
        { label: "Adhesive", value: "Pressure Sensitive" }
      ],
      performance: [
        { icon: <Wind size={20} />, title: "Impact Guard", desc: "Debris Protection" },
        { icon: <ShieldCheck size={20} />, title: "Self-Cleaning", desc: "Easy Maintenance" },
        { icon: <Activity size={20} />, title: "Heat Recovery", desc: "Swirl Healing" },
        { icon: <CheckCircle2 size={20} />, title: "UV Stable", desc: "Anti-Yellowing" }
      ]
    },
    "Element": {
      imgSrc: element,
      category: "Paint Protection Film",
      description: "A reliable entry-level shield featuring an oxidation barrier and anti-yellowing technology to preserve vehicle aesthetics across all paint surfaces.",
      warranty: "5 Years",
      specs: [
        { label: "Material", value: "TPU Base" },
        { label: "Technology", value: "Oxidation Barrier" },
        { label: "Properties", value: "Anti-Yellowing" }
      ],
      performance: [
        { icon: <CheckCircle2 size={20} />, title: "Anti-Yellow", desc: "UV Resistant" },
        { icon: <Droplets size={20} />, title: "Hydrophobic", desc: "Surface Guard" },
        { icon: <Eye size={20} />, title: "Crystal Clear", desc: "Invisible Shield" },
        { icon: <Layers size={20} />, title: "Oxidation", desc: "Chemical Barrier" }
      ]
    },
    "Satin Lite": {
      imgSrc: satinLite,
      category: "Matte Paint Protection",
      description: "Transform your vehicle with a premium satin-matte texture. Engineered with Lubrizol material and Ashland glue for industry-leading adhesion and a silk finish.",
      warranty: "5 Years",
      specs: [
        { label: "Material", value: "Lubrizol TPU" },
        { label: "Adhesive", value: "Ashland Glue" },
        { label: "Finish", value: "Satin Matte" }
      ],
      performance: [
        { icon: <Layers size={20} />, title: "Silk Texture", desc: "Satin Finish" },
        { icon: <Shield size={20} />, title: "Stain Resist", desc: "Surface Protection" },
        { icon: <Wind size={20} />, title: "Anti-Yellow", desc: "Color Stable" },
        { icon: <Activity size={20} />, title: "Oxidation", desc: "Chemical barrier" }
      ]
    },
    "Sunfilm": {
      imgSrc: sunfilm,
      category: "Window Tinting",
      description: "Professional grade solar protection that blocks 95% of harmful UV rays while providing superior heat protection and reduced glare for a comfortable drive.",
      warranty: "Pro Series",
      specs: [
        { label: "UV Block", value: "95% Protection" },
        { label: "Signal", value: "Signal-Free Tech" },
        { label: "Visibility", value: "Reduced Glare" }
      ],
      performance: [
        { icon: <Sun size={20} />, title: "UV Guard", desc: "95% Block" },
        { icon: <ThermometerSun size={20} />, title: "Heat Protect", desc: "Thermal Shield" },
        { icon: <Eye size={20} />, title: "Reduced Glare", desc: "High Clarity" },
        { icon: <Zap size={20} />, title: "Signal-Free", desc: "No Interference" }
      ]
    }
  };

  const current = activeTab ? productData[activeTab] : null;

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white font-sans selection:bg-[#d4af37]" 
         style={{ backgroundImage: `url(${bgTexture})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      
      <div className="min-h-screen w-full bg-black/60 pt-20 md:pt-24 pb-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 mb-10 md:mb-12">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
                OUR<span className="text-[#d4af37] ml-2 md:ml-4">Products.</span>
              </h1>
              
              <div className="flex justify-center items-center gap-2 md:gap-4 text-[#d4af37]">
                <div className="hidden sm:block h-[1px] w-6 md:w-12 bg-[#d4af37]/40" />
                <ArrowRight size={14} /> 
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] whitespace-nowrap">
                  Select a product from the lineup
                </span>
                <ArrowRight size={14} className="rotate-180" />
                <div className="hidden sm:block h-[1px] w-6 md:w-12 bg-[#d4af37]/40" />
              </div>
            </div>

            <div className="w-full max-w-sm md:max-w-md relative z-50">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-sm flex justify-between items-center font-bold uppercase text-[10px] md:text-[11px] tracking-[0.3em] hover:border-[#d4af37] transition-all group text-white"
              >
                <span className={activeTab ? 'text-[#d4af37]' : 'text-white'}>
                  {activeTab || "Choose a Category"}
                </span>
                <ChevronDown size={18} className={`text-[#d4af37] transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                    className="absolute w-full bg-[#12121d] border border-white/10 mt-2 rounded-sm shadow-2xl overflow-hidden backdrop-blur-xl"
                  >
                    {Object.keys(productData).map((name) => (
                      <button 
                        key={name} 
                        className="w-full text-left px-6 md:px-8 py-4 hover:bg-[#d4af37] hover:text-black font-bold uppercase text-[10px] border-b border-white/5 last:border-0 transition-colors flex justify-between items-center group text-white"
                        onClick={() => { setActiveTab(name); setIsDropdownOpen(false); }}
                      >
                        {name}
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab ? (
              <motion.div 
                ref={detailRef}
                key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start"
              >
                <div className="lg:col-span-7 space-y-4 md:space-y-6">
                  <div 
                    className="relative aspect-video rounded-sm overflow-hidden border border-white/20 bg-black group shadow-2xl cursor-zoom-in"
                    onClick={() => setSelectedImg(current.imgSrc)}
                  >
                    <img src={current.imgSrc} alt={activeTab} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                       <Maximize2 className="text-[#d4af37] w-8 h-8 md:w-10 md:h-10" />
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-[#d4af37] pl-4 md:pl-6">
                    <span className="text-[#d4af37] text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em]">{current.category}</span>
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mt-2 leading-none text-white">{activeTab}</h2>
                  </div>
                  <p className="text-white text-xs md:text-sm leading-relaxed font-normal tracking-wide max-w-2xl bg-white/5 p-4 rounded-sm border border-white/10">
                    {current.description}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-4 md:space-y-6">
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {current.performance.map((p, i) => (
                      <div key={i} className="p-3 md:p-4 bg-white/10 rounded-sm border border-white/10 hover:border-[#d4af37] transition-colors shadow-lg">
                        <div className="text-[#d4af37] mb-2">{p.icon}</div>
                        <h5 className="text-[9px] md:text-[10px] font-black uppercase text-white mb-1">{p.title}</h5>
                        <p className="text-[8px] md:text-[9px] text-gray-300 font-bold uppercase tracking-wider">{p.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-black/60 border border-white/20 rounded-sm p-5 md:p-6 relative overflow-hidden shadow-2xl">
                    <div className="flex justify-between items-center mb-4 md:mb-6">
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/60 flex items-center gap-2">
                        <Layers size={14} /> Technical Core
                      </h4>
                      <span className="text-[8px] md:text-[9px] font-black border-2 border-[#d4af37] text-[#d4af37] px-2 py-1 rounded-sm uppercase">
                        {current.warranty}
                      </span>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      {current.specs.map((s, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                          <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest">{s.label}</span>
                          <span className="text-[10px] md:text-xs font-black italic uppercase text-[#d4af37]">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 md:mt-8 space-y-4">
                      <button onClick={() => navigate('/contact')} className="w-full py-4 bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:scale-[1.01] transition-all duration-300 shadow-xl active:scale-95">
                        Inquire About {activeTab}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex flex-col items-center justify-center -mt-4"
              >
                <motion.div 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[#d4af37] mb-4 flex flex-col items-center gap-1 opacity-40"
                >
                  <ChevronUp size={24} strokeWidth={1} />
                  <div className="h-8 w-[1px] bg-gradient-to-t from-transparent via-[#d4af37] to-transparent" />
                </motion.div>

                <div className="relative overflow-hidden inline-block p-6 md:p-8 border border-white/5 bg-white/5 rounded-sm backdrop-blur-sm text-center min-w-[260px] md:min-w-[300px]">
                   <motion.div 
                    animate={{ left: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent skew-x-12 pointer-events-none"
                   />
                   
                   <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.8em] md:tracking-[1em] text-white/30">
                     Awaiting Selection
                   </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              src={selectedImg} className="max-w-full max-h-full rounded-sm shadow-2xl border border-white/10 object-contain"
              onClick={(e) => e.stopPropagation()} 
            />
            <button className="absolute top-6 right-6 text-white md:hidden" onClick={() => setSelectedImg(null)}>
              <X size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
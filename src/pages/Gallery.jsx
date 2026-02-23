import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Target, X, Maximize2, ShieldCheck, Clock } from 'lucide-react';

// Assets
import bgTexture from '../assets/bg-texture.jpg';
import clearPPF1 from '../assets/clear-ppf.png'; 
import clearPPF from '../assets/clear-ppf2.png';
import clearPPF3 from '../assets/clear-ppf3.png';
import clearPPF4 from '../assets/clear-ppf4.png';
import clearPPF5 from '../assets/clear-ppf5.png';
import colourPPF1 from '../assets/colour-ppf.png';
import colourPPF2 from '../assets/hero.jpg';
import colourPPF3 from '../assets/colour-ppf3.png';
import colourPPF4 from '../assets/colour-ppf4.png';
import colourPPF5 from '../assets/colour-ppf5.png';
import mattePPF1 from '../assets/matte-ppf.png';
import mattePPF2 from '../assets/matte-ppf2.png';
import mattePPF3 from '../assets/matte-ppf3.png';
import mattePPF4 from '../assets/matter-ppf4.png';
import sunFilm1 from '../assets/sun-film.png';
import sunFilm2 from '../assets/sun-film2.png';
import sunFilm3 from '../assets/sun-film3.png';
import sunFilm4 from '../assets/sun-film4.png';
import sunFilm5 from '../assets/sun-film5.png';
import sunFilm6 from '../assets/sun-film6.png';
import windshield1 from '../assets/windshield.png';
import windshield2 from '../assets/windshield2.png';
import windshield3 from '../assets/windshield3.png';
import windshield4 from '../assets/windshield4.png';
import windshield5 from '../assets/windshield5.png';
import windshield6 from '../assets/windshield6.png';
import WindShield from '../assets/wind-shield.png';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const navigate = useNavigate(); // Initialize navigation hook

  useEffect(() => {
    if (activeAlbum) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeAlbum]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const products = [
    { 
      id: 1, 
      category: 'PPF', 
      title: 'Clear PPF', 
      warranty: '10 Years Warranty', 
      src: clearPPF, 
      album: [clearPPF1, clearPPF3, clearPPF4, clearPPF5], 
      span: "lg:col-span-8 h-[500px]",
      description: "Our signature Ultra-Gloss TPU film provides an invisible shield against rock chips, scratches, and chemical stains. Featuring advanced self-healing technology, swirl marks disappear with simple heat exposure.",
      features: ["Self-Healing TPU", "Non-Yellowing", "Hydrophobic Finish"]
    },
    { 
      id: 2, 
      category: 'PPF', 
      title: 'Colour PPF', 
      warranty: 'Custom Color Finish', 
      src: colourPPF2, 
      album: [colourPPF1, colourPPF3, colourPPF4, colourPPF5], 
      span: "lg:col-span-4 h-[500px]",
      description: "Combine the protection of PPF with the aesthetics of a premium wrap. Our Color PPF offers deep pigment saturation and a paint-like finish that standard vinyl cannot match.",
      features: ["High-Depth Pigment", "Full Body Coverage", "Instant Makeover"]
    },
    { 
      id: 3, 
      category: 'PPF', 
      title: 'Matte PPF', 
      warranty: '5 Years Warranty', 
      src: mattePPF2, 
      album: [mattePPF1, mattePPF2, mattePPF3, mattePPF4], 
      span: "lg:col-span-4 h-[400px]",
      description: "Transform your glossy paint into a sleek satin finish. Matte PPF provides a smooth, frosted appearance while protecting against the unique maintenance challenges of factory matte paint.",
      features: ["Satin-Sleek Texture", "Stain Resistant", "UV Protection"]
    },
    { 
      id: 4, 
      category: 'Sunfilm', 
      title: 'Sun Film', 
      warranty: 'Ceramic Series', 
      src: sunFilm6, 
      album: [sunFilm6, sunFilm2, sunFilm1, sunFilm5], 
      span: "lg:col-span-4 h-[400px]",
      description: "Nano-Ceramic technology designed to block 99% of harmful UV rays. Enhance your cabin comfort and privacy without compromising night-time visibility.",
      features: ["99% UV Rejection", "Signal Friendly", "Shatter Resistance"]
    },
    { 
      id: 5, 
      category: 'Windshield', 
      title: 'Windshield', 
      warranty: 'Impact Resistance', 
      src: WindShield, 
      album: [windshield1, windshield5, windshield6, windshield4], 
      span: "lg:col-span-4 h-[400px]",
      description: "The ultimate external protection for your glass. This specialized film absorbs the impact of road debris, preventing cracks and costly windshield replacements.",
      features: ["Impact Absorption", "Optical Clarity", "Wiper Friendly"]
    }
  ];

  const categories = ['All', 'PPF', 'Sunfilm', 'Windshield'];
  const filteredProducts = filter === 'All' ? products : products.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#0b0b14] text-white font-sans selection:bg-[#d4af37]" 
         style={{ backgroundImage: `url(${bgTexture})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-[#d4af37] hover:scale-110 transition-transform">
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={selectedImage} 
              className="max-w-full max-h-[85vh] object-contain border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen w-full bg-black/50 pt-32 pb-20 px-6 transition-all duration-700 ${selectedImage ? 'blur-md' : ''}`}>
        <div className="max-w-7xl mx-auto relative z-10">
          
          <AnimatePresence mode="wait">
            {!activeAlbum ? (
              <motion.div key="grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#d4af37]">
                        <Target size={18} />
                        <span className="text-[10px] font-black uppercase tracking-[0.8em]">TorqueSkin Professional Logs</span>
                    </div>
                    <h1 className="text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                      THE<span className="text-[#d4af37] text-outline ml-4">GALLERY.</span>
                    </h1>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button 
                        key={cat} onClick={() => setFilter(cat)} 
                        className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest border transition-all duration-500 ${filter === cat ? 'bg-[#d4af37] border-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20' : 'border-white/10 text-gray-500 hover:text-white bg-black/20'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id} layout
                      onClick={() => setActiveAlbum(product)}
                      className={`relative group cursor-pointer overflow-hidden rounded-sm border border-white/5 transition-all duration-700 ${product.span}`}
                    >
                      <img src={product.src} alt={product.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-20 group-hover:scale-110 transition-all duration-[1.5s]" />
                      <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
                        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 size={20} className="text-[#d4af37]" />
                        </div>
                        <div className="space-y-2">
                          <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em]">{product.warranty}</span>
                          <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">{product.title}</h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="album" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                <button onClick={() => setActiveAlbum(null)} className="group flex items-center gap-3 text-[#d4af37] mb-12 font-bold uppercase tracking-[0.4em] text-[10px] hover:text-white transition-all">
                  <ChevronLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> Back to Gallery
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  
                  <div className="lg:col-span-4 space-y-10">
                    <div className="border-l-2 border-[#d4af37] pl-6">
                      <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em]">{activeAlbum.category}</span>
                      <h2 className="text-6xl font-black italic uppercase tracking-tighter mt-4 leading-none">{activeAlbum.title}</h2>
                    </div>

                    <div className="space-y-6">
                      <p className="text-gray-400 text-sm leading-relaxed font-light tracking-wide">
                        {activeAlbum.description}
                      </p>

                      <div className="space-y-4 pt-4">
                        {activeAlbum.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                            <ShieldCheck size={14} className="text-[#d4af37]" /> {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                        <div className="flex items-center gap-4">
                            <Clock className="text-[#d4af37]" size={20}/>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Duration</p>
                                <p className="text-sm font-bold text-[#d4af37]">{activeAlbum.warranty}</p>
                            </div>
                        </div>
                    </div>

                    {/* UPDATED BUTTON: Navigates to /contact on click */}
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full py-4 bg-transparent border border-[#d4af37]/30 hover:bg-[#d4af37] hover:text-black transition-all duration-500 text-[10px] font-black uppercase tracking-[0.3em]"
                    >
                      Book This Treatment
                    </button>
                  </div>

                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
                    {activeAlbum.album.map((img, index) => (
                      <motion.div 
                        key={index} 
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedImage(img)}
                        className="aspect-video bg-black/40 border border-white/5 overflow-hidden group cursor-zoom-in relative rounded-sm"
                      >
                        <img src={img} alt="work detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 size={24} className="text-[#d4af37] scale-50 group-hover:scale-100 transition-transform" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .text-outline {
          -webkit-text-stroke: 1.5px rgba(212, 175, 55, 0.4);
          color: transparent;
        }
      `}} />
    </div>
  );
};

export default Gallery;
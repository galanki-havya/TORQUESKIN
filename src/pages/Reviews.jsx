import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, ArrowRight } from 'lucide-react';
import bgTexture from '../assets/bg-texture.jpg';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    const removeBadge = () => {
      const badges = document.querySelectorAll(
        'a[href*="elfsight.com"], ' +
        '[class*="WidgetBadge__BadgeContainer"], ' +
        '[class*="Badge__Container"], ' +
        'div[style*="z-index: 999999"]'
      );
      badges.forEach(badge => badge.remove());
    };

    const observer = new MutationObserver(removeBadge);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0b0b12] text-white font-sans selection:bg-[#d4af37]"
      style={{ 
        backgroundImage: `url(${bgTexture})`, 
        backgroundAttachment: 'fixed', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(1.15) contrast(1.1)' 
      }}
    >
      <div className="min-h-screen w-full bg-gradient-to-b from-black/30 via-transparent to-black/50 pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 backdrop-blur-[0.5px]">
        
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(11,11,18,0.3)_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            
            <div className="lg:col-span-4 space-y-8 md:space-y-10 lg:sticky lg:top-32">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#d4af37]">
                  <Award size={16} md:size={18} />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.8em]">Feynlab Certified</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
                  CLIENT<br />
                  <span className="text-[#d4af37] text-outline">VOICES.</span>
                </h1>
              </div>

              <div className="space-y-6 border-l border-[#d4af37]/40 pl-4 md:pl-6">
                <p className="text-white text-xs md:text-sm leading-relaxed font-semibold drop-shadow-md">
                  Real experiences from 190+ enthusiasts. We maintain a 4.6-star standard at the India HQ, ensuring every vehicle leaves with a showroom finish.
                </p>
                
                <div className="flex items-center gap-4 text-[#d4af37] bg-black/50 p-3 rounded-sm border border-white/10 w-fit backdrop-blur-md">
                   <div className="flex gap-1">
                     {[...Array(5)].map((_, i) => <Star key={i} size={12} md:size={14} fill="#d4af37" />)}
                   </div>
                   <span className="text-lg md:text-xl font-black italic">4.6 / 5.0</span>
                </div>
              </div>

              <a 
                href="https://share.google/eXHVnbuaqbx1Z91qN" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between px-6 md:px-8 py-4 md:py-5 bg-[#d4af37] text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-2xl active:scale-95"
              >
                Rate Our Studio <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="lg:col-span-8">
              <div className="relative w-full rounded-sm overflow-hidden">
                <div className="relative z-10 bg-black/5 backdrop-blur-md border border-white/10 p-1 md:p-6 rounded-lg">
                  <div 
                    className="elfsight-app-7a6ed715-5bc4-48d8-91d3-0adf83256b6c" 
                  ></div>
                </div>
                <Quote className="absolute -bottom-10 -right-10 text-white/10 pointer-events-none hidden sm:block" size={240} />
              </div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-outline { -webkit-text-stroke: 1px rgba(212, 175, 55, 0.8); color: transparent; }
        @media (min-width: 768px) {
          .text-outline { -webkit-text-stroke: 1.5px rgba(212, 175, 55, 0.8); }
        }

        /* 1. BRIGHTEN "What Our Customers Say" HEADER */
        [class*="Header__Title"], 
        [class*="WidgetTitle__TitleContent"],
        .elfsight-app-7a6ed715-5bc4-48d8-91d3-0adf83256b6c h1,
        .elfsight-app-7a6ed715-5bc4-48d8-91d3-0adf83256b6c h2 {
          color: #ffffff !important;
          text-shadow: 0 0 15px rgba(255,255,255,0.3) !important;
          font-weight: 800 !important;
          opacity: 1 !important;
          font-size: 24px !important;
        }

        /* 2. ELFSIGHT CORE FIXES */
        .elfsight-app-7a6ed715-5bc4-48d8-91d3-0adf83256b6c,
        .elfsight-app-7a6ed715-5bc4-48d8-91d3-0adf83256b6c > div {
          background: transparent !important;
          box-shadow: none !important;
        }

        /* 3. PERMANENT BADGE REMOVAL */
        [class*="WidgetBadge__BadgeContainer"],
        [class*="Badge__Container"],
        [class*="Badge__Inner"],
        .elfsight-app-7a6ed715-5bc4-48d8-91d3-0adf83256b6c a[href*="elfsight.com"],
        div[style*="z-index: 999999"] {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          opacity: 0 !important;
          margin: 0 !important;
        }

        /* 4. REVIEW CARDS */
        [class*="ReviewCard__Container"], 
        [class*="ReviewCard__Inner"],
        [class*="ReviewCard__Component"] {
          background-color: rgba(0, 0, 0, 0.45) !important; 
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          backdrop-filter: blur(12px) !important;
          border-radius: 12px !important;
          margin-bottom: 20px !important;
          padding: 15px !important;
        }

        /* 5. TEXT AND STARS */
        [class*="ReviewCard__AuthorName"],
        [class*="ReviewCard__Text"],
        [class*="ReviewCard__ReviewText"] {
          color: #ffffff !important;
          text-shadow: 0 2px 4px rgba(0,0,0,0.8);
          font-size: 13px !important;
        }

        [class*="Star__StarIcon"], 
        [class*="Rating__Star"] svg {
          fill: #d4af37 !important;
          color: #d4af37 !important;
        }

        /* 6. LOAD MORE BUTTON */
        [class*="Button__ButtonContainer"] button {
          background: #d4af37 !important;
          color: black !important;
          font-weight: 900 !important;
          border-radius: 4px !important;
          padding: 12px 24px !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          font-size: 10px !important;
        }
      `}} />
    </motion.div>
  );
};

export default Reviews;
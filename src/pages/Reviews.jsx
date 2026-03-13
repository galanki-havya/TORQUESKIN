import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, ArrowRight } from 'lucide-react';
import bgTexture from '../assets/bg-texture.jpg';

const Reviews = () => {
  useEffect(() => {
    const container = document.querySelector(
      ".elfsight-app-7a6ed715-5bc4-48d8-91d3-0adf83256b6c"
    );

    if (!container) return;

    const removeBadges = () => {
      const badges = document.querySelectorAll(
        'a[href*="elfsight.com"],' +
        '[class*="Badge"],' +
        '[class*="badge"],' +
        '[class*="Toolbar"],' +
        '.eapps-widget-toolbar,' +
        '.eapps-widget-toolbar-link,' +
        '.eapps-widget-toolbar-panel,' +
        'div[style*="z-index: 999999"]'
      );

      badges.forEach((b) => {
        if (b && b.parentNode) {
          b.parentNode.removeChild(b);
        }
      });
    };

    const loadWidget = () => {
      if (document.querySelector('script[src*="elfsight.com"]')) return;

      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);

      setTimeout(removeBadges, 3000);
      setTimeout(removeBadges, 6000);
      setTimeout(removeBadges, 9000);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadWidget();
          observer.disconnect(); 
        }
      },
      { 
        threshold: 0.01,
        rootMargin: "200px"
      }
    );

    observer.observe(container);

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
      <div className="min-h-screen w-full bg-gradient-to-b from-black/60 via-black/20 to-black/80 pt-20 md:pt-32 pb-12 px-4 md:px-8 backdrop-blur-[0.5px]">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(11,11,18,0.4)_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="w-full lg:col-span-5 space-y-8 md:space-y-10 lg:sticky lg:top-32">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#d4af37]">
                  <Award size={16} className="md:w-5 md:h-5" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em]">Feynlab Certified</span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
                  CLIENT<br />
                  <span className="text-[#d4af37] text-outline">VOICES.</span>
                </h1>
              </div>

              <div className="space-y-6 border-l-2 border-[#d4af37]/60 pl-5 md:pl-8">
                <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium">
                  Real experiences from 190+ enthusiasts. We maintain a 4.6-star standard at the India HQ, ensuring every vehicle leaves with a showroom finish.
                </p>
                <div className="flex items-center gap-4 bg-black/40 backdrop-blur-xl p-4 rounded border border-white/5 w-fit">
                   <div className="flex gap-1">
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#d4af37]" color="transparent" />)}
                   </div>
                   <span className="text-xl md:text-2xl font-black italic">4.6 / 5.0</span>
                </div>
              </div>

              <a 
                href="https://share.google/eXHVnbuaqbx1Z91qN" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between px-8 py-5 bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-2xl active:scale-95 w-full sm:w-fit"
              >
                Rate Our Studio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="w-full lg:col-span-7">
              <div className="relative w-full">
                <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-6 rounded-xl">
                  <div className="elfsight-app-7a6ed715-5bc4-48d8-91d3-0adf83256b6c min-h-[500px]"></div>
                </div>
                <Quote className="absolute -bottom-12 -right-6 text-white/5 pointer-events-none hidden lg:block" size={200} />
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

        .eapps-widget-toolbar, 
        .eapps-widget-toolbar-link, 
        .eapps-widget-toolbar-panel,
        [class*="WidgetBadge__BadgeContainer"], 
        [class*="Badge__Container"], 
        [class*="Badge__Inner"],
        a[href*="elfsight.com"],
        div[style*="z-index: 999999"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          pointer-events: none !important;
        }

        [class*="Header__Title"], [class*="WidgetTitle__TitleContent"] {
          color: #ffffff !important;
          text-shadow: 0 0 15px rgba(255,255,255,0.3) !important;
        }
        [class*="ReviewCard__Container"] {
          background-color: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          backdrop-filter: blur(12px) !important;
        }
        [class*="Star__StarIcon"], [class*="Rating__Star"] svg {
          fill: #d4af37 !important;
          color: #d4af37 !important;
        }
      `}} />
    </motion.div>
  );
};

export default Reviews;
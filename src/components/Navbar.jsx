import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import myLogo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? 'bg-[#0b0b14]/95 backdrop-blur-xl py-4 border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={myLogo} 
              alt="TorqueSkin Logo" 
              className="h-10 w-auto object-contain brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300" 
            />
            <span className="text-2xl font-black tracking-[0.15em] text-white uppercase italic">
              TORQUE<span className="text-[#d4af37] not-italic">SKIN</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-9">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    className={`text-[11px] uppercase tracking-[0.3em] font-black transition-all duration-300 relative group py-2 ${
                      isActive ? 'text-[#d4af37]' : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4af37]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link 
              to="/contact" 
              className="flex items-center gap-3 bg-[#d4af37] text-black px-7 py-3 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
            >
              <Phone size={14} fill="black" />
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#d4af37] p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden absolute top-full left-0 w-full bg-[#0b0b14] border-b border-white/10 px-8 py-12 flex flex-col gap-8 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-black uppercase tracking-[0.2em] ${
                location.pathname === link.path ? 'text-[#d4af37]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-[#d4af37] text-black text-center py-5 rounded-sm font-black uppercase tracking-[0.3em]"
          >
            Get In Touch
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
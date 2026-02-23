import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, Facebook, Mail, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 bg-black border-t border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        
        <div className="col-span-1">
          <Link to="/">
            <h3 className="text-xl font-black italic tracking-tighter mb-4 cursor-pointer">
              TORQUE<span className="text-[#d4af37]">SKIN</span>
            </h3>
          </Link>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-xs">
            Engineered protection for high-performance automotive surfaces. Global standards, precision application.
          </p>
        </div>

        <div className="flex flex-col md:items-center">
          <div className="space-y-3">
            <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#d4af37] mb-4">Navigation</h4>
            <ul className="text-[10px] font-bold uppercase tracking-widest text-gray-400 space-y-2">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:items-end">
          <div className="space-y-3">
            <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#d4af37] mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <SocialIcon icon={<Instagram size={16}/>} link="https://www.instagram.com/feynlab_bengaluru" />
              <SocialIcon icon={<Facebook size={16}/>} link="https://www.facebook.com/582301508860822/" />
            </div>
            <div className="space-y-2">
              <FooterContact icon={<Mail size={12}/>} text="felicitydetailingstudio@gmail.com" />
              <FooterContact icon={<Phone size={12}/>} text="+91 81471 48148" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-600">
          © {new Date().getFullYear()} TORQUESKIN India.
        </p>
        <div className="flex gap-6 text-[8px] font-black uppercase tracking-widest text-gray-600">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-8 h-8 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all cursor-pointer"
  >
    {icon}
  </a>
);

const FooterContact = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors cursor-pointer">
    <span className="text-[#d4af37]">{icon}</span>
    {text}
  </div>
);

export default Footer;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, CheckCircle, MessageCircle, Send, RefreshCw
} from 'lucide-react';
import bgTexture from '../assets/bg-texture.jpg';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const whatsappNumber = "+918147148148";
  
  const mapsUrl = "https://maps.app.goo.gl/og4JqvugeGU0Dt7Py";

  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3887.97017637402!2d77.59955147585324!3d12.973740915159051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16798ca4a6a3%3A0xe5c108c1f02da323!2sPhoenix%20Towers!5e0!3m2!1sen!2sin!4v1707058200000!5m2!1sen!2sin";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-white font-sans bg-[#0b0b14]">
      <div 
        className="fixed inset-0 opacity-40 pointer-events-none z-0"
        style={{ 
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      />

      <AnimatePresence>
        {submitted && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed top-10 left-1/2 z-[10000] bg-[#d4af37] text-black px-8 py-4 flex items-center gap-4 shadow-2xl border-b-4 border-black/20"
          >
            <CheckCircle size={24} />
            <div className="font-black italic uppercase text-sm tracking-tight">
              Transmission Confirmed! <span className="block font-bold text-[10px] opacity-80">Our technicians are reviewing your request.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 pt-28 pb-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] italic">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-2 uppercase italic tracking-tighter leading-none">
              Inquiry <span className="text-[#d4af37]">Portal.</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row bg-transparent rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl">
            
            <div className="lg:w-[30%] bg-black/60 backdrop-blur-md p-8 md:p-10 border-r border-white/10">
              <h2 className="text-white text-xl font-black italic uppercase mb-8 border-l-4 border-[#d4af37] pl-4">Direct Contacts</h2>
              
              <div className="space-y-4">
                <ContactDetail 
                  icon={<Phone size={16}/>}
                  label="Call Us"
                  value="+91 81471 48148"
                />
                <ContactDetail 
                  icon={<Mail size={16}/>}
                  label="Email"
                  value="felicitydetailingstudio@gmail.com"
                />
                <ContactDetail 
                  icon={<MapPin size={16}/>}
                  label="Location"
                  value="Phoenix Towers, Museum Rd, Bengaluru"
                />
              </div>
            </div>

            <div className="lg:w-[70%] bg-black/40 backdrop-blur-md p-8 md:p-10 relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                       <Send size={100} className="text-white" />
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black text-[#d4af37] uppercase tracking-widest ml-1">Full Name</label>
                        <input required type="text" placeholder="YOUR NAME" className="w-full bg-white/5 border border-white/10 p-3 text-xs font-bold focus:border-[#d4af37] outline-none text-white placeholder:text-gray-600 transition-all" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1">
                          <label className="text-[9px] font-black text-[#d4af37] uppercase tracking-widest ml-1">Email Address</label>
                          <input required type="email" placeholder="MAIL@EXAMPLE.COM" className="w-full bg-white/5 border border-white/10 p-3 text-xs font-bold focus:border-[#d4af37] outline-none text-white placeholder:text-gray-600 transition-all" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black text-[#d4af37] uppercase tracking-widest ml-1">Phone Number</label>
                          <input required type="tel" placeholder="+91 ..." className="w-full bg-white/5 border border-white/10 p-3 text-xs font-bold focus:border-[#d4af37] outline-none text-white placeholder:text-gray-600 transition-all" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black text-[#d4af37] uppercase tracking-widest ml-1">Your Message</label>
                        <textarea rows="3" placeholder="CAR MODEL & SERVICE REQUIRED" className="w-full bg-white/5 border border-white/10 p-3 text-xs font-bold focus:border-[#d4af37] outline-none text-white placeholder:text-gray-600 transition-all resize-none"></textarea>
                      </div>

                      <button type="submit" className="w-full md:w-auto bg-[#d4af37] text-black font-black uppercase italic tracking-[0.2em] px-10 py-4 text-[10px] hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] active:scale-95">
                        Transmit Message
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af37]/10 border border-[#d4af37] mb-4">
                      <CheckCircle size={40} className="text-[#d4af37]" />
                    </div>
                    <h2 className="text-3xl font-black uppercase italic tracking-tighter">Inquiry <span className="text-[#d4af37]">Received</span></h2>
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wide max-w-sm mx-auto leading-relaxed">
                      Thank you for choosing TorqueSkin. A protection specialist will contact you within 24 hours to discuss your vehicle requirements.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="flex items-center gap-2 mx-auto text-[9px] font-black uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors"
                    >
                      <RefreshCw size={12} /> Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-none">Visit Our <span className="text-[#d4af37]">Studio</span></h2>
                <p className="text-gray-500 text-[9px] font-black tracking-widest uppercase mt-1">Premium Detailing Hub — Bengaluru</p>
              </div>
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="border border-white/20 px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Get Directions
              </a>
            </div>
            
            <div className="h-[450px] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.997668302333!2d77.6019384750765!3d12.972000687343389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b85a381abd%3A0xad6b77be081682d6!2sFEYNLAB%20Car%20Detailing%20Studio%20%7C%20Ceramic%20Coating%20%26%20PPF%20Application%20%7C%20India%20HQ!5e0!3m2!1sen!2sin!4v1770216027616!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale brightness-50 contrast-125 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                title="TorqueSkin Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 bg-[#25D366] p-3 rounded-full shadow-2xl z-[50] hover:scale-110 transition-transform">
        <MessageCircle size={24} fill="white" stroke="none" />
      </a>
    </div>
  );
};

const ContactDetail = ({ icon, label, value }) => (
  <div className="bg-white/5 p-4 border border-white/5 group hover:border-[#d4af37]/50 transition-all">
    <div className="flex items-center gap-3 mb-1">
      <div className="text-[#d4af37]">{icon}</div>
      <p className="text-[9px] font-black text-[#d4af37] uppercase tracking-[0.2em]">{label}</p>
    </div>
    <p className="text-white font-bold text-xs tracking-tight leading-snug">{value}</p>
  </div>
);

export default Contact;
"use client";
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Clock } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaFacebook } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactMain() {
  const containerRef = useRef(null);
  const [formStatus, setFormStatus] = useState('idle');

  useGSAP(() => {
    gsap.from(".contact-elem", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div ref={containerRef} className="w-full relative z-10">
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Left: Form (Envelope Style) */}
          <div className="contact-elem w-full lg:w-[60%] flex flex-col mt-10 lg:mt-0">
            <div className="relative w-full group flex justify-center">
              
              {/* Envelope Back */}
              <div className="absolute bottom-0 left-0 right-0 w-full z-0 h-48 md:h-64 bg-[#FFDDAA] rounded-sm shadow-sm"></div>

              {/* The Letter */}
              <div className="relative z-10 w-[92%] md:w-[88%] bg-white p-6 md:p-10 rounded-t-xl shadow-md border-2 border-b-0 border-dashed border-[#675E50]/20 pb-42 md:pb-48 transition-transform duration-700 ease-out group-hover:-translate-y-12">
                <div className="text-center mb-10">
                  <h2 className="font-heading text-3xl md:text-4xl text-text-primary lowercase">drop us a note</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="font-medium text-[#675E50] text-lg leading-loose">
                  <div className="flex flex-wrap items-end gap-2 mb-6">
                    <span className="mb-1 text-[15px] md:text-[18px]">my name is</span>
                    <input 
                      type="text" 
                      required
                      className="flex-grow min-w-[200px] border-b-2 border-dashed border-[#E8E0D5] bg-transparent focus:outline-none focus:border-secondary px-2 py-1 text-center text-text-primary transition-colors text-[15px] md:text-[18px]"
                    />
                  </div>

                  <div className="flex flex-wrap items-end gap-2 mb-6">
                    <span className="mb-1 text-[15px] md:text-[18px]">, my email address is</span>
                    <input 
                      type="email" 
                      required
                      className="flex-grow min-w-[250px] border-b-2 border-dashed border-[#E8E0D5] bg-transparent focus:outline-none focus:border-secondary px-2 py-1 text-center text-text-primary transition-colors text-[15px] md:text-[18px]"
                    />
                  </div>

                  <div className="flex flex-wrap items-end gap-2 mb-3">
                    <span className="mb-1 text-[15px] md:text-[18px]">, i am contacting you regarding</span>
                    <input 
                      type="text" 
                      required
                      className="flex-grow min-w-[200px] border-b-2 border-dashed border-[#E8E0D5] bg-transparent focus:outline-none focus:border-secondary px-2 py-1 text-center text-text-primary transition-colors text-[15px] md:text-[18px]"
                    />
                  </div>

                  <div className="mb-0 mt-10">
                    <span className="block mb-2 text-[15px] md:text-[18px]">i want to tell you that:</span>
                    <textarea 
                      required
                      rows="3"
                      className="w-full border-b-2 border-dashed border-[#E8E0D5] bg-transparent focus:outline-none focus:border-secondary px-2 py-1 text-text-primary resize-none transition-colors text-[15px] md:text-[18px]"
                    ></textarea>
                  </div>

                  <div className="mt-8 relative z-20">
                    <Button 
                      variant="secondary" 
                      className="px-8 h-14 text-sm md:text-base rounded-md lowercase"
                      disabled={formStatus !== 'idle'}
                    >
                      {formStatus === 'idle' && "send a message"}
                      {formStatus === 'sending' && "sending..."}
                      {formStatus === 'sent' && "sent! 🚀"}
                    </Button>
                  </div>
                </form>
              </div>

              {/* The Envelope Front */}
              <div className="absolute bottom-0 left-0 right-0 w-full z-20 h-48 md:h-64 pointer-events-none drop-shadow-xl translate-y-1">
                <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
                  {/* Left Flap */}
                  <polygon points="0,0 500,220 0,400" fill="#FFF4D2" />
                  {/* Right Flap */}
                  <polygon points="1000,0 500,220 1000,400" fill="#FFF4D2" />
                  {/* Bottom Flap */}
                  <polygon points="0,400 500,160 1000,400" fill="#FFDDAA" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Info & Map */}
          <div className="w-full md:w-[40%] flex flex-col gap-6">
            
            {/* Info Card */}
            <div className="contact-elem">
              <div className="bg-[#FFEBF7] p-8 rounded-2xl border-2 border-dashed border-[#675E50] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                <h3 className="font-heading text-2xl text-text-primary mb-6">Where to find us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-secondary shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-text-primary text-lg">Address</h4>
                      <p className="text-[#675E50] mt-1 text-sm leading-relaxed">Jl. Senopati No.45, Kebayoran Baru, Jakarta Selatan 12190</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-secondary shadow-sm">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-text-primary text-lg">Opening Hours</h4>
                      <p className="text-[#675E50] mt-1 text-sm">Mon - Fri: 08:00 - 22:00</p>
                      <p className="text-[#675E50] text-sm">Sat - Sun: 07:00 - 23:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-secondary shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-text-primary text-lg">Say Hello</h4>
                      <p className="text-[#675E50] mt-1 text-sm">hello@sistechcafe.com</p>
                      <p className="text-[#675E50] text-sm">+62 812-3456-7890</p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-8 pt-6 border-t-2 border-dashed border-[#675E50]/20 flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:-translate-y-1 hover:text-white transition-all shadow-sm">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:-translate-y-1 hover:text-white transition-all shadow-sm">
                    <FaXTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:-translate-y-1 hover:text-white transition-all shadow-sm">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="contact-elem flex-grow min-h-[250px]">
              <div className="w-full h-full rounded-2xl border-2 border-[#675E50] overflow-hidden relative shadow-sm hover:shadow-xl transition-shadow duration-500 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.275466472661!2d106.80556107572702!3d-6.227364160986962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14371e4cb8f%3A0x6b108535a396dc1!2sJl.%20Senopati%20No.45%2C%20Selong%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012110!5e0!3m2!1sen!2sid!4v1704381395000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

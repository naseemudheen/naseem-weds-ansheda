import { motion } from 'framer-motion';
import { Volume2, VolumeX, ChevronDown, CalendarPlus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/ishq_hai.mp3');
    audioRef.current.loop = true;
    
    const attemptPlay = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("Autoplay prevented by browser");
      }
    };
    
    attemptPlay();
    document.addEventListener('click', attemptPlay, { once: true });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      document.removeEventListener('click', attemptPlay);
    };
  }, []);

  const toggleMute = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-dark-bg to-primary-900 pt-8 sm:pt-10 md:pt-14 pb-6 px-4">
      {/* Background Texture Overlay: Arabesque Gold Ring Watermark */}
      <div className="absolute inset-0 opacity-20 bg-arabesque-tile pointer-events-none"></div>
      
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-transparent to-primary-900 z-0"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-400 opacity-25"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.45, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-2 sm:px-4 w-full max-w-2xl mx-auto flex flex-col items-center justify-center flex-1 my-auto">
        
        {/* FIRST PLACE / FIRST STRING: Arabic Bismillahir Rahmanir Rahim */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="flex flex-col items-center mb-3 sm:mb-4"
        >
          <img
            src="/bismillah.png"
            alt="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"
            className="h-11 sm:h-13 md:h-15 w-auto object-contain filter drop-shadow-[0_1px_3px_rgba(168,125,43,0.3)] brightness-90 hover:brightness-100 transition-all"
          />
          <p className="font-serif italic text-gold-600 text-sm sm:text-base md:text-lg tracking-wide mt-2 font-medium">
            With Allah&rsquo;s blessings and grace
          </p>

          {/* Ornate Divider (inspired by shibin-sabeeha invite) */}
          <div className="w-52 sm:w-64 md:w-72 my-2 sm:my-3 text-gold-500">
            <svg viewBox="0 0 280 28" className="w-full h-auto fill-current">
              <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M30 14 H120"/>
                <path d="M160 14 H250"/>
              </g>
              <g fill="currentColor">
                <path d="M120 14 C 128 7, 137 7, 140 14 C 137 21, 128 21, 120 14 Z"/>
                <path d="M160 14 C 152 7, 143 7, 140 14 C 143 21, 152 21, 160 14 Z"/>
                <path d="M140 5 L145 14 L140 23 L135 14 Z"/>
                <circle cx="20" cy="14" r="2.2"/>
                <circle cx="260" cy="14" r="2.2"/>
              </g>
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-2 sm:mb-4 flex flex-col items-center"
        >
          <Logo size="md" className="mb-2.5 sm:mb-3" />
          <p className="font-serif text-gold-600 uppercase tracking-[0.22em] text-xs sm:text-sm md:text-base font-bold">
            Together with our families
          </p>
          <p className="font-serif italic text-cream-200 text-sm sm:text-base md:text-lg mt-1 font-medium max-w-sm sm:max-w-md mx-auto leading-snug">
            request the pleasure of your company to celebrate the wedding union of
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="my-2 sm:my-4 md:my-6 flex flex-col items-center w-full"
        >
          <motion.h1 
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-5xl sm:text-6xl md:text-8xl xl:text-9xl text-gradient-gold drop-shadow-sm pb-1 sm:pb-2 px-2 leading-[1.15]"
          >
            Naseemudheen
          </motion.h1>
          <motion.p 
            animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-3xl sm:text-4xl md:text-6xl text-gold-500 my-0.5 sm:my-2"
          >
            &amp;
          </motion.p>
          <motion.h1 
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="font-script text-5xl sm:text-6xl md:text-8xl xl:text-9xl text-gradient-gold drop-shadow-sm pb-1 sm:pb-2 px-2 leading-[1.15]"
          >
            Ansheda
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-3 sm:mt-5 md:mt-7"
        >
          <p className="font-serif text-cream-200 max-w-lg mx-auto text-sm sm:text-base md:text-lg leading-relaxed italic font-medium px-2">
            &ldquo;With joyous hearts, we invite you to celebrate the union of our hearts and lives.&rdquo;
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        onClick={() => document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' })}
        className="relative z-20 flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity pb-3 sm:pb-6"
      >
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-600 font-bold">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-500"
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.button>

      {/* Floating Add to Calendar Button */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
          'Naseemudheen weds Ansheda - Wedding Reception'
        )}&dates=20261213T053000Z/20261213T093000Z&details=${encodeURIComponent(
          'With joyous hearts, we invite you to celebrate the wedding reception of Naseemudheen & Ansheda on December 13th, 2026 at Green Palace Auditorium, Othukkungal.\n\nLocation: https://maps.app.goo.gl/hUHXXzxFMCqLAF4v9'
        )}&location=${encodeURIComponent('Green Palace Auditorium, Othukkungal')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Add to Calendar"
        className="fixed bottom-4 left-3 sm:bottom-8 sm:left-8 z-50 inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full glass-card text-gold-600 hover:text-gold-700 bg-white/95 border border-gold-400/50 shadow-[0_4px_20px_rgba(168,125,43,0.18)] transition-all font-serif text-xs sm:text-sm uppercase tracking-[0.15em] font-bold cursor-pointer backdrop-blur-md"
      >
        <CalendarPlus size={18} className="text-gold-500 shrink-0" />
        <span>Add to Calendar</span>
      </motion.a>

      {/* Music Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={toggleMute}
        aria-label="Toggle background music"
        className="fixed bottom-4 right-3 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-card flex items-center justify-center text-gold-500 hover:text-gold-600 hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(168,125,43,0.18)] cursor-pointer bg-white/95 border border-gold-400/50 backdrop-blur-md"
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 size={24} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gold-500 rounded-full animate-ping"></span>
          </div>
        ) : (
          <VolumeX size={24} />
        )}
      </motion.button>
    </section>
  );
};

export default Hero;

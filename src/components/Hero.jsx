import { motion } from 'framer-motion';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
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
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-between items-center overflow-hidden bg-gradient-to-b from-dark-bg to-primary-900 pt-6 md:pt-12">
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

      <div className="relative z-10 text-center px-4 w-full mx-auto flex flex-col items-center justify-center flex-1 mt-1 mb-2 md:my-6">
        
        {/* FIRST PLACE / FIRST STRING: Arabic Bismillahir Rahmanir Rahim */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="flex flex-col items-center mb-2"
        >
          <img
            src="/bismillah.png"
            alt="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_1px_3px_rgba(168,125,43,0.3)] brightness-90 hover:brightness-100 transition-all"
          />
          <p className="font-serif italic text-gold-600 text-xs sm:text-sm md:text-base tracking-wide mt-1">
            With Allah&rsquo;s blessings and grace
          </p>

          {/* Ornate Divider (inspired by shibin-sabeeha invite) */}
          <div className="w-48 sm:w-60 md:w-72 my-2 text-gold-500">
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
          className="mb-2 md:mb-4 flex flex-col items-center"
        >
          <Logo size="md" className="mb-2 md:mb-3" />
          <p className="font-serif text-gold-600 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
            Together with our families
          </p>
          <p className="font-serif italic text-cream-200/90 text-xs sm:text-sm md:text-base mt-0.5">
            request the pleasure of your company to celebrate the wedding union of
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="my-3 md:my-6 flex flex-col items-center"
        >
          <motion.h1 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-gradient-gold mb-1 md:mb-3 drop-shadow-sm pb-2 px-4"
          >
            Naseemudheen
          </motion.h1>
          <motion.p 
            animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-4xl sm:text-5xl md:text-6xl text-gold-500 my-1 md:my-3"
          >
            &amp;
          </motion.p>
          <motion.h1 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="font-script text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-gradient-gold drop-shadow-sm pb-2 px-4"
          >
            Ansheda
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-4 md:mt-8"
        >
          <p className="font-serif text-cream-200/90 max-w-xl mx-auto text-sm md:text-base leading-relaxed italic">
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
        className="relative z-20 flex flex-col items-center justify-center gap-1 md:gap-2 cursor-pointer hover:opacity-80 transition-opacity pb-4 md:pb-8"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-600 font-semibold">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-500"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      {/* Music Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={toggleMute}
        aria-label="Toggle background music"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center text-gold-500 hover:text-gold-600 hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(168,125,43,0.18)] cursor-pointer"
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 size={24} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-500 rounded-full animate-ping"></span>
          </div>
        ) : (
          <VolumeX size={24} />
        )}
      </motion.button>
    </section>
  );
};

export default Hero;

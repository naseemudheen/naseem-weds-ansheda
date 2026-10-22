import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CoupleIntro = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="couple" className="py-12 md:py-24 px-4 bg-gradient-to-b from-primary-900 to-dark-bg relative pb-20 md:pb-24">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-15 bg-arabesque-tile pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-14"
        >
          <h2 className="font-script text-4xl md:text-6xl text-gold-500 mb-2 md:mb-3">The Couple</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* Main Layout — side-by-side on desktop, cleanly stacked on mobile */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8">

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.015, y: -4 }}
            transition={{ duration: 0.8 }}
            className="w-full md:flex-1 glass-card rounded-2xl relative p-2 shadow-[0_12px_36px_rgba(168,125,43,0.1)] transition-all flex flex-col"
          >
            {/* Inner Gold Foil Frame */}
            <div className="border border-gold-400/35 rounded-xl p-6 sm:p-8 flex-1 flex flex-col justify-between items-center text-center bg-white/40">
              
              {/* Header: Name & Role */}
              <div className="flex flex-col items-center w-full">
                <h3 className="font-script text-5xl sm:text-6xl md:text-7xl text-gradient-gold mb-2 leading-tight">
                  Naseemudheen
                </h3>
                <span className="inline-block px-3.5 py-0.5 bg-primary-800/80 border border-gold-400/40 rounded-full font-serif text-gold-600 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold mb-3">
                  The Groom
                </span>
                <p className="font-serif italic text-cream-100 text-sm sm:text-base">
                  Son of Late Mohammed
                </p>
              </div>

              {/* Ornate Divider */}
              <div className="w-28 my-4 text-gold-400/70">
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

              {/* Residence & Location */}
              <div className="font-serif space-y-0.5 text-center">
                <p className="font-medium text-cream-100 text-base sm:text-lg tracking-wide">
                  Erayassan House
                </p>
                <p className="text-xs sm:text-sm text-gold-600 italic">
                  Mattathur, Malappuram
                </p>
              </div>

            </div>
          </motion.div>

          {/* Decorative divider & */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex md:flex-col items-center justify-center gap-2 my-1 md:my-0 shrink-0 self-center"
          >
            <div className="w-12 md:w-px md:h-16 bg-gradient-to-r md:bg-gradient-to-b from-transparent to-gold-400/60"></div>
            <motion.div
              animate={{ boxShadow: ['0 0 10px rgba(168,125,43,0.15)', '0 0 22px rgba(168,125,43,0.35)', '0 0 10px rgba(168,125,43,0.15)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-11 h-11 md:w-13 md:h-13 flex items-center justify-center rounded-full bg-primary-800 border border-gold-400/80 shadow-md"
            >
              <span className="font-script text-2xl md:text-3xl text-gold-500">&amp;</span>
            </motion.div>
            <div className="w-12 md:w-px md:h-16 bg-gradient-to-l md:bg-gradient-to-t from-transparent to-gold-400/60"></div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.015, y: -4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:flex-1 glass-card rounded-2xl relative p-2 shadow-[0_12px_36px_rgba(168,125,43,0.1)] transition-all flex flex-col"
          >
            {/* Inner Gold Foil Frame */}
            <div className="border border-gold-400/35 rounded-xl p-6 sm:p-8 flex-1 flex flex-col justify-between items-center text-center bg-white/40">

              {/* Header: Name & Role */}
              <div className="flex flex-col items-center w-full">
                <h3 className="font-script text-5xl sm:text-6xl md:text-7xl text-gradient-gold mb-2 leading-tight">
                  Ansheda
                </h3>
                <span className="inline-block px-3.5 py-0.5 bg-primary-800/80 border border-gold-400/40 rounded-full font-serif text-gold-600 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold mb-3">
                  The Bride
                </span>
                <p className="font-serif italic text-cream-100 text-sm sm:text-base">
                  Daughter of Ibrahim
                </p>
              </div>

              {/* Ornate Divider */}
              <div className="w-28 my-4 text-gold-400/70">
                <svg viewBox="0 0 280 28" className="w-full h-auto fill-current">
                  <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M30 14 H120"/>
                    <path d="M160 14 H250"/>
                  </g>
                  <g fill="currentColor">
                    <path d="M120 14 C 128 7, 137 7, 140 14 C 137 21, 128 21, 120 14 Z"/>
                    <path d="M160 14 C 152 7, 143 7, 140 14 C 137 21, 152 21, 160 14 Z"/>
                    <path d="M140 5 L145 14 L140 23 L135 14 Z"/>
                    <circle cx="20" cy="14" r="2.2"/>
                    <circle cx="260" cy="14" r="2.2"/>
                  </g>
                </svg>
              </div>

              {/* Residence & Location */}
              <div className="font-serif space-y-0.5 text-center">
                <p className="font-medium text-cream-100 text-base sm:text-lg tracking-wide">
                  Kalluparamban House
                </p>
                <p className="text-xs sm:text-sm text-gold-600 italic">
                  Chemmad, Malappuram
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 md:mt-14 mx-auto flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity relative z-20"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-600 font-semibold">Next Section</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold-500"
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
};

export default CoupleIntro;

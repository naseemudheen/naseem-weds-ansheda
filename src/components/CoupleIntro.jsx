import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

const CoupleIntro = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="couple" className="py-10 md:py-20 px-4 bg-gradient-to-b from-primary-900 to-dark-bg relative pb-16 md:pb-24">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-15 bg-arabesque-tile pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="font-script text-5xl md:text-6xl text-gold-500 mb-2">The Couple</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* Couple Cards Container — Left-aligned on mobile, sleek side-by-side on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-6 items-stretch">

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="w-full glass-card rounded-2xl p-5 sm:p-7 border-l-4 border-l-gold-500 border-gold-400/30 text-left shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Name */}
              <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-gradient-gold leading-tight mb-2.5 font-bold">
                Naseemudheen
              </h3>

              {/* Role Badge */}
              <div className="mb-3">
                <span className="inline-block px-3.5 py-1 bg-primary-800/95 border border-gold-400/40 rounded-full font-serif text-gold-600 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
                  The Groom
                </span>
              </div>

              {/* Parentage */}
              <p className="font-serif italic text-cream-100 text-sm sm:text-base md:text-lg mb-4 font-medium leading-relaxed">
                Son of Late Mohammed Erayassan
              </p>
            </div>

            {/* Residence Address */}
            <div className="pt-3 border-t border-gold-400/20 flex items-start gap-2.5 text-cream-200 font-serif text-sm sm:text-base">
              <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
              <div className="leading-snug">
                <span className="font-semibold text-cream-100">Erayassan House</span>
                <span className="text-gold-600/70 mx-1.5 font-sans">·</span>
                <span className="italic text-gold-600 font-medium">Mattathur, Malappuram</span>
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="w-full glass-card rounded-2xl p-5 sm:p-7 border-l-4 border-l-gold-500 border-gold-400/30 text-left shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Name */}
              <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-gradient-gold leading-tight mb-2.5 font-bold">
                Ansheda
              </h3>

              {/* Role Badge */}
              <div className="mb-3">
                <span className="inline-block px-3.5 py-1 bg-primary-800/95 border border-gold-400/40 rounded-full font-serif text-gold-600 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">
                  The Bride
                </span>
              </div>

              {/* Parentage */}
              <p className="font-serif italic text-cream-100 text-sm sm:text-base md:text-lg mb-4 font-medium leading-relaxed">
                Daughter of Ibrahim
              </p>
            </div>

            {/* Residence Address */}
            <div className="pt-3 border-t border-gold-400/20 flex items-start gap-2.5 text-cream-200 font-serif text-sm sm:text-base">
              <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
              <div className="leading-snug">
                <span className="font-semibold text-cream-100">Kalluparamban House</span>
                <span className="text-gold-600/70 mx-1.5 font-sans">·</span>
                <span className="italic text-gold-600 font-medium">Chemmad, Malappuram</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 md:mt-12 mx-auto flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity relative z-20"
        >
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-600 font-bold">Next Section</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold-500"
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
};

export default CoupleIntro;

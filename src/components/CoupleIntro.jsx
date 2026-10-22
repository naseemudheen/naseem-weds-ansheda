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
          <h2 className="font-script text-4xl md:text-6xl text-gold-500 mb-1.5 md:mb-2">The Couple</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* Couple Cards Container — Left-aligned on mobile, sleek side-by-side on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="w-full glass-card rounded-xl p-4 sm:p-6 border-l-4 border-l-gold-500 border-gold-400/30 text-left shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Name */}
              <h3 className="font-script text-4xl sm:text-5xl text-gradient-gold leading-tight mb-2">
                Naseemudheen
              </h3>

              {/* Role Badge */}
              <div className="mb-2.5">
                <span className="inline-block px-3 py-0.5 bg-primary-800/90 border border-gold-400/40 rounded-full font-serif text-gold-600 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold">
                  The Groom
                </span>
              </div>

              {/* Parentage */}
              <p className="font-serif italic text-cream-100 text-xs sm:text-sm mb-4">
                Son of Late Mohammed Erayassan
              </p>
            </div>

            {/* Residence Address */}
            <div className="pt-2.5 border-t border-gold-400/20 flex items-center gap-2 text-cream-200/90 font-serif text-xs sm:text-sm">
              <MapPin size={14} className="text-gold-500 shrink-0" />
              <div className="truncate">
                <span className="font-medium text-cream-100">Mattathur</span>
                <span className="text-gold-600/70 mx-1.5">·</span>
                <span className="italic text-gold-600">Malappuram</span>
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
            className="w-full glass-card rounded-xl p-4 sm:p-6 border-l-4 border-l-gold-500 border-gold-400/30 text-left shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Name */}
              <h3 className="font-script text-4xl sm:text-5xl text-gradient-gold leading-tight mb-2">
                Ansheda
              </h3>

              {/* Role Badge */}
              <div className="mb-2.5">
                <span className="inline-block px-3 py-0.5 bg-primary-800/90 border border-gold-400/40 rounded-full font-serif text-gold-600 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold">
                  The Bride
                </span>
              </div>

              {/* Parentage */}
              <p className="font-serif italic text-cream-100 text-xs sm:text-sm mb-4">
                Daughter of Ibrahim
              </p>
            </div>

            {/* Residence Address */}
            <div className="pt-2.5 border-t border-gold-400/20 flex items-center gap-2 text-cream-200/90 font-serif text-xs sm:text-sm">
              <MapPin size={14} className="text-gold-500 shrink-0" />
              <div className="truncate">
                <span className="font-medium text-cream-100">Kalluparamban House</span>
                <span className="text-gold-600/70 mx-1.5">·</span>
                <span className="italic text-gold-600">Chemmad, Malappuram</span>
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

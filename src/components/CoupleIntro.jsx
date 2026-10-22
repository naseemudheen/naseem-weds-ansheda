import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CoupleIntro = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="couple" className="py-12 md:py-24 px-4 bg-gradient-to-b from-primary-900 to-dark-bg relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="font-script text-4xl md:text-6xl text-gold-500 mb-2 md:mb-4">The Couple</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </motion.div>

        {/* Main Layout — side-by-side on desktop with elegant center divider */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.9 }}
            className="w-full md:flex-1 p-8 md:p-12 glass-card rounded-2xl relative hover:shadow-[0_15px_40px_rgba(168,125,43,0.12)] transition-all text-center"
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold-400 rounded-tl-xl opacity-60"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold-400 rounded-br-xl opacity-60"></div>

            <h3 className="font-script text-4xl md:text-6xl text-cream-100 mb-2">Naseemudheen</h3>
            <p className="font-serif text-gold-500 text-xs md:text-sm uppercase tracking-[0.25em] font-medium">The Groom</p>
          </motion.div>

          {/* Decorative divider & */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex md:flex-col items-center gap-3 my-2 md:my-0 shrink-0"
          >
            <div className="w-12 md:w-px md:h-12 bg-gradient-to-r md:bg-gradient-to-b from-transparent to-gold-500/50"></div>
            <motion.div
              animate={{ boxShadow: ['0 0 10px rgba(168,125,43,0.15)', '0 0 20px rgba(168,125,43,0.3)', '0 0 10px rgba(168,125,43,0.15)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary-800 border border-gold-400/80 shadow-md"
            >
              <span className="font-script text-2xl md:text-3xl text-gold-500">&amp;</span>
            </motion.div>
            <div className="w-12 md:w-px md:h-12 bg-gradient-to-l md:bg-gradient-to-t from-transparent to-gold-500/50"></div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="w-full md:flex-1 p-8 md:p-12 glass-card rounded-2xl relative hover:shadow-[0_15px_40px_rgba(168,125,43,0.12)] transition-all text-center"
          >
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-gold-400 rounded-tr-xl opacity-60"></div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-gold-400 rounded-bl-xl opacity-60"></div>

            <h3 className="font-script text-4xl md:text-6xl text-cream-100 mb-2">Ansheda</h3>
            <p className="font-serif text-gold-500 text-xs md:text-sm uppercase tracking-[0.25em] font-medium">The Bride</p>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-10 md:mt-16 mx-auto flex flex-col items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity relative z-20"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-600 font-semibold">Next Section</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
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

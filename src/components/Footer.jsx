import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="footer" className="min-h-[100svh] flex flex-col justify-between items-center bg-primary-900 relative border-t border-gold-400/20 text-center overflow-hidden pt-10 md:pt-14">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-15 bg-arabesque-tile pointer-events-none"></div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold-400 rounded-full blur-[140px] opacity-10 pointer-events-none"></div>

      {/* Top Spacer to balance the vertical flex */}
      <div className="w-full"></div>

      {/* Main Center Card Content */}
      <div className="max-w-2xl mx-auto px-4 relative z-10 w-full my-auto py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Logo size="md" className="mb-4 md:mb-6" />

          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-gold-500 mb-3">Thank You</h2>
          
          <p className="font-serif text-cream-200/90 mb-2 italic text-base sm:text-lg md:text-xl">
            Your duas &amp; presence mean a lot to us
          </p>

          <p className="font-serif italic text-gold-600/90 text-xs sm:text-sm md:text-base mb-6">
            With love,<br />
            The families of Naseemudheen &amp; Ansheda
          </p>

          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gold-400/40"></div>
            <motion.span 
              animate={{ scale: [1, 1.25, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="font-script text-gold-500 text-2xl"
            >
              &hearts;
            </motion.span>
            <div className="h-px w-16 bg-gold-400/40"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Plane / Copyright Pinned to the Bottom of the Screen */}
      <div className="w-full relative z-10 border-t border-gold-400/20 bg-primary-900/80 backdrop-blur-sm py-4 px-4 mt-auto">
        <p className="text-[10px] sm:text-xs text-gold-600/80 uppercase tracking-[0.25em] font-sans font-medium">
          Naseemudheen &amp; Ansheda &copy; 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="footer" className="py-20 px-4 bg-primary-900 relative border-t border-gold-400/20 text-center overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-15 bg-arabesque-tile pointer-events-none"></div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold-400 rounded-full blur-[100px] opacity-15"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Logo size="sm" className="mb-6" />

          <h2 className="font-script text-4xl md:text-5xl text-cream-100 mb-4">Thank You</h2>
          
          <p className="font-serif text-cream-200/90 mb-3 italic text-lg md:text-xl">
            Your duas &amp; presence mean a lot to us
          </p>

          <p className="font-serif italic text-gold-600/90 text-sm md:text-base mb-8">
            With love,<br />
            The families of Naseemudheen &amp; Ansheda
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold-400/50"></div>
            <motion.span 
              animate={{ scale: [1, 1.3, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="font-script text-gold-500 text-2xl"
            >
              &hearts;
            </motion.span>
            <div className="h-px w-16 bg-gold-400/50"></div>
          </div>

          <p className="text-xs text-gold-600/70 uppercase tracking-[0.3em] font-sans font-medium">
            Naseemudheen &amp; Ansheda &copy; 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

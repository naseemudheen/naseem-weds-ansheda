import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    try {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(err => console.log(err));
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen().catch(err => console.log(err));
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen().catch(err => console.log(err));
      }
    } catch (error) {
      console.log('Fullscreen API not supported');
    }
    
    setIsVisible(false);
    setTimeout(onComplete, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-900 bg-arabesque-tile"
        >
          <div className="absolute inset-0 bg-primary-900/90 pointer-events-none"></div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center px-4 text-center max-w-md mx-auto"
          >
            {/* Arabic Bismillah Calligraphy */}
            <motion.img
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              src="/bismillah.png"
              alt="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"
              className="h-10 md:h-12 w-auto object-contain mb-5 filter drop-shadow-[0_1px_2px_rgba(168,125,43,0.3)] brightness-95"
            />

            <Logo size="lg" className="mb-4" />

            <p className="font-script text-2xl md:text-3xl text-gradient-gold mb-1">
              Naseemudheen &amp; Ansheda
            </p>
            <p className="font-serif tracking-[0.25em] uppercase text-[11px] text-gold-600 mb-5">
              Wedding Invitation
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "160px" }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-6"
            />
            
            <div className="h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!isReady ? (
                  <motion.p
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-serif tracking-[0.3em] text-gold-600/80 text-xs uppercase font-medium"
                  >
                    Preparing Invitation...
                  </motion.p>
                ) : (
                  <motion.button
                    key="open-btn"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleOpen}
                    className="px-8 py-3.5 border border-gold-400 bg-white/70 text-gold-600 font-serif tracking-[0.25em] uppercase text-xs hover:bg-gold-500 hover:text-white transition-all duration-500 rounded-sm shadow-md cursor-pointer font-semibold"
                  >
                    Open Invitation
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

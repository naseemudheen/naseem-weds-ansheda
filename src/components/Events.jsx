import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';

const EventCard = ({ title, date, time, venue, address, mapLink, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
    transition={{ duration: 0.8, delay }}
    className="flex-1 w-full glass-card rounded-2xl p-5 sm:p-8 md:p-10 border-t-4 border-t-gold-400 relative overflow-hidden group hover:border-gold-500 transition-colors hover:shadow-[0_20px_40px_rgba(168,125,43,0.12)] text-left"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400 rounded-full blur-[80px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
    
    <div className="flex flex-col items-center md:items-start mb-6 md:mb-8 text-center md:text-left">
      <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-gold-500 mb-2 leading-tight">{title}</h3>
      <p className="font-serif italic text-sm sm:text-base md:text-lg text-gold-600 font-medium">The ceremony will be followed by a feast reception</p>
    </div>

    <div className="space-y-5 md:space-y-6 text-left">
      {/* Date */}
      <div className="flex items-start gap-3.5 sm:gap-4 text-cream-200">
        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-primary-800 flex items-center justify-center border border-gold-400/40 shadow-sm mt-0.5">
          <Calendar className="text-gold-500" size={24} />
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gold-600 uppercase tracking-widest font-bold">Date</p>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-cream-100 font-bold leading-snug">{date}</p>
          <p className="text-sm sm:text-base text-gold-600 font-serif italic font-medium mt-0.5">4 Rajab 1448 AH</p>
        </div>
      </div>
      
      {/* Time */}
      <div className="flex items-start gap-3.5 sm:gap-4 text-cream-200">
        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-primary-800 flex items-center justify-center border border-gold-400/40 shadow-sm mt-0.5">
          <Clock className="text-gold-500" size={24} />
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gold-600 uppercase tracking-widest font-bold">Time</p>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-cream-100 font-bold leading-snug">{time}</p>
        </div>
      </div>

      {/* Venue */}
      <div className="flex items-start gap-3.5 sm:gap-4 text-cream-200">
        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-primary-800 flex items-center justify-center border border-gold-400/40 shadow-sm mt-0.5">
          <MapPin className="text-gold-500" size={24} />
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gold-600 uppercase tracking-widest font-bold">Venue</p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gold-500 font-bold leading-snug mb-0.5">{venue}</p>
          <p className="font-sans text-cream-200 text-sm sm:text-base font-semibold">{address}</p>
        </div>
      </div>
    </div>

    {/* Insha Allah blessing */}
    <div className="text-center my-7">
      <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-500 font-bold" dir="rtl">
        إِنْ شَاءَ اللّٰهُ
      </p>
    </div>

    {/* Action Button: View Location */}
    <div className="mt-6">
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg shadow-gold-500/25 font-bold text-sm sm:text-base uppercase tracking-wider"
      >
        <Navigation size={20} />
        <span>View Location on Map</span>
      </motion.a>
    </div>
  </motion.div>
);

const Events = () => {
  return (
    <section id="events" className="py-12 md:py-20 px-4 bg-gradient-to-b from-dark-bg to-primary-900 relative overflow-hidden flex flex-col justify-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-15 bg-arabesque-tile pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400 rounded-full blur-[220px] opacity-10 pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10 w-full">
        <div className="text-center mb-6 md:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-5xl md:text-6xl text-gold-500 mb-2 drop-shadow-sm"
          >
            Wedding Events
          </motion.h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full">
            <EventCard 
              title="Wedding Reception"
              date="Sunday, 13th December 2026"
              time="11:00 AM to 3:00 PM"
              venue="Green Palace Auditorium"
              address="Othukkungal"
              mapLink="https://maps.app.goo.gl/hUHXXzxFMCqLAF4v9"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

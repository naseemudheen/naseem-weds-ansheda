import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus } from 'lucide-react';
import { useState, useEffect } from 'react';

const EventCard = ({ title, date, time, venue, address, mapLink, calendarLink, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    transition={{ duration: 0.8, delay }}
    className="flex-1 w-full glass-card rounded-2xl p-6 md:p-10 border-t-4 border-t-gold-400 relative overflow-hidden group hover:border-gold-500 transition-colors hover:shadow-[0_20px_40px_rgba(168,125,43,0.12)]"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400 rounded-full blur-[80px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
    
    <h3 className="font-script text-3xl md:text-5xl text-gold-500 mb-6 md:mb-8 text-center md:text-left">{title}</h3>

    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-3 md:gap-4 text-cream-200">
        <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-primary-800 flex items-center justify-center border border-gold-400/30">
          <Calendar className="text-gold-500" size={20} />
        </div>
        <div>
          <p className="text-[10px] text-gold-600 uppercase tracking-widest font-semibold">Date</p>
          <p className="font-serif text-base md:text-lg text-cream-100 font-semibold">{date}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4 text-cream-200">
        <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-primary-800 flex items-center justify-center border border-gold-400/30">
          <Clock className="text-gold-500" size={20} />
        </div>
        <div>
          <p className="text-[10px] text-gold-600 uppercase tracking-widest font-semibold">Time</p>
          <p className="font-serif text-base md:text-lg text-cream-100 font-semibold">{time}</p>
        </div>
      </div>

      <div className="flex items-start gap-3 md:gap-4 text-cream-200 pt-1 md:pt-2">
        <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-primary-800 flex items-center justify-center border border-gold-400/30">
          <MapPin className="text-gold-500" size={20} />
        </div>
        <div>
          <p className="text-[10px] text-gold-600 uppercase tracking-widest font-semibold">Venue</p>
          <p className="font-serif text-lg md:text-xl text-gold-500 mb-1 font-semibold">{venue}</p>
          <p className="font-sans text-cream-200/90 text-xs md:text-sm leading-relaxed">{address}</p>
        </div>
      </div>
    </div>

    {/* Action Buttons: Add to Google Calendar & View Location */}
    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={calendarLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all shadow-md shadow-gold-500/20 font-semibold text-xs md:text-sm"
      >
        <CalendarPlus size={18} />
        <span className="uppercase tracking-wider">Add to Google Calendar</span>
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-primary-800 border border-gold-400/60 text-gold-600 rounded-xl hover:bg-gold-500 hover:text-white transition-all shadow-sm font-semibold text-xs md:text-sm"
      >
        <Navigation size={18} />
        <span className="uppercase tracking-wider">View Location</span>
      </motion.a>
    </div>

    {/* Interactive Location Map Preview */}
    <div className="mt-6 rounded-xl overflow-hidden border border-gold-400/30 shadow-inner">
      <iframe
        title="Green Palace Auditorium Location"
        src="https://www.openstreetmap.org/export/embed.html?bbox=76.025,11.018,76.040,11.026&layer=mapnik&marker=11.0222479,76.0328619"
        className="w-full h-48 md:h-56 border-0"
        loading="lazy"
      ></iframe>
    </div>
  </motion.div>
);

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('December 13, 2026 11:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  // Google Calendar event URL parameters (Times in UTC: 11:00 AM - 3:00 PM IST is 05:30 - 09:30 UTC)
  const calendarEventUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Naseemudheen weds Ansheda - Wedding Reception'
  )}&dates=20261213T053000Z/20261213T093000Z&details=${encodeURIComponent(
    'With joyous hearts, we invite you to celebrate the wedding reception of Naseemudheen & Ansheda on December 13th, 2026 at Green Palace Auditorium, Othukkungal, Pookkottur.\n\nLocation: https://maps.app.goo.gl/hUHXXzxFMCqLAF4v9'
  )}&location=${encodeURIComponent('Green Palace Auditorium, Othukkungal, Pookkottur')}`;

  return (
    <section id="events" className="py-12 md:py-24 md:min-h-[100dvh] px-4 bg-gradient-to-b from-dark-bg to-primary-900 relative overflow-hidden flex flex-col justify-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400 rounded-full blur-[220px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="text-center mb-6 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-4xl md:text-7xl text-gold-500 mb-4 md:mb-8 drop-shadow-sm"
          >
            Wedding Events
          </motion.h2>

          {/* Countdown Timer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-2 md:gap-8 max-w-2xl mx-auto p-4 md:p-8 glass-card rounded-2xl md:rounded-3xl"
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-24 md:h-24 bg-white/90 rounded-xl border border-gold-400/40 flex items-center justify-center shadow-md mb-2 md:mb-3">
                  <span className="font-serif text-xl md:text-4xl text-cream-100 font-semibold">{item.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[8px] md:text-sm text-gold-600 uppercase tracking-widest font-bold">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 md:mt-16 justify-center">
          <div className="w-full max-w-2xl mx-auto">
            <EventCard 
              title="Wedding Reception"
              date="Sunday, 13th December 2026"
              time="11:00 AM to 3:00 PM"
              venue="Green Palace Auditorium"
              address="Othukkungal, Pookkottur"
              mapLink="https://maps.app.goo.gl/hUHXXzxFMCqLAF4v9"
              calendarLink={calendarEventUrl}
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

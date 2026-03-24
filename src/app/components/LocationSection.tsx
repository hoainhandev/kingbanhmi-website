import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

const locations = [
  {
    id: 1,
    name: 'Westminster Saigon',
    address: '9296 Bolsa Ave, Westminster, CA 92683',
    phone: '(657) 400-9122',
    hours: 'Daily: 8 AM - 6:30 PM'
  },
  {
    id: 2,
    name: 'Riverside',
    address: '',
    phone: '',
    hours: '',
    comingSoon: true
  },
  {
    id: 3,
    name: 'Long Beach',
    address: '',
    phone: '',
    hours: '',
    comingSoon: true
  },
  {
    id: 4,
    name: 'Chicago',
    address: '',
    phone: '',
    hours: '',
    comingSoon: true
  },
  {
    id: 5,
    name: 'Las Vegas',
    address: '',
    phone: '',
    hours: '',
    comingSoon: true
  }
];

export function LocationSection() {
  return (
    <section id="locations" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black tracking-wide">
            OUR LOCATIONS
          </h2>
          
          <motion.div
            className="w-24 h-1 bg-[#FDB714] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our locations across the United States
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>

        {/* Contact Info */}
        <motion.div 
          className="relative bg-black text-white overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 border-4 border-[#FDB714]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative p-12 text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-8 tracking-wide"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              QUESTIONS? WE'D LOVE TO HEAR FROM YOU!
            </motion.h3>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-8">
              <motion.a 
                href="mailto:hello@kingbanhmi.com" 
                className="flex items-center space-x-3 border border-white/20 px-6 py-4 hover:border-[#FDB714] hover:bg-[#FDB714] hover:text-[#1a5633] transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span className="text-base font-semibold">hello@kingbanhmi.com</span>
              </motion.a>
              
              <motion.a 
                href="tel:6574009122" 
                className="flex items-center space-x-3 border border-white/20 px-6 py-4 hover:border-[#FDB714] hover:bg-[#FDB714] hover:text-[#1a5633] transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span className="text-base font-semibold">(657) 400-9122</span>
              </motion.a>
            </div>

            <p className="text-gray-400 text-sm">
              Follow us on social media for special offers and new menu items
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LocationCard({ location, index }) {
  const isComingSoon = location.comingSoon;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Card */}
      <div className="relative bg-white border border-gray-200 p-8 h-full flex flex-col">
        {isComingSoon && (
          <div className="absolute top-4 right-4 bg-[#FDB714] text-[#1a5633] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
            Coming Soon
          </div>
        )}
        <h3 className="text-xl font-bold mb-6 text-black tracking-wide pr-24">
          {location.name}
        </h3>

        <div className="space-y-4 mb-6 flex-grow">
          {location.address && (
            <motion.div 
              className="flex items-start space-x-3"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-5 h-5 text-[#FDB714] mt-1 flex-shrink-0" />
              <p className="text-gray-600 text-sm">{location.address}</p>
            </motion.div>
          )}

          {location.phone && (
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-5 h-5 text-[#FDB714] flex-shrink-0" />
              <a href={`tel:${location.phone}`} className="text-gray-600 text-sm hover:text-[#FDB714] transition">
                {location.phone}
              </a>
            </motion.div>
          )}

          {location.hours && (
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <Clock className="w-5 h-5 text-[#FDB714] flex-shrink-0" />
              <p className="text-gray-600 text-sm">{location.hours}</p>
            </motion.div>
          )}

          {isComingSoon && (
            <div className="flex items-center justify-center h-24">
               <p className="text-gray-400 font-medium italic">We can't wait to serve you here!</p>
            </div>
          )}
        </div>

        {!isComingSoon ? (
          <motion.a 
            href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1a5633] text-white py-3 text-sm font-semibold tracking-wider relative overflow-hidden group/button hover:bg-[#FDB714] hover:text-[#1a5633] transition-colors duration-300 flex items-center justify-center space-x-2 rounded-sm mt-auto"
            whileTap={{ scale: 0.98 }}
          >
            <Navigation className="w-4 h-4" />
            <span>GET DIRECTIONS</span>
          </motion.a>
        ) : (
          <button 
            disabled
            className="w-full bg-gray-100 text-gray-400 py-3 text-sm font-semibold tracking-wider relative flex items-center justify-center space-x-2 rounded-sm mt-auto cursor-not-allowed"
          >
            <span>COMING SOON</span>
          </button>
        )}

        {/* Accent line */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-1 ${isComingSoon ? 'bg-gray-300' : 'bg-[#FDB714]'}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}
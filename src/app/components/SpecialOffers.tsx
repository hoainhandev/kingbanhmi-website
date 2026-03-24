import { Gift } from 'lucide-react';
import { motion } from 'motion/react';

export function SpecialOffers() {
  return (
    <section className="py-20 bg-[#013a0f] text-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 border border-[#FDB714] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1359),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [0, -800],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '1.76px' }}>
            SPECIAL OFFERS
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#FDB714] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-300">
            Sharing the taste of home with your loved ones
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* Offer 1 */}
            <OfferCard
              icon={<Gift className="w-8 h-8 text-[#1a5633]" />}
              title="BUY 2 GET 1"
              highlight="FREE"
              description="Mix & match any bánh mì"
              subtext="Available for dine-in and takeout"
              delay={0}
            />
          </div>
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            * Offers cannot be combined. Terms and conditions apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function OfferCard({ icon, title, highlight, description, subtext, delay }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 bg-[#FDB714] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
      />

      {/* Card content */}
      <div className="relative bg-white border border-gray-200 p-8 text-center">
        {/* Icon */}
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 bg-[#FDB714] mb-6 rounded-full"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-black mb-3" style={{ letterSpacing: '0.84px' }}>
          {title}
        </h3>

        {/* Highlight price/offer */}
        <motion.p 
          className="text-5xl font-bold text-black mb-4"
          whileHover={{ scale: 1.05 }}
          style={{ letterSpacing: '1.41px' }}
        >
          {highlight}
        </motion.p>

        {/* Description */}
        <p className="text-gray-700 font-semibold mb-2 text-base">
          {description}
        </p>
        
        {/* Subtext */}
        <p className="text-sm text-gray-500">
          {subtext}
        </p>

        {/* Animated bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#FDB714]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}
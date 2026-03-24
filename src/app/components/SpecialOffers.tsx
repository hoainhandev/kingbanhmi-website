import { Gift } from 'lucide-react';
import { motion } from 'motion/react';

export function SpecialOffers() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#013a0f] to-[#1a5633] text-white relative overflow-hidden">
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: '1.76px' }}>
            SPECIAL OFFER
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#FDB714] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-xl text-gray-200 font-medium">
            Sharing the taste of home with your loved ones
          </p>
        </motion.div>

        {/* Wide Banner Deal */}
        <motion.div
          className="max-w-5xl mx-auto relative group"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute -inset-2 bg-[#FDB714] opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl rounded-3xl"
          />

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch border-[3px] border-[#FDB714]/20 hover:border-[#FDB714]/50 transition-colors duration-500">
            {/* Left side: Highlight */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#FDB714] to-[#f9a826] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Decorative background circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-sm" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-sm" />
              
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Gift className="w-20 h-20 text-[#1a5633] mb-6 relative z-10" />
              </motion.div>
              
              <h3 className="text-4xl md:text-5xl font-black text-[#1a5633] mb-2 drop-shadow-sm tracking-tight relative z-10">
                BUY 2
              </h3>
              
              <div className="flex items-center gap-4 text-[#1a5633] my-2 relative z-10">
                <div className="h-[2px] bg-[#1a5633] w-12 opacity-40 rounded-full"></div>
                <span className="text-2xl font-bold tracking-widest">GET</span>
                <div className="h-[2px] bg-[#1a5633] w-12 opacity-40 rounded-full"></div>
              </div>
              
              <motion.p 
                className="text-7xl md:text-8xl font-black text-white mt-1 drop-shadow-lg relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ letterSpacing: '1px' }}
              >
                1 FREE
              </motion.p>
            </div>

            {/* Right side: Details */}
            <div className="w-full md:w-7/12 p-10 md:p-14 flex flex-col justify-center bg-[#fafafa]">
              <div className="inline-block bg-[#1a5633]/10 text-[#1a5633] font-bold px-4 py-1.5 rounded-full text-sm mb-6 self-start tracking-wider uppercase shadow-sm">
                Limited Time Offer
              </div>
              
              <h4 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight" style={{ letterSpacing: '0.5px' }}>
                Mix & Match<br/>
                <span className="text-[#1a5633]">Any Bánh Mì</span>
              </h4>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                Treat yourself and a friend, and let the third be on us! Enjoy our signature crispy baguettes filled with authentic, fresh ingredients.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
                <motion.a 
                  href="#order"
                  className="bg-[#1a5633] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#013a0f] transition-all duration-300 w-full sm:w-auto text-center shadow-[0_8px_20px_rgba(26,86,51,0.3)] hover:shadow-[0_12px_25px_rgba(26,86,51,0.4)]"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Now
                </motion.a>
                <p className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Available for dine-in and takeout
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm font-medium">
            * Offers cannot be combined. Terms and conditions apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
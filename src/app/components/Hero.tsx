import { motion } from 'motion/react';
import heroImage from '@/assets/8bae55a7541b9acd47578c0686deaa3132cb871c.png';

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background with Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="King Banh Mi"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[rgba(16,16,16,0.3)]"></div>
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[rgba(253,183,20,0.2)] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-[96px] font-bold mb-8 text-white"
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            animate={{ letterSpacing: '9.6px', opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ lineHeight: '96px' }}
          >
            KING BANH MI
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-2xl sm:text-3xl md:text-[30px] font-light tracking-[3.4px] uppercase text-[#d1d5dc] mb-2" style={{ lineHeight: '36px' }}>
            An Original
          </p>
          <p className="text-3xl sm:text-4xl md:text-[36px] font-bold tracking-[1.27px] text-white" style={{ lineHeight: '40px' }}>
            TASTE OF SAIGON
          </p>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-[#d1d5dc]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ fontSize: '18px', lineHeight: '29.25px', letterSpacing: '-0.44px' }}
        >
          Experience the authentic flavors of Vietnam, crafted with love for the Vietnamese community in America
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {/* DoorDash Order Button */}
          <motion.a
            href="https://order.online/store/-23050694?hideModal=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FDB714] hover:bg-[#e6a612] text-[#1a5633] px-10 py-4 rounded-md text-base font-semibold shadow-2xl relative overflow-hidden group border border-[#FDB714] flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.752 1.752 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413z" />
            </svg>
            <span className="relative z-10">ORDER ON DOORDASH</span>
          </motion.a>

          {/* Explore Menu Button */}
          <motion.button
            onClick={scrollToMenu}
            className="bg-transparent hover:bg-white/10 text-white px-10 py-4 rounded-md text-base font-semibold border-2 border-white transition-colors"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{ letterSpacing: '-0.31px' }}
          >
            EXPLORE MENU
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
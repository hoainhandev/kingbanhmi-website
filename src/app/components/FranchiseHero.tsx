import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FranchiseHero() {
  return (
    <section className="relative h-[500px] bg-[#013a0f] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZnJhbmNoaXNlJTIwYnVzaW5lc3MlMjBwYXJ0bmVyc2hpcHxlbnwxfHx8fDE3NzI1MjQyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Franchise Opportunity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#013a0f]/95 to-[#013a0f]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ letterSpacing: '2px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FRANCHISE WITH
            <span className="text-[#FDB714] block mt-2">KING BANH MI</span>
          </motion.h1>
          
          <motion.div
            className="w-32 h-1 bg-[#FDB714] mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-xl text-gray-200 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join our growing family and bring authentic Vietnamese flavors to your community. 
            Partner with a trusted brand that celebrates tradition and quality.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2 text-white">
              <div className="w-2 h-2 bg-[#FDB714] rounded-full"></div>
              <span className="text-sm font-medium">Proven Business Model</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-2 h-2 bg-[#FDB714] rounded-full"></div>
              <span className="text-sm font-medium">Comprehensive Training</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-2 h-2 bg-[#FDB714] rounded-full"></div>
              <span className="text-sm font-medium">Ongoing Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB714] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDB714] opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}

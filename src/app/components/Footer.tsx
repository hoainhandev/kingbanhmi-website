import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '@/assets/1b1add06a7bc7986e890eac8334a8c35e64679ee.png';

export function Footer() {
  return (
    <footer className="bg-[#013a0f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={logoImage}
              alt="King Banh Mi"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Bringing authentic Vietnamese flavors to America. Experience the taste of Saigon in every bite.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FDB714] text-[#013a0f] rounded-full flex items-center justify-center hover:bg-[#e6a612] transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FDB714] text-[#013a0f] rounded-full flex items-center justify-center hover:bg-[#e6a612] transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-[#FDB714]">QUICK LINKS</h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Our Story', 'Locations', 'Special Offers'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-[#FDB714] transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-[#FDB714]">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FDB714] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  9296 Bolsa Ave<br />
                  Westminster, CA 92683
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FDB714] flex-shrink-0" />
                <a
                  href="tel:6574009122"
                  className="text-gray-300 hover:text-[#FDB714] transition-colors text-sm"
                >
                  (657) 400-9122
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FDB714] flex-shrink-0" />
                <a
                  href="mailto:info@kingbanhmi.net"
                  className="text-gray-300 hover:text-[#FDB714] transition-colors text-sm"
                >
                  info@kingbanhmi.net
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-[#FDB714]">HOURS</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Sunday:</span>
                <span className="text-white font-medium">8:00 AM - 6:30 PM</span>
              </li>
            </ul>
            <motion.a
              href="https://order.online/store/-23050694?hideModal=true"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-[#FDB714] text-[#013a0f] px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#e6a612] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ORDER NOW
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 pt-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 King Banh Mi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FDB714] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';
import logoImage from '@/assets/1b1add06a7bc7986e890eac8334a8c35e64679ee.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#013a0f] shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/">
              <img 
                src={logoImage} 
                alt="King Banh Mi" 
                className="h-14 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                {['home', 'menu', 'story', 'locations'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative font-medium transition-colors capitalize text-sm tracking-wide ${
                      activeSection === section ? 'text-[#FCAF15]' : 'text-[#fbfbfb] hover:text-[#FCAF15]'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section === 'home' ? 'HOME' : section === 'menu' ? 'MENU' : section === 'story' ? 'OUR STORY' : 'LOCATIONS'}
                  </motion.button>
                ))}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to="/"
                  className="relative font-medium text-[#fbfbfb] hover:text-[#FCAF15] transition-colors text-sm tracking-wide"
                >
                  HOME
                </Link>
              </motion.div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link 
                to="/franchise"
                className={`relative font-medium transition-colors text-sm tracking-wide ${
                  location.pathname === '/franchise' ? 'text-[#FCAF15]' : 'text-[#fbfbfb] hover:text-[#FCAF15]'
                }`}
              >
                FRANCHISE
              </Link>
            </motion.div>
          </nav>

          {/* Contact Button - Desktop */}
          <motion.div 
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              href="tel:+12129120000" 
              className="flex items-center space-x-2 bg-[#FCAF15] text-[#0a0a0a] px-4 py-2.5 rounded hover:bg-[#e6a612] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">(212) 912-0000</span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden relative z-50 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden pb-4 space-y-3 border-t border-white/10 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isHomePage ? (
                <>
                  {['home', 'menu', 'story', 'locations'].map((section, index) => (
                    <motion.button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left py-2 text-white hover:text-[#FCAF15] transition-colors capitalize text-sm tracking-wide font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {section === 'home' ? 'HOME' : section === 'menu' ? 'MENU' : section === 'story' ? 'OUR STORY' : 'LOCATIONS'}
                    </motion.button>
                  ))}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    to="/"
                    className="block w-full text-left py-2 text-white hover:text-[#FCAF15] transition-colors text-sm tracking-wide font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link 
                  to="/franchise"
                  className="block w-full text-left py-2 text-white hover:text-[#FCAF15] transition-colors text-sm tracking-wide font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FRANCHISE
                </Link>
              </motion.div>
              
              <motion.a 
                href="tel:+12129120000" 
                className="flex items-center space-x-2 py-2 text-white hover:text-[#FCAF15] transition-colors text-sm font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                <span>(212) 912-0000</span>
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
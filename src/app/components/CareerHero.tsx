import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCareersLang } from '../../i18n/CareersLangContext';
import { CareersLanguageSwitcher } from '../../i18n/CareersLanguageSwitcher';

type CareerHeroProps = {
  onApplyClick: () => void;
};

export function CareerHero({ onApplyClick }: CareerHeroProps) {
  const { t } = useCareersLang();

  return (
    <section className="relative h-[500px] bg-[#013a0f] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt={t.hero.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#013a0f]/95 to-[#013a0f]/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="relative w-full">
          <div className="hidden sm:block absolute top-0 right-0 z-20">
            <CareersLanguageSwitcher />
          </div>

          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
              style={{ letterSpacing: '2px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.titleLine1}
              <span className="text-[#FDB714] block mt-2">{t.hero.titleLine2}</span>
            </motion.h1>

            <motion.div
              className="w-32 h-1 bg-[#FDB714] mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <div className="sm:hidden mb-6">
              <CareersLanguageSwitcher />
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                type="button"
                onClick={onApplyClick}
                className="bg-[#FDB714] text-[#013a0f] font-bold px-8 py-3.5 rounded-lg hover:bg-[#e6a612] transition-colors min-h-12"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.cta}
              </motion.button>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-2 h-2 bg-[#FDB714] rounded-full" aria-hidden="true"></div>
                  <span className="text-sm font-medium">{t.hero.bullet1}</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-2 h-2 bg-[#FDB714] rounded-full" aria-hidden="true"></div>
                  <span className="text-sm font-medium">{t.hero.bullet2}</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-2 h-2 bg-[#FDB714] rounded-full" aria-hidden="true"></div>
                  <span className="text-sm font-medium">{t.hero.bullet3}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB714] opacity-10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDB714] opacity-10 rounded-full blur-3xl" aria-hidden="true"></div>
    </section>
  );
}

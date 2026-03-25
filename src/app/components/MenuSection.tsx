import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import imgBanhMiDacBiet from '@/assets/banh-mi-dac-biet.jpg';
import imgBanhMiThitNuong from '@/assets/banh-mi-thit-nuong.jpeg';
import imgBanhMiGaNuong from '@/assets/banh-mi-heo-quay.jpg';
import imgBanhMiTrungOpLa from '@/assets/banh-mi-bo-ribeye.jpg';
import imgBanhMiXiuMai from '@/assets/banh-mi-xiu-mai-bi.png';
import imgBanhMiChay from '@/assets/banh-mi-cha-ca.jpg';

const menuItems = [
  {
    id: 1,
    name: 'BÁNH MÌ HEO QUAY',
    nameEn: 'Crispy Pork',
    description: 'Crispy roasted pork belly, pickled vegetables, cucumber, and cilantro',
    price: '$9',
    image: imgBanhMiGaNuong,
    popular: true
  },
  {
    id: 2,
    name: 'BÁNH MÌ ĐẶC BIỆT',
    nameEn: 'House Special',
    description: 'Vietnamese ham, head cheese, pâté, pickled vegetables, cilantro, and jalapeños',
    price: '$8',
    image: imgBanhMiDacBiet,
    popular: true
  },
  {
    id: 3,
    name: 'BÁNH MÌ BÒ RIBEYE',
    nameEn: 'Ribeye Beef',
    description: 'Grilled ribeye beef, house sauce, pickled vegetables, cucumber, and cilantro',
    price: '$9',
    image: imgBanhMiTrungOpLa,
    popular: false
  },
  {
    id: 4,
    name: 'BÁNH MÌ THỊT NƯỚNG',
    nameEn: 'Grilled Pork',
    description: 'Marinated grilled pork, pickled vegetables, cucumber, cilantro, and house sauce',
    price: '$8',
    image: imgBanhMiThitNuong,
    popular: true
  },
  {
    id: 5,
    name: 'BÁNH MÌ CHẢ CÁ',
    nameEn: 'Fish Cake',
    description: 'Fried fish cake, chili sauce, pickled vegetables, cucumber, and cilantro',
    price: '$9',
    image: imgBanhMiChay,
    popular: false
  },
  {
    id: 6,
    name: 'BÁNH MÌ XÍU MẠI BÌ',
    nameEn: 'Meatball Shredded Pork Skin',
    description: 'Vietnamese meatballs, shredded pork skin, pickled vegetables, and cilantro',
    price: '$9',
    image: imgBanhMiXiuMai,
    popular: false
  }
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
}

export function MenuSection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section id="menu" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#1a5633] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-black"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ letterSpacing: '1.76px', lineHeight: '60px' }}
          >
            FLAVORS OF SAIGON
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-[#FDB714] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-lg text-[#4a5565] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontSize: '18px', lineHeight: '28px', letterSpacing: '-0.44px' }}
          >
            Each bánh mì is a story of Saigon streets, crafted with fresh ingredients and over 200 years of tradition
          </motion.p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Special Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#6a7282] italic text-base" style={{ letterSpacing: '-0.31px' }}>
            All bánh mì are served on freshly baked French baguettes with house-made pickled vegetables
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MenuItem({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://order.online/store/-23050694?hideModal=true"
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as any}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-[#e5e7eb] overflow-hidden group cursor-pointer rounded-sm block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.nameEn}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.2)] to-transparent" />

        {/* Popular badge */}
        {item.popular && (
          <motion.div
            className="absolute top-4 right-4 bg-[#FDB714] text-[#1a5633] px-3 py-1.5 text-xs font-bold tracking-wider flex items-center space-x-1 shadow-lg"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            <Star className="w-3 h-3 fill-current" />
            <span style={{ letterSpacing: '0.6px' }}>POPULAR</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 relative bg-white">
        <motion.div
          className="mb-3"
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h3 className="text-lg font-bold text-black mb-1" style={{ letterSpacing: '0.01px', lineHeight: '28px' }}>
              {item.name}
            </h3>
            <p className="text-xs text-[#6a7282] font-semibold uppercase" style={{ letterSpacing: '0.6px', lineHeight: '16px' }}>
              {item.nameEn}
            </p>
          </div>
        </motion.div>

        <p className="text-[#4a5565] text-sm leading-relaxed" style={{ fontSize: '14px', lineHeight: '22.75px', letterSpacing: '-0.15px' }}>
          {item.description}
        </p>
      </div>
    </motion.a>
  );
}
import { Heart, Award, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import storyImage from '@/assets/40c170143b671b63733c9f7a4a316f96cb1c087b.png';

export function StorySection() {
  return (
    <section id="story" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB714] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDB714] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black" style={{ letterSpacing: '1.76px' }}>
            OUR STORY
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#FDB714] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-[#4a5565] max-w-3xl mx-auto leading-relaxed">
            From the bustling streets of Saigon to your table, every bánh mì carries centuries of Vietnamese culinary tradition
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={<Heart className="w-10 h-10" />}
            title="Made with Love"
            description="Every ingredient is carefully selected and prepared with the same love and care as a home-cooked meal"
            delay={0}
          />
          <FeatureCard
            icon={<Award className="w-10 h-10" />}
            title="Authentic Recipe"
            description="Traditional Vietnamese recipes passed down through generations, maintaining the true taste of Saigon"
            delay={0.1}
          />
          <FeatureCard
            icon={<Utensils className="w-10 h-10" />}
            title="Fresh Daily"
            description="Fresh baguettes baked every morning, vegetables pickled in-house, and meats prepared daily"
            delay={0.2}
          />
        </div>

        {/* Story Content - Image & Text Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={storyImage}
                  alt="Fresh King Banh Mi"
                  className="w-full h-[500px] object-cover"
                />
                {/* Yellow border accent */}
                <div className="absolute inset-0 border-4 border-[#FDB714] rounded-2xl pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[#1a1a1a] text-base leading-relaxed">
                King Banh Mi was born from a simple dream: to share the authentic flavors of Vietnam with the Vietnamese community and food lovers across America. Our founder, who grew up in the vibrant streets of Saigon, brought with them generations of family recipes and the passion for Vietnamese street food culture.
              </p>
              <p className="text-[#4a5565] text-base leading-relaxed">
                Every morning, we bake our baguettes fresh, using the traditional French technique that has been adapted by Vietnamese bakers for over a century. We hand-pickle our vegetables daily, using recipes passed down through three generations, ensuring that perfect balance of sweet, sour, and tangy flavors.
              </p>
              <p className="text-[#4a5565] text-base leading-relaxed">
                For the Vietnamese community in America, we strive to be more than just a restaurant—we're a taste of home, a connection to heritage, and a gathering place where stories and memories are shared over a perfectly crafted bánh mì.
              </p>

              {/* Decorative accent */}
              <motion.div
                className="pt-6 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 text-[#FDB714]">
                  <div className="w-2 h-2 bg-[#FDB714] rounded-full"></div>
                  <span className="text-sm font-bold tracking-wider">EST. 2020</span>
                  <div className="w-2 h-2 bg-[#FDB714] rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, delay }) {
  return (
    <motion.div
      className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group hover:border-[#FDB714]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="p-10 text-center relative z-10">
        {/* Icon in Circle */}
        <motion.div
          className="w-20 h-20 bg-[#FDB714] rounded-full mx-auto mb-6 shadow-lg flex items-center justify-center text-[#013a0f]"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-[#013a0f]" style={{ letterSpacing: '0.01px' }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#4a5565]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
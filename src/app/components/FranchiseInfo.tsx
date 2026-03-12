import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function FranchiseInfo() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '(212) 912-0000',
      link: 'tel:+12129120000'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'franchise@kingbanhmi.com',
      link: 'mailto:franchise@kingbanhmi.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      content: '123 Broadway, New York, NY 10007',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM EST',
      link: null
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Title */}
      <div>
        <h2 className="text-4xl font-bold text-[#013a0f] mb-4" style={{ letterSpacing: '1.5px' }}>
          GET IN TOUCH
        </h2>
        <div className="w-20 h-1 bg-[#FDB714] mb-6"></div>
        <p className="text-lg text-[#4a5565] leading-relaxed">
          Ready to start your franchise journey? Our team is here to answer all your questions 
          and guide you through the process.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-4">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#FDB714] hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center text-[#013a0f]">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#013a0f] mb-1">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-[#4a5565] hover:text-[#FDB714] transition-colors"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-[#4a5565]">{item.content}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#013a0f] rounded-xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4" style={{ letterSpacing: '1px' }}>
          Why Choose King Banh Mi?
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-2">
            <span className="text-[#FDB714] mt-1">✓</span>
            <span className="text-gray-200">Proven track record with multiple successful locations</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#FDB714] mt-1">✓</span>
            <span className="text-gray-200">Comprehensive training program and ongoing support</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#FDB714] mt-1">✓</span>
            <span className="text-gray-200">Strong brand recognition in Vietnamese communities</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#FDB714] mt-1">✓</span>
            <span className="text-gray-200">Authentic recipes and quality ingredients</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

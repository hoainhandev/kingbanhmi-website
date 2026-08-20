import { motion } from 'motion/react';
import { Heart, Users, GraduationCap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Văn hóa ấm áp',
    description:
      'Làm việc trong môi trường tôn trọng, hỗ trợ lẫn nhau — đúng tinh thần gia đình Việt.',
  },
  {
    icon: GraduationCap,
    title: 'Đào tạo chuyên sâu',
    description:
      'Được hướng dẫn quy trình, công thức và kỹ năng phục vụ theo chuẩn thương hiệu.',
  },
  {
    icon: TrendingUp,
    title: 'Cơ hội phát triển',
    description:
      'Lộ trình rõ ràng từ nhân viên đến trưởng ca / quản lý khi bạn sẵn sàng.',
  },
  {
    icon: Users,
    title: 'Đội ngũ gắn kết',
    description:
      'Cùng nhau phục vụ món ăn Việt authentic cho cộng đồng yêu thương King Banh Mi.',
  },
];

export function CareerBenefits() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mb-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#013a0f] mb-4"
          style={{ letterSpacing: '1.5px' }}
        >
          VÌ SAO LÀM VIỆC TẠI KING BANH MI
        </h2>
        <div className="w-20 h-1 bg-[#FDB714] mb-4"></div>
        <p className="text-lg text-[#4a5565] leading-relaxed max-w-2xl">
          Chúng tôi xây dựng đội ngũ bằng sự chân thành — mỗi ngày là cơ hội phục vụ
          hương vị Việt và phát triển bản thân.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#FDB714] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#FDB714] rounded-full flex items-center justify-center text-[#013a0f] mb-4">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#013a0f] text-lg mb-2">{benefit.title}</h3>
              <p className="text-[#4a5565] text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

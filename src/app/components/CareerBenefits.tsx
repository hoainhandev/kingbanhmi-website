import { motion } from 'motion/react';
import { Heart, Users, GraduationCap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Môi trường trẻ trung',
    description:
      'Làm việc cùng đội ngũ năng động, thân thiện — nơi mỗi ngày mang hương vị Việt đến khách hàng.',
  },
  {
    icon: GraduationCap,
    title: 'Đào tạo bài bản',
    description:
      'Được hướng dẫn quy trình, công thức và kỹ năng phục vụ theo chuẩn thương hiệu King Banh Mi.',
  },
  {
    icon: TrendingUp,
    title: 'Lộ trình thăng tiến',
    description:
      'Cơ hội phát triển từ nhân viên đến trưởng ca / quản lý khi bạn sẵn sàng đảm nhận.',
  },
  {
    icon: Heart,
    title: 'Chế độ phúc lợi',
    description:
      'Lương cạnh tranh theo năng lực, hỗ trợ ca làm việc linh hoạt và môi trường tôn trọng lẫn nhau.',
  },
];

export function CareerBenefits() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      aria-labelledby="career-benefits-heading"
    >
      <div className="mb-8">
        <h2
          id="career-benefits-heading"
          className="text-3xl md:text-4xl font-bold text-[#013a0f] mb-4"
          style={{ letterSpacing: '1.5px' }}
        >
          VÌ SAO CHỌN KING BANH MI
        </h2>
        <div className="w-20 h-1 bg-[#FDB714] mb-4" aria-hidden="true"></div>
        <p className="text-lg text-[#4a5565] leading-relaxed max-w-2xl">
          Chúng tôi xây dựng đội ngũ bằng sự chân thành — gửi hồ sơ để được ghi nhận vào talent
          pool, và liên hệ khi có vị trí phù hợp.
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

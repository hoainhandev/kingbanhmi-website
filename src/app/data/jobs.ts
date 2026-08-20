export type Job = {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time';
  salaryRange: string;
  description: string;
  requirements: string[];
};

export const BRANCH_OPTIONS = [
  'Westminster, CA (Bolsa Ave)',
  'Other / Flexible',
] as const;

export const jobs: Job[] = [
  {
    id: 'crew-member',
    title: 'Crew Member / Nhân viên phục vụ',
    location: 'Westminster, CA',
    type: 'Full-time',
    salaryRange: '$18 – $22 / hour',
    description:
      'Phục vụ khách hàng, chuẩn bị bánh mì và đồ uống, giữ vệ sinh khu vực làm việc, và mang đến trải nghiệm ấm áp theo phong cách King Banh Mi.',
    requirements: [
      'Ưu tiên có kinh nghiệm F&B (không bắt buộc)',
      'Thái độ tích cực, thân thiện với khách',
      'Có thể đứng làm việc trong ca dài',
      'Sẵn sàng làm ca tối / cuối tuần',
    ],
  },
  {
    id: 'barista',
    title: 'Barista / Nhân viên pha chế',
    location: 'Westminster, CA',
    type: 'Full-time',
    salaryRange: '$19 – $24 / hour',
    description:
      'Pha chế cà phê Việt, trà sữa, nước mía và các đồ uống đặc trưng; duy trì chất lượng đồ uống và hỗ trợ quầy phục vụ.',
    requirements: [
      'Kinh nghiệm barista hoặc pha chế là lợi thế',
      'Nhanh nhẹn, tỉ mỉ, chú ý chi tiết',
      'Làm việc tốt dưới áp lực giờ cao điểm',
      'Am hiểu hoặc muốn học cà phê Việt Nam',
    ],
  },
  {
    id: 'shift-lead',
    title: 'Shift Lead / Trưởng ca',
    location: 'Westminster, CA',
    type: 'Full-time',
    salaryRange: '$22 – $28 / hour',
    description:
      'Điều phối ca làm việc, hỗ trợ đào tạo nhân viên mới, đảm bảo vận hành suôn sẻ và tiêu chuẩn thương hiệu trong từng ca.',
    requirements: [
      'Ít nhất 1–2 năm kinh nghiệm F&B',
      'Kỹ năng lãnh đạo và giao tiếp tốt',
      'Có thể giải quyết tình huống nhanh',
      'Ưu tiên từng làm supervisor / lead',
    ],
  },
  {
    id: 'kitchen-prep',
    title: 'Kitchen Prep / Bếp chuẩn bị',
    location: 'Westminster, CA',
    type: 'Part-time',
    salaryRange: '$18 – $23 / hour',
    description:
      'Chuẩn bị nguyên liệu, cắt rau, ướp thịt, và hỗ trợ bếp theo công thức chuẩn của King Banh Mi.',
    requirements: [
      'Có kinh nghiệm bếp là lợi thế',
      'Tuân thủ vệ sinh an toàn thực phẩm',
      'Làm việc nhóm tốt',
      'Có thể làm việc trong môi trường bếp nóng',
    ],
  },
];

import { motion } from 'motion/react';
import { MapPin, Clock, Banknote } from 'lucide-react';
import { jobs, type Job } from '../data/jobs';

type CareerJobsProps = {
  onApply: (jobTitle: string) => void;
};

export function CareerJobs({ onApply }: CareerJobsProps) {
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
          VỊ TRÍ ĐANG TUYỂN
        </h2>
        <div className="w-20 h-1 bg-[#FDB714] mb-4"></div>
        <p className="text-lg text-[#4a5565] leading-relaxed max-w-2xl">
          Chọn vị trí phù hợp và gửi hồ sơ — chúng tôi sẽ liên hệ sớm nhất có thể.
        </p>
      </div>

      <ul className="space-y-6">
        {jobs.map((job, index) => (
          <JobCard key={job.id} job={job} index={index} onApply={onApply} />
        ))}
      </ul>
    </motion.section>
  );
}

function JobCard({
  job,
  index,
  onApply,
}: {
  job: Job;
  index: number;
  onApply: (jobTitle: string) => void;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="bg-white border-2 border-gray-100 rounded-xl p-6 sm:p-8 hover:border-[#FDB714] transition-all duration-300 list-none"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#013a0f] mb-3">{job.title}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-[#4a5565]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FDB714] shrink-0" aria-hidden="true" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FDB714] shrink-0" aria-hidden="true" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Banknote className="w-4 h-4 text-[#FDB714] shrink-0" aria-hidden="true" />
              {job.salaryRange}
            </span>
          </div>
        </div>
        <motion.button
          type="button"
          onClick={() => onApply(job.title)}
          className="shrink-0 bg-[#FDB714] text-[#013a0f] font-bold px-6 py-3 rounded-lg hover:bg-[#e6a612] transition-colors min-h-12"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Ứng tuyển
        </motion.button>
      </div>

      <p className="text-[#4a5565] text-sm leading-relaxed mb-4">{job.description}</p>

      <div>
        <p className="text-sm font-semibold text-[#013a0f] mb-2">Yêu cầu:</p>
        <ul className="space-y-1.5">
          {job.requirements.map((req) => (
            <li key={req} className="flex items-start gap-2 text-sm text-[#4a5565]">
              <span className="text-[#FDB714] mt-0.5 shrink-0">✓</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}

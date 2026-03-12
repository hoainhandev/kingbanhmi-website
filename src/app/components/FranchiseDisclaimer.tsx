import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

export function FranchiseDisclaimer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-100 border-2 border-gray-200 rounded-xl p-8"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <AlertCircle className="w-6 h-6 text-[#4a5565]" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-[#013a0f] mb-4 tracking-wide">
            FRANCHISE DISCLAIMER / LEGAL NOTICE
          </h3>
          <div className="space-y-3 text-sm text-[#4a5565] leading-relaxed">
            <p>
              The materials on this website are for general informational purposes only and are not 
              intended as an offer to sell, or the solicitation of an offer to buy, a franchise.
            </p>
            <p>
              Certain states regulate the offer and sale of franchises. If you are a resident of one 
              of these states, we will not offer you a franchise unless and until we have complied with 
              all applicable registration and disclosure requirements in your state.
            </p>
            <p>
              By way of example, we do not currently offer or sell franchises in the following states: 
              <span className="font-semibold text-[#013a0f]">
                {' '}California, Hawaii, Illinois, Indiana, Maryland, Michigan, Minnesota, New York, 
                North Dakota, Rhode Island, South Dakota, Virginia, Washington, and Wisconsin
              </span>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

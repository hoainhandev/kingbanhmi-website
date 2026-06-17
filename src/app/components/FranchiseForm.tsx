import { motion } from 'motion/react';
import { useState } from 'react';
import { Send } from 'lucide-react';

const WHAT_ATTRACTS_OPTIONS = [
  'Vietnamese food concept',
  'Banh mi category',
  'Beverage program',
  'Franchise growth opportunity',
  'Brand identity',
  'Personal connection to Vietnamese cuisine',
  'Other',
] as const;

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  cityState: '',
  bestTimeToContact: '',
  preferredContact: '',
  opportunityType: '',
  desiredMarket: '',
  hasLocationInMind: '',
  locationDetails: '',
  desiredOpenTimeline: '',
  availableCapital: '',
  planningFinancing: '',
  preApprovedFinancing: '',
  readyForFranchiseFee: '',
  hasRestaurantExperience: '',
  restaurantExperienceDetails: '',
  hasOwnedBusiness: '',
  ownedBusinessType: '',
  currentlyOperatingBusiness: '',
  currentBusinessDetails: '',
  ownerOperatorPlan: '',
  numberOfLocations: '',
  whatAttracts: [] as string[],
  whatAttractsOther: '',
  whyWorkInMarket: '',
  involvementLevel: '',
  hasPartnersInvestors: '',
  partnersDetails: '',
  willingToFollowStandards: '',
  hearAboutUs: '',
  hearAboutUsOther: '',
  questionsComments: '',
  applicantName: '',
  acknowledgment: false,
};

type FormData = typeof initialFormData;

const inputClass =
  'w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors';
const labelClass = 'block text-sm font-semibold text-[#013a0f] mb-2';
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3
        className="text-xl font-bold text-[#013a0f] mb-2 uppercase"
        style={{ letterSpacing: '0.5px' }}
      >
        {children}
      </h3>
      <div className="h-2 w-full bg-[#FDB714] rounded-full" />
    </div>
  );
}

function ConditionalField({ show, children }: { show: boolean; children: React.ReactNode }) {
  if (!show) return null;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

function RadioPills({
  name,
  value,
  options,
  onChange,
  required,
}: {
  name: keyof FormData;
  value: string;
  options: string[];
  onChange: (name: keyof FormData, value: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-required={required}>
      {options.map((option) => (
        <label
          key={option}
          className={`px-4 py-2 rounded-full border-2 cursor-pointer transition-colors text-sm ${
            value === option
              ? 'border-[#FDB714] bg-[#FDB714]/10 text-[#013a0f] font-semibold'
              : 'border-gray-200 hover:border-[#FDB714]/50 text-[#013a0f]'
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={() => onChange(name, option)}
            required={required && !value}
            className="sr-only"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export function FranchiseForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === 'fullName') {
        if (prev.applicantName === '' || prev.applicantName === prev.fullName) {
          next.applicantName = value;
        }
      }
      return next;
    });
  };

  const handleRadioChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (option: string) => {
    setFormData((prev) => {
      const current = prev.whatAttracts;
      const next = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, whatAttracts: next };
    });
  };

  const handleAcknowledgmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, acknowledgment: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acknowledgment) return;

    setIsSubmitting(true);

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        console.warn('Google Script URL not found. Running in demo mode.');
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          resetFormAfterDelay();
        }, 1500);
        return;
      }

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'whatAttracts') {
          data.append(key, (value as string[]).join(', '));
        } else if (key === 'acknowledgment') {
          data.append(key, value ? 'Yes' : 'No');
        } else {
          data.append(key, String(value));
        }
      });

      await fetch(scriptUrl, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      });

      setIsSubmitting(false);
      setSubmitted(true);
      resetFormAfterDelay();
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your form. Please try again later.');
    }
  };

  const resetFormAfterDelay = () => {
    setTimeout(() => {
      setSubmitted(false);
      setFormData(initialFormData);
    }, 5000);
  };

  const canSubmit = formData.acknowledgment && !isSubmitting;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-4 border-[#FDB714] w-full"
    >
      <h2 className="text-3xl font-bold text-[#013a0f] mb-6" style={{ letterSpacing: '1.5px' }}>
        FRANCHISE INQUIRY FORM
      </h2>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
          <p className="text-green-600">Your inquiry has been submitted. We'll contact you soon!</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 1. PERSONAL INFORMATION */}
          <section>
            <SectionHeading>1. Personal Information</SectionHeading>

            <div className="bg-[#fefbf3] border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cityState" className={labelClass}>
                  Current City / State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="cityState"
                  name="cityState"
                  value={formData.cityState}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="New York, NY"
                />
              </div>

              <div>
                <label className={labelClass}>Best Time to Contact</label>
                <RadioPills
                  name="bestTimeToContact"
                  value={formData.bestTimeToContact}
                  options={['Morning', 'Afternoon', 'Evening']}
                  onChange={handleRadioChange}
                />
              </div>

              <div>
                <label className={labelClass}>Preferred Contact Method</label>
                <RadioPills
                  name="preferredContact"
                  value={formData.preferredContact}
                  options={['Phone', 'Email', 'Text Message', 'Zoom-Video Call']}
                  onChange={handleRadioChange}
                />
              </div>
            </div>
          </section>

          {/* 2. FRANCHISE INTEREST */}
          <section className="space-y-4">
            <SectionHeading>2. Franchise Interest</SectionHeading>

            <div>
              <label className={labelClass}>Opportunity Type</label>
              <RadioPills
                name="opportunityType"
                value={formData.opportunityType}
                options={[
                  'Single Unit Franchise',
                  'Multi-Unit Development',
                  'Area Development',
                  'Not Sure Yet',
                ]}
                onChange={handleRadioChange}
              />
            </div>

            <div>
              <label htmlFor="desiredMarket" className={labelClass}>
                Which city and state are you interested in opening King Banh Mi?{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="desiredMarket"
                name="desiredMarket"
                value={formData.desiredMarket}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="e.g. Austin, TX"
              />
            </div>

            <div>
              <label className={labelClass}>Do you have a location in mind?</label>
              <RadioPills
                name="hasLocationInMind"
                value={formData.hasLocationInMind}
                options={['Yes', 'No']}
                onChange={handleRadioChange}
              />
            </div>

            <ConditionalField show={formData.hasLocationInMind === 'Yes'}>
              <div>
                <label htmlFor="locationDetails" className={labelClass}>
                  Location Details
                </label>
                <textarea
                  id="locationDetails"
                  name="locationDetails"
                  value={formData.locationDetails}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Please describe the location you have in mind..."
                />
              </div>
            </ConditionalField>

            <div>
              <label className={labelClass}>Desired Opening Timeline</label>
              <RadioPills
                name="desiredOpenTimeline"
                value={formData.desiredOpenTimeline}
                options={[
                  'Within 3-6 months',
                  'Within 6-12 months',
                  'Within 12-18 months',
                  'Still researching',
                ]}
                onChange={handleRadioChange}
              />
            </div>
          </section>

          {/* 3. INVESTMENT READINESS */}
          <section className="space-y-4">
            <SectionHeading>3. Investment Readiness</SectionHeading>

            <div>
              <label className={labelClass}>Available Capital</label>
              <RadioPills
                name="availableCapital"
                value={formData.availableCapital}
                options={[
                  'Under $100,000',
                  '$100,000-$250,000',
                  '$250,000-$500,000',
                  '$500,000-$1,000,000',
                  'Over $1,000,000',
                ]}
                onChange={handleRadioChange}
              />
            </div>

            <div>
              <label className={labelClass}>Are you planning to use financing?</label>
              <RadioPills
                name="planningFinancing"
                value={formData.planningFinancing}
                options={['Yes', 'No', 'Maybe']}
                onChange={handleRadioChange}
              />
            </div>

            <div>
              <label className={labelClass}>Do you have pre-approved financing?</label>
              <RadioPills
                name="preApprovedFinancing"
                value={formData.preApprovedFinancing}
                options={['Yes', 'No', 'In Process']}
                onChange={handleRadioChange}
              />
            </div>

            <div>
              <label className={labelClass}>
                Are you ready to pay the franchise fee upon approval?
              </label>
              <RadioPills
                name="readyForFranchiseFee"
                value={formData.readyForFranchiseFee}
                options={['Yes', 'No', 'Need more information']}
                onChange={handleRadioChange}
              />
            </div>
          </section>

          {/* 4. BUSINESS BACKGROUND */}
          <section className="space-y-4">
            <SectionHeading>4. Business Background</SectionHeading>

            <div>
              <label className={labelClass}>Do you have restaurant experience?</label>
              <RadioPills
                name="hasRestaurantExperience"
                value={formData.hasRestaurantExperience}
                options={['Yes', 'No']}
                onChange={handleRadioChange}
              />
            </div>

            <ConditionalField show={formData.hasRestaurantExperience === 'Yes'}>
              <div>
                <label htmlFor="restaurantExperienceDetails" className={labelClass}>
                  Please describe your restaurant experience
                </label>
                <textarea
                  id="restaurantExperienceDetails"
                  name="restaurantExperienceDetails"
                  value={formData.restaurantExperienceDetails}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Years of experience, roles, types of restaurants..."
                />
              </div>
            </ConditionalField>

            <div>
              <label className={labelClass}>Have you owned a business before?</label>
              <RadioPills
                name="hasOwnedBusiness"
                value={formData.hasOwnedBusiness}
                options={['Yes', 'No']}
                onChange={handleRadioChange}
              />
            </div>

            <ConditionalField show={formData.hasOwnedBusiness === 'Yes'}>
              <div>
                <label htmlFor="ownedBusinessType" className={labelClass}>
                  What type of business did you own?
                </label>
                <textarea
                  id="ownedBusinessType"
                  name="ownedBusinessType"
                  value={formData.ownedBusinessType}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe the business type and your role..."
                />
              </div>
            </ConditionalField>

            <div>
              <label className={labelClass}>Are you currently operating a business?</label>
              <RadioPills
                name="currentlyOperatingBusiness"
                value={formData.currentlyOperatingBusiness}
                options={['Yes', 'No']}
                onChange={handleRadioChange}
              />
            </div>

            <ConditionalField show={formData.currentlyOperatingBusiness === 'Yes'}>
              <div>
                <label htmlFor="currentBusinessDetails" className={labelClass}>
                  Please describe your current business
                </label>
                <textarea
                  id="currentBusinessDetails"
                  name="currentBusinessDetails"
                  value={formData.currentBusinessDetails}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Business name, type, and your involvement..."
                />
              </div>
            </ConditionalField>

            <div>
              <label className={labelClass}>Owner-Operator Plan</label>
              <RadioPills
                name="ownerOperatorPlan"
                value={formData.ownerOperatorPlan}
                options={[
                  'Yes, I plan to operate the restaurant myself',
                  'No, I plan to hire a manager',
                  'Not sure yet',
                ]}
                onChange={handleRadioChange}
              />
            </div>
          </section>

          {/* 5. MARKET & GROWTH GOALS */}
          <section className="space-y-4">
            <SectionHeading>5. Market &amp; Growth Goals</SectionHeading>

            <div>
              <label className={labelClass}>Number of Locations Planned</label>
              <RadioPills
                name="numberOfLocations"
                value={formData.numberOfLocations}
                options={[
                  '1 location',
                  '2-3 locations',
                  '4-5 locations',
                  '5+ locations',
                  'Not sure yet',
                ]}
                onChange={handleRadioChange}
              />
            </div>

            <div>
              <label className={labelClass}>What attracts you to King Banh Mi?</label>
              <div className="space-y-2">
                {WHAT_ATTRACTS_OPTIONS.map((option) => (
                  <label key={option} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.whatAttracts.includes(option)}
                      onChange={() => handleCheckboxToggle(option)}
                      className="mt-1 w-4 h-4 accent-[#FDB714] shrink-0"
                    />
                    <span className="text-sm text-[#013a0f]">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <ConditionalField show={formData.whatAttracts.includes('Other')}>
              <div>
                <label htmlFor="whatAttractsOther" className={labelClass}>
                  Please specify
                </label>
                <input
                  type="text"
                  id="whatAttractsOther"
                  name="whatAttractsOther"
                  value={formData.whatAttractsOther}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="What else attracts you to King Banh Mi?"
                />
              </div>
            </ConditionalField>

            <div>
              <label htmlFor="whyWorkInMarket" className={labelClass}>
                Why do you want to bring King Banh Mi to your market?{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="whyWorkInMarket"
                name="whyWorkInMarket"
                value={formData.whyWorkInMarket}
                onChange={handleChange}
                required
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your vision for this market..."
              />
            </div>
          </section>

          {/* 6. PARTNERSHIP FIT */}
          <section className="space-y-4">
            <SectionHeading>6. Partnership Fit</SectionHeading>

            <div>
              <label className={labelClass}>Involvement Level</label>
              <RadioPills
                name="involvementLevel"
                value={formData.involvementLevel}
                options={[
                  'Full-time operator',
                  'Part-time owner',
                  'Investor only',
                  'Family-operated',
                ]}
                onChange={handleRadioChange}
              />
            </div>

            <div>
              <label className={labelClass}>Do you have partners or investors?</label>
              <RadioPills
                name="hasPartnersInvestors"
                value={formData.hasPartnersInvestors}
                options={['Yes', 'No']}
                onChange={handleRadioChange}
              />
            </div>

            <ConditionalField show={formData.hasPartnersInvestors === 'Yes'}>
              <div>
                <label htmlFor="partnersDetails" className={labelClass}>
                  Partner / Investor Details
                </label>
                <textarea
                  id="partnersDetails"
                  name="partnersDetails"
                  value={formData.partnersDetails}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe your partners or investors and their roles..."
                />
              </div>
            </ConditionalField>

            <div>
              <label className={labelClass}>
                Are you willing to follow King Banh Mi brand standards and operating systems?
              </label>
              <RadioPills
                name="willingToFollowStandards"
                value={formData.willingToFollowStandards}
                options={['Yes', 'No', 'Need more information']}
                onChange={handleRadioChange}
              />
            </div>
          </section>

          {/* 7. ADDITIONAL INFORMATION */}
          <section className="space-y-4">
            <SectionHeading>7. Additional Information</SectionHeading>

            <div>
              <label className={labelClass}>How did you hear about us?</label>
              <RadioPills
                name="hearAboutUs"
                value={formData.hearAboutUs}
                options={[
                  'Website',
                  'Social Media',
                  'Referral',
                  'Existing Customer',
                  'Franchise Website',
                  'Event-Expo',
                  'Other',
                ]}
                onChange={handleRadioChange}
              />
            </div>

            <ConditionalField show={formData.hearAboutUs === 'Other'}>
              <div>
                <label htmlFor="hearAboutUsOther" className={labelClass}>
                  Please specify
                </label>
                <input
                  type="text"
                  id="hearAboutUsOther"
                  name="hearAboutUsOther"
                  value={formData.hearAboutUsOther}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="How did you hear about King Banh Mi?"
                />
              </div>
            </ConditionalField>

            <div>
              <label htmlFor="questionsComments" className={labelClass}>
                Questions or Comments
              </label>
              <textarea
                id="questionsComments"
                name="questionsComments"
                value={formData.questionsComments}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Any additional questions or comments..."
              />
            </div>
          </section>

          {/* 8. ACKNOWLEDGMENT */}
          <section className="space-y-4">
            <SectionHeading>8. Acknowledgment</SectionHeading>

            <div>
              <label htmlFor="applicantName" className={labelClass}>
                Applicant Name (Signature) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Type your full name to confirm"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.acknowledgment}
                onChange={handleAcknowledgmentChange}
                required
                className="mt-1 w-4 h-4 accent-[#FDB714] shrink-0"
              />
              <span className="text-sm text-[#013a0f] leading-relaxed">
                By submitting this form, I understand that this is an inquiry only and does not
                guarantee franchise approval. I understand that any franchise opportunity will be
                subject to review, qualification, approval, and receipt of the Franchise Disclosure
                Document where required by law. <span className="text-red-500">*</span>
              </span>
            </label>
          </section>

          <motion.button
            type="submit"
            disabled={!canSubmit}
            className="w-full bg-[#FDB714] text-[#013a0f] font-bold py-4 rounded-lg hover:bg-[#e6a612] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: canSubmit ? 1.02 : 1 }}
            whileTap={{ scale: canSubmit ? 0.98 : 1 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#013a0f] border-t-transparent rounded-full animate-spin"></div>
                <span>SUBMITTING...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>START MY FRANCHISE JOURNEY</span>
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

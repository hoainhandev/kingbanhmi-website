import { motion } from 'motion/react';
import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import { Send, FileText, X } from 'lucide-react';
import { GOOGLE_SCRIPT_URL } from '../config/forms';

const inputClass =
  'w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none focus:ring-2 focus:ring-[#FDB714]/40 transition-colors';
const labelClass = 'block text-sm font-semibold text-[#013a0f] mb-2';
const errorClass = 'mt-1 text-sm text-red-500';

const POSITION_OPTIONS = [
  'Sales Associate',
  'Kitchen Staff / Chef',
  'Cashier',
  'Shift Supervisor / Store Manager',
  'Delivery Driver',
  'Marketing / Content',
  'Accounting',
  'Human Resources',
  'Other',
] as const;

const BRANCH_OPTIONS = [
  'Westminster, CA (Bolsa Ave)',
  'Other / Flexible',
] as const;

const EDUCATION_OPTIONS = [
  'High School',
  'Associate / Vocational',
  "Bachelor's Degree",
  'Graduate Degree',
  'Other',
] as const;

const HEAR_ABOUT_OPTIONS = [
  'Facebook',
  'Website',
  'Referral from a friend',
  'In-store',
  'Other',
] as const;

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ACCEPTED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const ACCEPTED_CV_EXTENSIONS = ['.pdf', '.doc', '.docx'];

type CareerFormData = {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  interestedPosition: string;
  interestedPositionOther: string;
  preferredBranch: string;
  employmentType: string;
  expectedSalary: string;
  availableStartDate: string;
  education: string;
  yearsOfExperience: string;
  lastWorkplace: string;
  experienceDescription: string;
  canWorkNightsWeekends: string;
  hasFnBExperience: string;
  hearAboutUs: string;
  notes: string;
  privacyConsent: boolean;
};

const initialFormData: CareerFormData = {
  fullName: '',
  dateOfBirth: '',
  gender: '',
  phone: '',
  email: '',
  address: '',
  interestedPosition: '',
  interestedPositionOther: '',
  preferredBranch: '',
  employmentType: '',
  expectedSalary: '',
  availableStartDate: '',
  education: '',
  yearsOfExperience: '',
  lastWorkplace: '',
  experienceDescription: '',
  canWorkNightsWeekends: '',
  hasFnBExperience: '',
  hearAboutUs: '',
  notes: '',
  privacyConsent: false,
};

type FormErrors = Partial<Record<keyof CareerFormData | 'cv', string>>;

export type CareerFormHandle = {
  scrollIntoView: () => void;
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3
        className="text-xl font-bold text-[#013a0f] mb-2 uppercase"
        style={{ letterSpacing: '0.5px' }}
      >
        {children}
      </h3>
      <div className="h-2 w-full bg-[#FDB714] rounded-full" aria-hidden="true" />
    </div>
  );
}

function RadioPills({
  name,
  value,
  options,
  onChange,
  required,
  error,
}: {
  name: keyof CareerFormData;
  value: string;
  options: string[];
  onChange: (name: keyof CareerFormData, value: string) => void;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-required={required}
        aria-invalid={!!error}
      >
        {options.map((option) => (
          <label
            key={option}
            className={`px-4 py-2 rounded-full border-2 cursor-pointer transition-colors text-sm min-h-11 inline-flex items-center ${
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
              className="sr-only"
            />
            {option}
          </label>
        ))}
      </div>
      {error && <p className={errorClass}>{error}</p>}
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

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Unable to read the CV file.'));
    reader.readAsDataURL(file);
  });
}

export const CareerForm = forwardRef<CareerFormHandle>(function CareerForm(_, ref) {
  const [formData, setFormData] = useState<CareerFormData>(initialFormData);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fieldRefs = useRef<Partial<Record<keyof FormErrors, HTMLElement | null>>>({});

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  }));

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
      setFormData(initialFormData);
      setCvFile(null);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 5000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name as keyof FormErrors];
      return next;
    });
  };

  const handleRadioChange = (name: keyof CareerFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const lowerName = file.name.toLowerCase();
    const hasValidExt = ACCEPTED_CV_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
    const hasValidType = !file.type || ACCEPTED_CV_TYPES.includes(file.type);

    if (!hasValidExt || !hasValidType) {
      setCvFile(null);
      setErrors((prev) => ({
        ...prev,
        cv: 'Only .pdf, .doc, or .docx files are accepted.',
      }));
      e.target.value = '';
      return;
    }

    if (file.size > MAX_CV_BYTES) {
      setCvFile(null);
      setErrors((prev) => ({
        ...prev,
        cv: 'CV file must be 5MB or smaller.',
      }));
      e.target.value = '';
      return;
    }

    setCvFile(file);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.cv;
      return next;
    });
  };

  const clearCv = () => {
    setCvFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!formData.dateOfBirth) next.dateOfBirth = 'Please select your date of birth.';
    if (!formData.gender) next.gender = 'Please select your gender.';
    if (!formData.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!formData.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!formData.address.trim()) next.address = 'Please enter your current address.';
    if (!formData.interestedPosition) {
      next.interestedPosition = 'Please select an area of interest.';
    }
    if (formData.interestedPosition === 'Other' && !formData.interestedPositionOther.trim()) {
      next.interestedPositionOther = 'Please enter your preferred role.';
    }
    if (!formData.preferredBranch) {
      next.preferredBranch = 'Please select a preferred location / branch.';
    }
    if (!formData.employmentType) next.employmentType = 'Please select an employment type.';
    if (!formData.availableStartDate) {
      next.availableStartDate = 'Please select your earliest start date.';
    }
    if (!formData.education) next.education = 'Please select your education level.';
    if (!formData.yearsOfExperience) {
      next.yearsOfExperience = 'Please select your years of experience.';
    }
    if (!formData.canWorkNightsWeekends) {
      next.canWorkNightsWeekends = 'Please indicate evening / weekend availability.';
    }
    if (!formData.hasFnBExperience) {
      next.hasFnBExperience = 'Please indicate whether you have F&B experience.';
    }
    if (!formData.hearAboutUs) {
      next.hearAboutUs = 'Please tell us how you heard about us.';
    }
    if (!formData.privacyConsent) {
      next.privacyConsent = 'Please agree so we can store your information for recruitment.';
    }
    return next;
  };

  const scrollToFirstError = (nextErrors: FormErrors) => {
    const order: (keyof FormErrors)[] = [
      'fullName',
      'dateOfBirth',
      'gender',
      'phone',
      'email',
      'address',
      'interestedPosition',
      'interestedPositionOther',
      'preferredBranch',
      'employmentType',
      'availableStartDate',
      'education',
      'yearsOfExperience',
      'canWorkNightsWeekends',
      'hasFnBExperience',
      'hearAboutUs',
      'cv',
      'privacyConsent',
    ];
    for (const key of order) {
      if (nextErrors[key]) {
        const el = fieldRefs.current[key];
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if ('focus' in el && typeof el.focus === 'function') {
            try {
              el.focus({ preventScroll: true });
            } catch {
              /* ignore */
            }
          }
        }
        break;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      scrollToFirstError(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const scriptUrl = GOOGLE_SCRIPT_URL;

      if (!scriptUrl) {
        console.warn('Google Script URL not found. Running in demo mode.');
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
        }, 1500);
        return;
      }

      const data = new FormData();
      data.append('formType', 'career');

      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'privacyConsent') {
          data.append(key, value ? 'Yes' : 'No');
        } else {
          data.append(key, String(value));
        }
      });

      if (cvFile) {
        const fileBase64 = await readFileAsBase64(cvFile);
        data.append('fileName', cvFile.name);
        data.append('mimeType', cvFile.type || 'application/octet-stream');
        data.append('fileBase64', fileBase64);
      }

      await fetch(scriptUrl, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      });

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting career form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your application. Please try again later.');
    }
  };

  const canSubmit = formData.privacyConsent && !isSubmitting;

  return (
    <motion.div
      ref={formContainerRef}
      id="career-application-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-4 border-[#FDB714] w-full scroll-mt-28"
    >
      <h2 className="text-3xl font-bold text-[#013a0f] mb-2" style={{ letterSpacing: '1.5px' }}>
        APPLICATION FORM
      </h2>
      <p className="text-[#4a5565] text-sm mb-6 leading-relaxed">
        Join the King Banh Mi talent pool. We&apos;ll reach out when a role that fits your
        background opens up.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
          role="status"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
          <p className="text-green-600">
            Thanks for applying! Your application has been received. We&apos;ll be in touch as soon
            as a suitable role opens up.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <section>
            <SectionHeading>A. Personal Information</SectionHeading>
            <div className="bg-[#fefbf3] border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4">
              <div ref={(el) => { fieldRefs.current.fullName = el; }}>
                <label htmlFor="career-fullName" className={labelClass}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="career-fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="John Doe"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'career-fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="career-fullName-error" className={errorClass}>{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div ref={(el) => { fieldRefs.current.dateOfBirth = el; }}>
                  <label htmlFor="career-dateOfBirth" className={labelClass}>
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="career-dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={inputClass}
                    aria-invalid={!!errors.dateOfBirth}
                  />
                  {errors.dateOfBirth && <p className={errorClass}>{errors.dateOfBirth}</p>}
                </div>
                <div ref={(el) => { fieldRefs.current.gender = el; }}>
                  <span className={labelClass}>
                    Gender <span className="text-red-500">*</span>
                  </span>
                  <RadioPills
                    name="gender"
                    value={formData.gender}
                    options={['Male', 'Female', 'Other']}
                    onChange={handleRadioChange}
                    required
                    error={errors.gender}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div ref={(el) => { fieldRefs.current.phone = el; }}>
                  <label htmlFor="career-phone" className={labelClass}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="career-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="(657) 400-9122"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                </div>
                <div ref={(el) => { fieldRefs.current.email = el; }}>
                  <label htmlFor="career-email" className={labelClass}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="career-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>
              </div>

              <div ref={(el) => { fieldRefs.current.address = el; }}>
                <label htmlFor="career-address" className={labelClass}>
                  Current Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="career-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="City, State"
                  aria-invalid={!!errors.address}
                />
                {errors.address && <p className={errorClass}>{errors.address}</p>}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading>B. Role Preferences</SectionHeading>

            <div ref={(el) => { fieldRefs.current.interestedPosition = el; }}>
              <label htmlFor="career-interestedPosition" className={labelClass}>
                Area of Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="career-interestedPosition"
                name="interestedPosition"
                value={formData.interestedPosition}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.interestedPosition}
              >
                <option value="">Select an area of interest</option>
                {POSITION_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.interestedPosition && (
                <p className={errorClass}>{errors.interestedPosition}</p>
              )}
            </div>

            <ConditionalField show={formData.interestedPosition === 'Other'}>
              <div ref={(el) => { fieldRefs.current.interestedPositionOther = el; }}>
                <label htmlFor="career-interestedPositionOther" className={labelClass}>
                  Preferred Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="career-interestedPositionOther"
                  name="interestedPositionOther"
                  value={formData.interestedPositionOther}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Tell us the role you're interested in"
                  aria-invalid={!!errors.interestedPositionOther}
                />
                {errors.interestedPositionOther && (
                  <p className={errorClass}>{errors.interestedPositionOther}</p>
                )}
              </div>
            </ConditionalField>

            <div ref={(el) => { fieldRefs.current.preferredBranch = el; }}>
              <label htmlFor="career-preferredBranch" className={labelClass}>
                Preferred Location / Branch <span className="text-red-500">*</span>
              </label>
              <select
                id="career-preferredBranch"
                name="preferredBranch"
                value={formData.preferredBranch}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.preferredBranch}
              >
                <option value="">Select a location / branch</option>
                {BRANCH_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.preferredBranch && <p className={errorClass}>{errors.preferredBranch}</p>}
            </div>

            <div ref={(el) => { fieldRefs.current.employmentType = el; }}>
              <span className={labelClass}>
                Employment Type <span className="text-red-500">*</span>
              </span>
              <RadioPills
                name="employmentType"
                value={formData.employmentType}
                options={['Full-time', 'Part-time', 'Internship']}
                onChange={handleRadioChange}
                required
                error={errors.employmentType}
              />
            </div>

            <div>
              <label htmlFor="career-expectedSalary" className={labelClass}>
                Expected Salary
              </label>
              <input
                type="text"
                id="career-expectedSalary"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. $20 / hour"
              />
            </div>

            <div ref={(el) => { fieldRefs.current.availableStartDate = el; }}>
              <label htmlFor="career-availableStartDate" className={labelClass}>
                Earliest Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="career-availableStartDate"
                name="availableStartDate"
                value={formData.availableStartDate}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.availableStartDate}
              />
              {errors.availableStartDate && (
                <p className={errorClass}>{errors.availableStartDate}</p>
              )}
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading>C. Experience &amp; Education</SectionHeading>

            <div ref={(el) => { fieldRefs.current.education = el; }}>
              <label htmlFor="career-education" className={labelClass}>
                Education Level <span className="text-red-500">*</span>
              </label>
              <select
                id="career-education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.education}
              >
                <option value="">Select education level</option>
                {EDUCATION_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.education && <p className={errorClass}>{errors.education}</p>}
            </div>

            <div ref={(el) => { fieldRefs.current.yearsOfExperience = el; }}>
              <span className={labelClass}>
                Years of Experience <span className="text-red-500">*</span>
              </span>
              <RadioPills
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                options={['None', 'Less than 1 year', '1-3 years', 'More than 3 years']}
                onChange={handleRadioChange}
                required
                error={errors.yearsOfExperience}
              />
            </div>

            <div>
              <label htmlFor="career-lastWorkplace" className={labelClass}>
                Most Recent Employer &amp; Position
              </label>
              <input
                type="text"
                id="career-lastWorkplace"
                name="lastWorkplace"
                value={formData.lastWorkplace}
                onChange={handleChange}
                className={inputClass}
                placeholder="Company name — role"
              />
            </div>

            <div>
              <label htmlFor="career-experienceDescription" className={labelClass}>
                Tell us about yourself and any relevant experience
              </label>
              <textarea
                id="career-experienceDescription"
                name="experienceDescription"
                value={formData.experienceDescription}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Share a short introduction and any relevant experience..."
              />
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading>D. Additional Information</SectionHeading>

            <div ref={(el) => { fieldRefs.current.canWorkNightsWeekends = el; }}>
              <span className={labelClass}>
                Available for evening / weekend shifts? <span className="text-red-500">*</span>
              </span>
              <RadioPills
                name="canWorkNightsWeekends"
                value={formData.canWorkNightsWeekends}
                options={['Yes', 'No']}
                onChange={handleRadioChange}
                required
                error={errors.canWorkNightsWeekends}
              />
            </div>

            <div ref={(el) => { fieldRefs.current.hasFnBExperience = el; }}>
              <span className={labelClass}>
                Previous F&amp;B experience? <span className="text-red-500">*</span>
              </span>
              <RadioPills
                name="hasFnBExperience"
                value={formData.hasFnBExperience}
                options={['Yes', 'No']}
                onChange={handleRadioChange}
                required
                error={errors.hasFnBExperience}
              />
            </div>

            <div ref={(el) => { fieldRefs.current.hearAboutUs = el; }}>
              <label htmlFor="career-hearAboutUs" className={labelClass}>
                How did you hear about us? <span className="text-red-500">*</span>
              </label>
              <select
                id="career-hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.hearAboutUs}
              >
                <option value="">Select a source</option>
                {HEAR_ABOUT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.hearAboutUs && <p className={errorClass}>{errors.hearAboutUs}</p>}
            </div>

            <div ref={(el) => { fieldRefs.current.cv = el; }}>
              <label htmlFor="career-cv" className={labelClass}>
                Upload CV / Resume
              </label>
              <input
                ref={fileInputRef}
                type="file"
                id="career-cv"
                name="cv"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleCvChange}
                className="block w-full text-sm text-[#013a0f] file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:bg-[#FDB714] file:text-[#013a0f] file:font-semibold hover:file:bg-[#e6a612] cursor-pointer"
                aria-invalid={!!errors.cv}
              />
              <p className="mt-1 text-xs text-[#4a5565]">
                Optional but encouraged — PDF, DOC, or DOCX up to 5MB
              </p>
              {cvFile && (
                <div className="mt-3 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                  <FileText className="w-5 h-5 text-[#013a0f] shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[#013a0f] flex-1 truncate">{cvFile.name}</span>
                  <button
                    type="button"
                    onClick={clearCv}
                    className="p-2 rounded-lg hover:bg-gray-200 text-[#013a0f] min-h-11 min-w-11 inline-flex items-center justify-center"
                    aria-label="Remove CV file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              {errors.cv && <p className={errorClass}>{errors.cv}</p>}
            </div>

            <div>
              <label htmlFor="career-notes" className={labelClass}>
                Additional Notes
              </label>
              <textarea
                id="career-notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className={`${inputClass} resize-none`}
                placeholder="Anything else you'd like us to know..."
              />
            </div>

            <label
              ref={(el) => { fieldRefs.current.privacyConsent = el; }}
              className="flex items-start gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.privacyConsent}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, privacyConsent: e.target.checked }));
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.privacyConsent;
                    return next;
                  });
                }}
                className="mt-1 w-4 h-4 accent-[#FDB714] shrink-0"
                aria-invalid={!!errors.privacyConsent}
              />
              <span className="text-sm text-[#013a0f] leading-relaxed">
                I agree to allow King Banh Mi to store my personal information for recruitment
                purposes. <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.privacyConsent && <p className={errorClass}>{errors.privacyConsent}</p>}
          </section>

          <motion.button
            type="submit"
            disabled={!canSubmit}
            className="w-full bg-[#FDB714] text-[#013a0f] font-bold py-4 rounded-lg hover:bg-[#e6a612] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-14"
            whileHover={{ scale: canSubmit ? 1.02 : 1 }}
            whileTap={{ scale: canSubmit ? 0.98 : 1 }}
          >
            {isSubmitting ? (
              <>
                <div
                  className="w-5 h-5 border-2 border-[#013a0f] border-t-transparent rounded-full animate-spin"
                  aria-hidden="true"
                ></div>
                <span>SUBMITTING...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>SUBMIT APPLICATION</span>
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
});

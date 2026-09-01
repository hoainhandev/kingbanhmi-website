import { motion } from 'motion/react';
import { useEffect, useImperativeHandle, useMemo, useRef, useState, forwardRef } from 'react';
import { Send, FileText, X } from 'lucide-react';
import { CAREERS_SCRIPT_URL } from '../config/forms';
import { useCareersLang } from '../../i18n/CareersLangContext';
import { CareersLanguageSwitcher } from '../../i18n/CareersLanguageSwitcher';
import {
  getBranchOptions,
  getEducationOptions,
  getEmploymentTypeOptions,
  getExperienceYearOptions,
  getGenderOptions,
  getHearAboutOptions,
  getPositionOptions,
  getYesNoOptions,
  type OptionItem,
} from '../../i18n/careers';

const inputClass =
  'w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none focus:ring-2 focus:ring-[#FDB714]/40 transition-colors';
const labelClass = 'block text-sm font-semibold text-[#013a0f] mb-2';
const errorClass = 'mt-1 text-sm text-red-500';

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
  options: OptionItem[];
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
            key={option.value}
            className={`px-4 py-2 rounded-full border-2 cursor-pointer transition-colors text-sm min-h-11 inline-flex items-center ${
              value === option.value
                ? 'border-[#FDB714] bg-[#FDB714]/10 text-[#013a0f] font-semibold'
                : 'border-gray-200 hover:border-[#FDB714]/50 text-[#013a0f]'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(name, option.value)}
              className="sr-only"
            />
            {option.label}
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
    reader.onerror = () => reject(new Error('read_failed'));
    reader.readAsDataURL(file);
  });
}

export const CareerForm = forwardRef<CareerFormHandle>(function CareerForm(_, ref) {
  const { lang, t } = useCareersLang();
  const [formData, setFormData] = useState<CareerFormData>(initialFormData);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fieldRefs = useRef<Partial<Record<keyof FormErrors, HTMLElement | null>>>({});

  const genderOptions = useMemo(() => getGenderOptions(t), [t]);
  const employmentTypeOptions = useMemo(() => getEmploymentTypeOptions(t), [t]);
  const experienceYearOptions = useMemo(() => getExperienceYearOptions(t), [t]);
  const yesNoOptions = useMemo(() => getYesNoOptions(t), [t]);
  const positionOptions = useMemo(() => getPositionOptions(t), [t]);
  const branchOptions = useMemo(() => getBranchOptions(t), [t]);
  const educationOptions = useMemo(() => getEducationOptions(t), [t]);
  const hearAboutOptions = useMemo(() => getHearAboutOptions(t), [t]);

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
        cv: t.form.errors.cvInvalidType,
      }));
      e.target.value = '';
      return;
    }

    if (file.size > MAX_CV_BYTES) {
      setCvFile(null);
      setErrors((prev) => ({
        ...prev,
        cv: t.form.errors.cvTooLarge,
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
    if (!formData.fullName.trim()) next.fullName = t.form.errors.fullName;
    if (!formData.dateOfBirth) next.dateOfBirth = t.form.errors.dateOfBirth;
    if (!formData.gender) next.gender = t.form.errors.gender;
    if (!formData.phone.trim()) next.phone = t.form.errors.phone;
    if (!formData.email.trim()) {
      next.email = t.form.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = t.form.errors.emailInvalid;
    }
    if (!formData.address.trim()) next.address = t.form.errors.address;
    if (!formData.interestedPosition) {
      next.interestedPosition = t.form.errors.interestedPosition;
    }
    if (formData.interestedPosition === 'Other' && !formData.interestedPositionOther.trim()) {
      next.interestedPositionOther = t.form.errors.interestedPositionOther;
    }
    if (!formData.preferredBranch) {
      next.preferredBranch = t.form.errors.preferredBranch;
    }
    if (!formData.employmentType) next.employmentType = t.form.errors.employmentType;
    if (!formData.availableStartDate) {
      next.availableStartDate = t.form.errors.availableStartDate;
    }
    if (!formData.education) next.education = t.form.errors.education;
    if (!formData.yearsOfExperience) {
      next.yearsOfExperience = t.form.errors.yearsOfExperience;
    }
    if (!formData.canWorkNightsWeekends) {
      next.canWorkNightsWeekends = t.form.errors.canWorkNightsWeekends;
    }
    if (!formData.hasFnBExperience) {
      next.hasFnBExperience = t.form.errors.hasFnBExperience;
    }
    if (!formData.hearAboutUs) {
      next.hearAboutUs = t.form.errors.hearAboutUs;
    }
    if (!formData.privacyConsent) {
      next.privacyConsent = t.form.errors.privacyConsent;
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
      const scriptUrl = CAREERS_SCRIPT_URL;

      if (!scriptUrl) {
        console.warn('Careers Script URL not found. Running in demo mode.');
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
        }, 1500);
        return;
      }

      const payload: Record<string, string> = {
        fullName: formData.fullName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        interestedPosition: formData.interestedPosition,
        interestedPositionOther: formData.interestedPositionOther,
        preferredBranch: formData.preferredBranch,
        employmentType: formData.employmentType,
        expectedSalary: formData.expectedSalary,
        availableStartDate: formData.availableStartDate,
        education: formData.education,
        yearsOfExperience: formData.yearsOfExperience,
        lastWorkplace: formData.lastWorkplace,
        experienceDescription: formData.experienceDescription,
        canWorkNightsWeekends: formData.canWorkNightsWeekends,
        hasFnBExperience: formData.hasFnBExperience,
        hearAboutUs: formData.hearAboutUs,
        notes: formData.notes,
        privacyConsent: formData.privacyConsent ? 'Yes' : 'No',
        lang,
      };

      if (cvFile) {
        try {
          payload.fileName = cvFile.name;
          payload.mimeType = cvFile.type || 'application/octet-stream';
          payload.fileBase64 = await readFileAsBase64(cvFile);
        } catch {
          setIsSubmitting(false);
          setErrors((prev) => ({ ...prev, cv: t.form.errors.cvReadFailed }));
          return;
        }
      }

      await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting career form:', error);
      setIsSubmitting(false);
      alert(t.form.submitError);
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
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
        <h2 className="text-3xl font-bold text-[#013a0f]" style={{ letterSpacing: '1.5px' }}>
          {t.form.heading}
        </h2>
        <CareersLanguageSwitcher className="self-start sm:mt-1" />
      </div>
      <p className="text-[#4a5565] text-sm mb-6 leading-relaxed">{t.form.intro}</p>

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
          <h3 className="text-2xl font-bold text-green-700 mb-2">{t.form.thankYouTitle}</h3>
          <p className="text-green-600">{t.form.thankYouMessage}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <section>
            <SectionHeading>{t.form.sections.personal}</SectionHeading>
            <div className="bg-[#fefbf3] border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4">
              <div ref={(el) => { fieldRefs.current.fullName = el; }}>
                <label htmlFor="career-fullName" className={labelClass}>
                  {t.form.labels.fullName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="career-fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.form.placeholders.fullName}
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
                    {t.form.labels.dateOfBirth} <span className="text-red-500">*</span>
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
                    {t.form.labels.gender} <span className="text-red-500">*</span>
                  </span>
                  <RadioPills
                    name="gender"
                    value={formData.gender}
                    options={genderOptions}
                    onChange={handleRadioChange}
                    required
                    error={errors.gender}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div ref={(el) => { fieldRefs.current.phone = el; }}>
                  <label htmlFor="career-phone" className={labelClass}>
                    {t.form.labels.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="career-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={t.form.placeholders.phone}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                </div>
                <div ref={(el) => { fieldRefs.current.email = el; }}>
                  <label htmlFor="career-email" className={labelClass}>
                    {t.form.labels.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="career-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder={t.form.placeholders.email}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>
              </div>

              <div ref={(el) => { fieldRefs.current.address = el; }}>
                <label htmlFor="career-address" className={labelClass}>
                  {t.form.labels.address} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="career-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.form.placeholders.address}
                  aria-invalid={!!errors.address}
                />
                {errors.address && <p className={errorClass}>{errors.address}</p>}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading>{t.form.sections.rolePreferences}</SectionHeading>

            <div ref={(el) => { fieldRefs.current.interestedPosition = el; }}>
              <label htmlFor="career-interestedPosition" className={labelClass}>
                {t.form.labels.interestedPosition} <span className="text-red-500">*</span>
              </label>
              <select
                id="career-interestedPosition"
                name="interestedPosition"
                value={formData.interestedPosition}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.interestedPosition}
              >
                <option value="">{t.form.placeholders.interestedPosition}</option>
                {positionOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.interestedPosition && (
                <p className={errorClass}>{errors.interestedPosition}</p>
              )}
            </div>

            <ConditionalField show={formData.interestedPosition === 'Other'}>
              <div ref={(el) => { fieldRefs.current.interestedPositionOther = el; }}>
                <label htmlFor="career-interestedPositionOther" className={labelClass}>
                  {t.form.labels.interestedPositionOther} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="career-interestedPositionOther"
                  name="interestedPositionOther"
                  value={formData.interestedPositionOther}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.form.placeholders.interestedPositionOther}
                  aria-invalid={!!errors.interestedPositionOther}
                />
                {errors.interestedPositionOther && (
                  <p className={errorClass}>{errors.interestedPositionOther}</p>
                )}
              </div>
            </ConditionalField>

            <div ref={(el) => { fieldRefs.current.preferredBranch = el; }}>
              <label htmlFor="career-preferredBranch" className={labelClass}>
                {t.form.labels.preferredBranch} <span className="text-red-500">*</span>
              </label>
              <select
                id="career-preferredBranch"
                name="preferredBranch"
                value={formData.preferredBranch}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.preferredBranch}
              >
                <option value="">{t.form.placeholders.preferredBranch}</option>
                {branchOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.preferredBranch && <p className={errorClass}>{errors.preferredBranch}</p>}
            </div>

            <div ref={(el) => { fieldRefs.current.employmentType = el; }}>
              <span className={labelClass}>
                {t.form.labels.employmentType} <span className="text-red-500">*</span>
              </span>
              <RadioPills
                name="employmentType"
                value={formData.employmentType}
                options={employmentTypeOptions}
                onChange={handleRadioChange}
                required
                error={errors.employmentType}
              />
            </div>

            <div>
              <label htmlFor="career-expectedSalary" className={labelClass}>
                {t.form.labels.expectedSalary}
              </label>
              <input
                type="text"
                id="career-expectedSalary"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                className={inputClass}
                placeholder={t.form.placeholders.expectedSalary}
              />
            </div>

            <div ref={(el) => { fieldRefs.current.availableStartDate = el; }}>
              <label htmlFor="career-availableStartDate" className={labelClass}>
                {t.form.labels.availableStartDate} <span className="text-red-500">*</span>
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
            <SectionHeading>{t.form.sections.experienceEducation}</SectionHeading>

            <div ref={(el) => { fieldRefs.current.education = el; }}>
              <label htmlFor="career-education" className={labelClass}>
                {t.form.labels.education} <span className="text-red-500">*</span>
              </label>
              <select
                id="career-education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.education}
              >
                <option value="">{t.form.placeholders.education}</option>
                {educationOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.education && <p className={errorClass}>{errors.education}</p>}
            </div>

            <div ref={(el) => { fieldRefs.current.yearsOfExperience = el; }}>
              <span className={labelClass}>
                {t.form.labels.yearsOfExperience} <span className="text-red-500">*</span>
              </span>
              <RadioPills
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                options={experienceYearOptions}
                onChange={handleRadioChange}
                required
                error={errors.yearsOfExperience}
              />
            </div>

            <div>
              <label htmlFor="career-lastWorkplace" className={labelClass}>
                {t.form.labels.lastWorkplace}
              </label>
              <input
                type="text"
                id="career-lastWorkplace"
                name="lastWorkplace"
                value={formData.lastWorkplace}
                onChange={handleChange}
                className={inputClass}
                placeholder={t.form.placeholders.lastWorkplace}
              />
            </div>

            <div>
              <label htmlFor="career-experienceDescription" className={labelClass}>
                {t.form.labels.experienceDescription}
              </label>
              <textarea
                id="career-experienceDescription"
                name="experienceDescription"
                value={formData.experienceDescription}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder={t.form.placeholders.experienceDescription}
              />
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading>{t.form.sections.additional}</SectionHeading>

            <div ref={(el) => { fieldRefs.current.canWorkNightsWeekends = el; }}>
              <span className={labelClass}>
                {t.form.labels.canWorkNightsWeekends} <span className="text-red-500">*</span>
              </span>
              <RadioPills
                name="canWorkNightsWeekends"
                value={formData.canWorkNightsWeekends}
                options={yesNoOptions}
                onChange={handleRadioChange}
                required
                error={errors.canWorkNightsWeekends}
              />
            </div>

            <div ref={(el) => { fieldRefs.current.hasFnBExperience = el; }}>
              <span className={labelClass}>
                {t.form.labels.hasFnBExperience} <span className="text-red-500">*</span>
              </span>
              <RadioPills
                name="hasFnBExperience"
                value={formData.hasFnBExperience}
                options={yesNoOptions}
                onChange={handleRadioChange}
                required
                error={errors.hasFnBExperience}
              />
            </div>

            <div ref={(el) => { fieldRefs.current.hearAboutUs = el; }}>
              <label htmlFor="career-hearAboutUs" className={labelClass}>
                {t.form.labels.hearAboutUs} <span className="text-red-500">*</span>
              </label>
              <select
                id="career-hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                className={inputClass}
                aria-invalid={!!errors.hearAboutUs}
              >
                <option value="">{t.form.placeholders.hearAboutUs}</option>
                {hearAboutOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.hearAboutUs && <p className={errorClass}>{errors.hearAboutUs}</p>}
            </div>

            <div ref={(el) => { fieldRefs.current.cv = el; }}>
              <label htmlFor="career-cv" className={labelClass}>
                {t.form.labels.cv}
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
              <p className="mt-1 text-xs text-[#4a5565]">{t.form.cvHint}</p>
              {cvFile && (
                <div className="mt-3 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                  <FileText className="w-5 h-5 text-[#013a0f] shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[#013a0f] flex-1 truncate">{cvFile.name}</span>
                  <button
                    type="button"
                    onClick={clearCv}
                    className="p-2 rounded-lg hover:bg-gray-200 text-[#013a0f] min-h-11 min-w-11 inline-flex items-center justify-center"
                    aria-label={t.form.removeCvAria}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              {errors.cv && <p className={errorClass}>{errors.cv}</p>}
            </div>

            <div>
              <label htmlFor="career-notes" className={labelClass}>
                {t.form.labels.notes}
              </label>
              <textarea
                id="career-notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className={`${inputClass} resize-none`}
                placeholder={t.form.placeholders.notes}
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
                {t.form.labels.privacyConsent} <span className="text-red-500">*</span>
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
                <span>{t.form.submitting}</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>{t.form.submit}</span>
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
});

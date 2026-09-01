import { FlagES } from '../components/icons/FlagES';
import { FlagUS } from '../components/icons/FlagUS';
import { useCareersLang } from './CareersLangContext';
import type { CareerLang } from './careers';

const LANG_OPTIONS: { code: CareerLang; label: string; Flag: typeof FlagUS }[] = [
  { code: 'en', label: 'English', Flag: FlagUS },
  { code: 'es', label: 'Español', Flag: FlagES },
];

type CareersLanguageSwitcherProps = {
  className?: string;
};

export function CareersLanguageSwitcher({ className = '' }: CareersLanguageSwitcherProps) {
  const { lang, setLang, t } = useCareersLang();

  const handleSelect = (next: CareerLang) => {
    if (next !== lang) {
      setLang(next);
    }
  };

  return (
    <div
      className={`inline-flex max-w-full items-center ${className}`}
      role="group"
      aria-label={t.langSwitcher.label}
    >
      {LANG_OPTIONS.map(({ code, label, Flag }, index) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleSelect(code)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-semibold transition-all duration-200 min-h-9 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB714] focus-visible:ring-offset-2 ${
              index === 0 ? 'rounded-l-full' : 'rounded-r-full -ml-px'
            } ${
              isActive
                ? 'bg-[#013a0f] text-white border-2 border-[#013a0f]'
                : 'bg-transparent text-[#013a0f] border-2 border-[#013a0f] hover:bg-[#013a0f]/5'
            }`}
          >
            <Flag />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

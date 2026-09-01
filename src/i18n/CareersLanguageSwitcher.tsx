import { useCareersLang } from './CareersLangContext';
import type { CareerLang } from './careers';

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
      className={`inline-flex items-center ${className}`}
      role="group"
      aria-label={t.langSwitcher.label}
    >
      {(['en', 'es'] as const).map((code) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleSelect(code)}
            aria-pressed={isActive}
            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all duration-200 min-h-9 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB714] focus-visible:ring-offset-2 ${
              code === 'en' ? 'rounded-l-full' : 'rounded-r-full -ml-px'
            } ${
              isActive
                ? 'bg-[#013a0f] text-white border-2 border-[#013a0f]'
                : 'bg-transparent text-[#013a0f] border-2 border-[#013a0f] hover:bg-[#013a0f]/5'
            }`}
          >
            {t.langSwitcher[code]}
          </button>
        );
      })}
    </div>
  );
}

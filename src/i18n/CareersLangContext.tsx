import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { CAREERS_COPY, type CareerLang } from './careers';

const STORAGE_KEY = 'kbm_careers_lang';

type CareersLangContextValue = {
  lang: CareerLang;
  setLang: (lang: CareerLang) => void;
  t: (typeof CAREERS_COPY)[CareerLang];
};

const CareersLangContext = createContext<CareersLangContextValue | null>(null);

function isCareerLang(value: string | null): value is CareerLang {
  return value === 'en' || value === 'es';
}

export function CareersLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<CareerLang>('en');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isCareerLang(stored)) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: CareerLang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: CAREERS_COPY[lang],
    }),
    [lang, setLang]
  );

  return (
    <CareersLangContext.Provider value={value}>{children}</CareersLangContext.Provider>
  );
}

export function useCareersLang() {
  const context = useContext(CareersLangContext);
  if (!context) {
    throw new Error('useCareersLang must be used within CareersLangProvider');
  }
  return context;
}

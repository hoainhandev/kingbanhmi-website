import { useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CareerHero } from '../components/CareerHero';
import { CareerBenefits } from '../components/CareerBenefits';
import { CareerForm, type CareerFormHandle } from '../components/CareerForm';
import { CareersLangProvider, useCareersLang } from '../../i18n/CareersLangContext';

function CareersPageContent() {
  const formRef = useRef<CareerFormHandle>(null);
  const { t } = useCareersLang();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = t.meta.title;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content') ?? null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const previousOgTitle = ogTitle?.getAttribute('content') ?? null;
    ogTitle?.setAttribute('content', t.meta.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    const previousOgDescription = ogDescription?.getAttribute('content') ?? null;
    ogDescription?.setAttribute('content', t.meta.description);

    return () => {
      document.title = previousTitle;
      if (meta) {
        if (previousDescription === null) {
          meta.remove();
        } else {
          meta.setAttribute('content', previousDescription);
        }
      }
      if (ogTitle && previousOgTitle !== null) {
        ogTitle.setAttribute('content', previousOgTitle);
      }
      if (ogDescription && previousOgDescription !== null) {
        ogDescription.setAttribute('content', previousOgDescription);
      }
    };
  }, [t.meta.title, t.meta.description]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CareerHero onApplyClick={() => formRef.current?.scrollIntoView()} />
        <div className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <CareerBenefits />
            <CareerForm ref={formRef} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function CareersPage() {
  return (
    <CareersLangProvider>
      <CareersPageContent />
    </CareersLangProvider>
  );
}

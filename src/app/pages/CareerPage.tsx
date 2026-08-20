import { useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CareerHero } from '../components/CareerHero';
import { CareerBenefits } from '../components/CareerBenefits';
import { CareerJobs } from '../components/CareerJobs';
import { CareerForm, type CareerFormHandle } from '../components/CareerForm';

export default function CareerPage() {
  const formRef = useRef<CareerFormHandle>(null);

  const scrollToForm = (position?: string) => {
    if (position) {
      formRef.current?.setPosition(position);
    }
    formRef.current?.scrollIntoView();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CareerHero onApplyClick={() => scrollToForm()} />
        <div className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <CareerBenefits />
            <CareerJobs onApply={(title) => scrollToForm(title)} />
            <CareerForm ref={formRef} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

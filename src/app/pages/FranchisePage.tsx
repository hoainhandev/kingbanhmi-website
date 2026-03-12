import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FranchiseHero } from '../components/FranchiseHero';
import { FranchiseForm } from '../components/FranchiseForm';
import { FranchiseInfo } from '../components/FranchiseInfo';
import { FranchiseDisclaimer } from '../components/FranchiseDisclaimer';

export default function FranchisePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <FranchiseHero />
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <FranchiseInfo />
              <FranchiseForm />
            </div>
            {/* Disclaimer Section */}
            <div className="max-w-5xl mx-auto">
              <FranchiseDisclaimer />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { StorySection } from '../components/StorySection';
import { LocationSection } from '../components/LocationSection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        
        <StorySection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

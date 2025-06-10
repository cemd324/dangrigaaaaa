import HeroSection from '../components/home/HeroSection';
import WhyDangriga from '../components/home/WhyDangriga';
import InvestmentHighlights from '../components/home/InvestmentHighlights';
import LatestUpdates from '../components/home/LatestUpdates';
import ExperienceSection from '../components/home/ExperienceSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <WhyDangriga />
      <InvestmentHighlights />
      <LatestUpdates />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
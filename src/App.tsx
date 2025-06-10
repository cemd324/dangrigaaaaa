import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InvestmentPage from './pages/InvestmentPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import DownloadsPage from './pages/DownloadsPage';
import InfrastructureAppendixPage from './pages/InfrastructureAppendixPage';
import LegacyHoldingStudyPage from './pages/articles/LegacyHoldingStudyPage';
import LegacyHoldingEngagementPage from './pages/articles/LegacyHoldingEngagementPage';
import GovernmentConcessionPage from './pages/articles/GovernmentConcessionPage';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/investment" element={<InvestmentPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/infrastructure-appendix" element={<InfrastructureAppendixPage />} />
            <Route path="/articles/legacy-holding-study" element={<LegacyHoldingStudyPage />} />
            <Route path="/articles/legacy-holding-engagement" element={<LegacyHoldingEngagementPage />} />
            <Route path="/articles/government-concession" element={<GovernmentConcessionPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
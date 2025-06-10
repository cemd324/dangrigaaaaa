import InvestmentHero from '../components/investment/InvestmentHero';
import WhyInvest from '../components/investment/WhyInvest';
import FinancialOverview from '../components/investment/FinancialOverview';
import PartnershipModels from '../components/investment/PartnershipModels';
import RiskManagement from '../components/investment/RiskManagement';
import InvestmentProcess from '../components/investment/InvestmentProcess';
import WhyNow from '../components/investment/WhyNow';
import NextSteps from '../components/investment/NextSteps';
import InvestmentFAQ from '../components/investment/InvestmentFAQ';

const InvestmentPage = () => {
  return (
    <div className="pt-16">
      <InvestmentHero />
      <WhyInvest />
      <FinancialOverview />
      <PartnershipModels />
      <RiskManagement />
      <InvestmentProcess />
      <WhyNow />
      <NextSteps />
      <InvestmentFAQ />
    </div>
  );
};

export default InvestmentPage;
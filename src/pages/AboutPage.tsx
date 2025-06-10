import VisionMission from '../components/about/VisionMission';
import ProjectOverview from '../components/about/ProjectOverview';
import Infrastructure from '../components/about/Infrastructure';
import KeyFactors from '../components/about/KeyFactors';
import Impact from '../components/about/Impact';
import Sustainability from '../components/about/Sustainability';
import CallToAction from '../components/about/CallToAction';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <VisionMission />
      <ProjectOverview />
      <Infrastructure />
      <KeyFactors />
      <Impact />
      <Sustainability />
      <CallToAction />
    </div>
  );
};

export default AboutPage;
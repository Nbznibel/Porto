import Navbar from '../global/components/components/Navbar';
import Hero from '../features/home/components/Hero';
import TimelineSection from '../features/home/components/TimelineSection';
import SkillsSection from '../features/home/components/SkillsSection';
import ProjectsSection from '../features/home/components/ProjectsSection';
import ContactSection from '../features/home/components/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TimelineSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
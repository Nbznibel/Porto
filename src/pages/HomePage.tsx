import Navbar from '../global/components/components/Navbar';
import Hero from '../features/home/components/Hero';
import ProjectsSection from '../features/home/components/ProjectsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
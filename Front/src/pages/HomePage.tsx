import { MacbookExperience } from "../features/macbook/components/MacbookExperience";
import { Hero } from "../features/portfolio/components/Hero";
import { PortfolioContent } from "../features/portfolio/components/PortfolioContent";
import { PortfolioNav } from "../features/portfolio/components/PortfolioNav";

const HomePage = () => (
  <div className="min-h-screen bg-paper text-ink">
    <PortfolioNav />
    <main>
      <MacbookExperience>
        <Hero />
        <PortfolioContent />
      </MacbookExperience>
    </main>
  </div>
);

export default HomePage;

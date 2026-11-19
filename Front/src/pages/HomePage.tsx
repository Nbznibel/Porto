import { Hero } from "../features/portfolio/components/Hero";
import { PortfolioContent } from "../features/portfolio/components/PortfolioContent";
import { PortfolioNav } from "../features/portfolio/components/PortfolioNav";

const HomePage = () => (
  <div className="min-h-screen bg-paper text-ink">
    <PortfolioNav />
    <main>
      <Hero />
      <PortfolioContent />
    </main>
  </div>
);

export default HomePage;

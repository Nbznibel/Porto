import { skills } from '../data/skills.data';
import SkillCategoryCard from './SkillCategoryCard';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies I work with, grouped by category with proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <SkillCategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
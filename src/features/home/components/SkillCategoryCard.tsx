import type { Skill, SkillCategory } from '../data/skills.data';

interface SkillItemProps {
  skill: Skill;
}

const proficiencyConfig = {
  expert: { label: 'Expert', color: 'text-primary-400 bg-primary-900/50 border-primary-700' },
  advanced: { label: 'Advanced', color: 'text-primary-300 bg-primary-900/30 border-primary-800' },
  intermediate: { label: 'Intermediate', color: 'text-gray-400 bg-slate-700/50 border-slate-600' },
};

const SkillItem = ({ skill }: SkillItemProps) => {
  const proficiency = proficiencyConfig[skill.proficiency];
  
  return (
    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-primary-700 transition-colors">
      <div>
        <span className="text-white font-medium">{skill.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-xs">{skill.years} yrs</span>
        <span className={`px-2 py-0.5 text-xs rounded border ${proficiency.color}`}>
          {proficiency.label}
        </span>
      </div>
    </div>
  );
};

interface SkillCategoryCardProps {
  category: SkillCategory;
}

const SkillCategoryCard = ({ category }: SkillCategoryCardProps) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary-700 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary-900/50 flex items-center justify-center border border-primary-700">
          <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">{category.name}</h3>
      </div>
      
      <div className="space-y-2">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
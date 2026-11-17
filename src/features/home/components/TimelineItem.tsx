import type { Experience } from '../data/experiences.data';

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

const TimelineItem = ({ experience, isLast }: TimelineItemProps) => {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-4 ${experience.isCurrent ? 'bg-primary-500 border-primary-900' : 'bg-primary-500 border-slate-900'} z-10`} />
        {!isLast && <div className="w-0.5 h-full bg-slate-700 absolute top-4" />}
      </div>
      
      <div className="pb-8 flex-1">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary-700 transition-colors duration-300">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold text-white">{experience.title}</h3>
              <p className="text-primary-400 font-medium">{experience.company}</p>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${experience.isCurrent ? 'bg-primary-900/50 text-primary-300 border border-primary-800' : 'bg-slate-700 text-gray-300'}`}>
                {experience.period}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {experience.location}
          </div>
          
          <p className="text-gray-400 text-sm mb-4">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium text-primary-300 bg-primary-900/30 rounded border border-primary-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
import { Button } from '../../../global/components/ui';
import type { Project } from '../data/projects.data';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-primary-900/20 transition-all duration-300 border border-slate-700 hover:border-primary-700">
      <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
        <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-primary-300 bg-primary-900/50 rounded-full border border-primary-800"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button size="sm">View Details</Button>
          <Button variant="outline" size="sm">Live Demo</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
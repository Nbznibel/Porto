import { Button } from '../../../global/components/ui';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium border border-primary-800">
              Hello, I'm Nibel Ben Ezzine
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Full Stack
              <span className="block text-primary-400">Developer</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg">
              I build exceptional digital experiences with modern technologies. 
              Passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                View Projects
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                <span className="text-sm">5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Based in Tunisia</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-primary-900/30 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary-800/20 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl h-full flex items-center justify-center shadow-2xl border border-primary-500/30">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face" 
                  alt="Diya Turamandi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-20 animate-pulse-glow"></div>
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Diya Turamandi</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
            Frontend Developer & UI/UX Designer
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bringing ideas to life with code and creativity ✨
          </p>
          
          {/* Educational Info */}
          <div className="glass-card rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-slate-600">
              <span className="font-semibold">BE Information Science</span><br />
              KLS Gogte Institute of Technology<br />
              <span className="text-purple-600 font-medium">Class of 2027</span>
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProjects}
              className="btn-primary inline-flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

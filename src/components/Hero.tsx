
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center animate-fade-in">
          {/* Name and Photo Row */}
          <div className="flex items-center gap-8 mb-8 flex-wrap justify-center">
            <div>
              <h1 className="name-display">
                DIYA<br />
                TURAMANDI
              </h1>
            </div>
            
            <div className="relative">
              <div className="w-48 h-60 lg:w-56 lg:h-72 rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=600&h=800&fit=crop&crop=face" 
                  alt="Diya Turamandi"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="title-display mb-8">
            Frontend Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Bringing ideas to life with code and creativity. I combine technical skills 
            with design intuition to create beautiful, functional web experiences.
          </p>
          
          <div className="flex gap-4">
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
        
        {/* Educational Info */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-3xl p-6 max-w-md mx-auto hover-lift">
            <p className="text-slate-600">
              <span className="font-semibold gradient-text">BE Information Science</span><br />
              KLS Gogte Institute of Technology<br />
              <span className="text-purple-600 font-medium">Class of 2027</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

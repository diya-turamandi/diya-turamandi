
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Name and Title */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="name-display text-gray-900 mb-4">
                DIYA<br />
                TURAMANDI
              </h1>
              <h2 className="title-display">
                Frontend Developer & UI/UX Designer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Bringing ideas to life with code and creativity. Currently pursuing BE in Information Science at KLS Gogte Institute of Technology.
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
          
          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[28rem] overflow-hidden shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=600&h=800&fit=crop&crop=face" 
                  alt="Diya Turamandi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Educational Info */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-lg p-6 max-w-md mx-auto">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">BE Information Science</span><br />
              KLS Gogte Institute of Technology<br />
              <span className="text-gray-700 font-medium">Class of 2027</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

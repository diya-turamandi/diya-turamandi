
import { useState } from 'react';
import { ArrowRight, Github } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Poodup',
      description: 'A lively web app with playful animations',
      fullDescription: 'Poodup is a vibrant web application that showcases modern UI/UX principles with engaging animations and interactive elements. Built with React and styled with custom CSS animations to create a delightful user experience.',
      image: 'https://i.postimg.cc/4yjhymGb/Screenshot-2025-06-21-231749.png',
      tools: ['React', 'CSS3', 'JavaScript', 'Figma'],
      challenges: 'Creating smooth animations while maintaining performance',
      learnings: 'Frontend Development, Figma',
      github: 'https://github.com/diya-turamandi/pooodup',
      live: '#'
    },
    {
      id: 2,
      title: 'Heal Minds',
      description: 'Mental wellness platform with AI chatbot integration',
      fullDescription: 'A comprehensive mental wellness platform featuring an AI-powered chatbot built with Dialogflow. The platform provides resources, mood tracking, and personalized recommendations for mental health support.',
      image: 'https://i.postimg.cc/0jK0Vg2n/Screenshot-2025-06-21-231919.png',
      tools: ['React', 'Dialogflow', 'Bootstrap', 'API Integration'],
      challenges: 'Integrating Dialogflow API and creating empathetic user interactions',
      learnings: 'AI chatbot development and user experience for sensitive topics',
      github: 'https://github.com/diya-turamandi/heal-minds',
      live: '#'
    },
    {
      id: 3,
      title: 'Geeky Nerdy Pyaar',
      description: 'A love compatibility app with beautiful, playful design',
      fullDescription: 'A playful love compatibility application that combines fun animations with engaging design elements. Users can input their information and receive compatibility scores through an entertaining and visually appealing interface.',
      image: 'https://i.postimg.cc/MT3vvvw3/Screenshot-2025-06-21-232246.png',
      tools: ['HTML', 'CSS', 'JavaScript', 'Animations'],
      challenges: 'Creating engaging animations that enhance rather than distract from functionality',
      learnings: 'Animation timing, user engagement strategies, and responsive design',
      github: '#',
      live: 'https://geekynerdypyaar.onrender.com'
    },
    {
      id: 4,
      title: 'Dora Fly',
      description: 'A fun browser game where players choose a character and dodge obstacles',
      fullDescription: 'Dora Fly is an engaging browser-based game built with vanilla JavaScript. Players control a character that flies through obstacles, featuring smooth gameplay mechanics and progressive difficulty levels.',
      image: 'https://i.postimg.cc/y6Ms8F93/Screenshot-2025-06-21-232049.png',
      tools: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Logic'],
      challenges: 'Implementing smooth game physics and collision detection',
      learnings: 'Game development fundamentals and canvas manipulation',
      github: 'https://github.com/diya-turamandi/dora-fly',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            A showcase of my recent work in web development and UI/UX design
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-pastel-lavender text-purple-700 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                    
                    <div className="flex gap-3">
                      {project.live !== '#' && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-purple-600 transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      )}
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-purple-600 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-slate-600 hover:bg-white transition-colors duration-300"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {selectedProject.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">🛠️ Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-pastel-lavender text-purple-700 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">💪 Challenges</h4>
                  <p className="text-slate-600">{selectedProject.challenges}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">📚 What I Learned</h4>
                  <p className="text-slate-600">{selectedProject.learnings}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.live !== '#' && (
                  <a 
                    href={selectedProject.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    View Live <ArrowRight className="w-4 h-4" />
                  </a>
                )}
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

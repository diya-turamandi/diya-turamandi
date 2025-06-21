
import { Figma, Atom, Layers, Github } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Custom Website Design',
      description: 'Beautiful, responsive websites tailored to your brand and vision',
      icon: '🎨',
      features: ['Responsive Design', 'Modern UI/UX', 'Brand Integration', 'SEO Optimized']
    },
    {
      title: 'UI/UX Redesign',
      description: 'Transform your existing apps and sites with fresh, modern design',
      icon: '✨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      title: 'Frontend Development',
      description: 'React-based development for startups and established businesses',
      icon: Atom,
      features: ['React Development', 'Component Libraries', 'Performance Optimization', 'Cross-browser Testing']
    },
    {
      title: 'Figma Prototyping',
      description: 'Interactive wireframes and prototypes to visualize your ideas',
      icon: Figma,
      features: ['Interactive Prototypes', 'Design Systems', 'Component Libraries', 'Collaboration']
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first designs that work perfectly on all devices',
      icon: Layers,
      features: ['Mobile-First Approach', 'Cross-Device Testing', 'Touch Interactions', 'Performance Focused']
    },
    {
      title: 'Code Review & Consultation',
      description: 'Expert advice on frontend architecture and best practices',
      icon: Github,
      features: ['Code Quality Review', 'Performance Audit', 'Best Practices', 'Technical Consultation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Services I Offer
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            From concept to deployment, I help bring your digital ideas to life with creativity and technical expertise
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glass-card rounded-3xl p-8 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {typeof service.icon === 'string' ? (
                      <span className="text-2xl">{service.icon}</span>
                    ) : (
                      <service.icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">
                Ready to Start Your Project?
              </h3>
              <p className="text-slate-600 mb-6">
                Let's discuss how I can help bring your vision to life with modern design and development
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

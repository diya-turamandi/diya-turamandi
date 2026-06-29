import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Professional Experience
          </h2>
          
          <div className="glass-card rounded-3xl p-8 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800">
                    Frontend Developer Intern
                  </h3>
                  <span className="text-purple-600 font-medium">Yoraa</span>
                </div>
                
                <p className="text-slate-500 text-sm mb-4">Web Development Internship</p>
                
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    Developed an e-commerce website using React.js with responsive and user-friendly UI.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    Converted Figma designs into reusable and responsive React components.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    Integrated APIs for dynamic product data rendering and smooth user interaction.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    Focused on performance optimization, responsiveness, and clean frontend architecture.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

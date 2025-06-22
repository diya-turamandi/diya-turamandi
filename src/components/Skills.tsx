
import { Code, Palette, Coffee, Atom, Layers, Figma, Github, Database, Wind } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: Code, color: 'bg-orange-100 text-orange-600' },
    { name: 'CSS', icon: Palette, color: 'bg-blue-100 text-blue-600' },
    { name: 'JavaScript', icon: Coffee, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'React', icon: Atom, color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Bootstrap', icon: Layers, color: 'bg-purple-100 text-purple-600' },
    { name: 'Tailwind CSS', icon: Wind, color: 'bg-teal-100 text-teal-600' },
    { name: 'Figma', icon: Figma, color: 'bg-pink-100 text-pink-600' },
    { name: 'GitHub', icon: Github, color: 'bg-gray-100 text-gray-600' },
    { name: 'MySQL', icon: Database, color: 'bg-blue-100 text-blue-600' },
    { name: 'Python', icon: null, color: 'bg-green-100 text-green-600' },
    { name: 'C Programming', icon: null, color: 'bg-red-100 text-red-600' },
    { name: 'UI/UX Design', icon: null, color: 'bg-indigo-100 text-indigo-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-white/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Here are the tools and technologies I use to bring creative ideas to life
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="glass-card rounded-2xl p-6 text-center hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${skill.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon ? (
                    <skill.icon className="w-8 h-8" />
                  ) : (
                    <div className="text-2xl font-bold">
                      {skill.name === 'C Programming' ? 'C' : 
                       skill.name === 'Python' ? 'Py' : 'UI'}
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-slate-700 group-hover:text-purple-600 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">
                What I'm Currently Learning
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium">
                  Three.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

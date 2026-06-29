import { Code, Globe, Server, Wrench, Palette, Atom, Layers, Wind, Database, Github, Figma } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'bg-orange-100 text-orange-600',
      skills: ['Python (Advanced)', 'C', 'C++', 'Java']
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'bg-blue-100 text-blue-600',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend Technologies',
      icon: Server,
      color: 'bg-green-100 text-green-600',
      skills: ['Node.js', 'MySQL', 'MongoDB', 'REST APIs', 'Flask']
    },
    {
      title: 'Tools & Cloud',
      icon: Wrench,
      color: 'bg-purple-100 text-purple-600',
      skills: ['Git', 'GitHub', 'UI Path', 'Docker', 'Salesforce', 'Tinkercad']
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      color: 'bg-pink-100 text-pink-600',
      skills: ['Figma', 'WordPress', 'Canva', 'Design Thinking', 'UI/UX Design']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            A diverse toolkit spanning programming, web development, backend systems, and design
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="glass-card rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-slate-800">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

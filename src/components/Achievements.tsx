import { Award, Users, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Web Coordinator — ACM Student Chapter',
      description: 'Served as the Web Coordinator, managing and maintaining the club\'s web presence. Actively contributed to organizing hackathons, coding contests, technical workshops, and student engagement events while collaborating with the core team to ensure successful execution.',
      color: 'bg-[#d4af37]/10 text-[#d4af37]'
    },
    {
      icon: Users,
      title: 'Board Member — The Change Makers Society (CMS)',
      description: 'Actively contributed to planning and organizing social impact initiatives, awareness campaigns, and community events. Collaborated with team members to successfully execute various student engagement activities.',
      color: 'bg-[#f472b6]/10 text-[#f472b6]'
    },
    {
      icon: Trophy,
      title: 'Runner-up — Treasure Hunt at Aura 2025',
      description: 'Secured runner-up position in the Treasure Hunt competition at Aura 2025, demonstrating teamwork, problem-solving skills, and competitive spirit.',
      color: 'bg-[#facc15]/10 text-[#facc15]'
    },
    {
      icon: Trophy,
      title: '2nd Place — Laser Maze Competition',
      description: 'Achieved 2nd place in the Laser Maze competition, showcasing strategic thinking, agility, and precision under pressure.',
      color: 'bg-[#fb923c]/10 text-[#fb923c]'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-[#0d1b3a]/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text font-space-grotesk">
            Certifications & Achievements
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Leadership roles, community involvement, and competitive achievements
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div 
                key={item.title}
                className="glass-card rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 mb-2 font-space-grotesk">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;


const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text font-space-grotesk">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-[#d4af37] font-space-grotesk">
                Hello, I'm Diya!
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm an engineering student at KLS GIT, Belagavi, with a strong passion for 
                frontend development and web technologies. I build responsive, user-friendly 
                web applications using React.js and modern tools, combining technical expertise 
                with design thinking to create impactful digital experiences.
              </p>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                With hands-on experience in e-commerce development, AI-powered platforms, 
                and game development, I bring a versatile skill set to every project. 
                I thrive on turning complex problems into elegant, efficient solutions.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1e3a5f]/60 text-[#ccd6f6] rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-[#1e3a5f]/60 text-[#ccd6f6] rounded-full text-sm font-medium">
                  Detail Oriented
                </span>
                <span className="px-4 py-2 bg-[#1e3a5f]/60 text-[#ccd6f6] rounded-full text-sm font-medium">
                  Team Player
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <h4 className="font-semibold text-[#d4af37] mb-2 font-space-grotesk">Education</h4>
                <p className="text-slate-400">
                  <span className="font-medium text-slate-200">Bachelor of Engineering (B.E.) in Information Science</span><br />
                  KLS Gogte Institute of Technology, Belagavi<br />
                  <span className="text-[#d4af37] font-medium">CGPA: 7 | 2023 — 2027</span>
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <h4 className="font-semibold text-[#d4af37] mb-2 font-space-grotesk">Pre-University</h4>
                <p className="text-slate-400">
                  <span className="font-medium text-slate-200">PUC — KLE Independent PU College</span><br />
                  Belagavi<br />
                  <span className="text-[#d4af37] font-medium">Percentage: 85% | 2021 — 2023</span>
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <h4 className="font-semibold text-[#d4af37] mb-2 font-space-grotesk">SSLC</h4>
                <p className="text-slate-400">
                  <span className="font-medium text-slate-200">St. Xavier's High School</span><br />
                  Belagavi<br />
                  <span className="text-[#d4af37] font-medium">Percentage: 92% | 2009 — 2021</span>
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <h4 className="font-semibold text-[#d4af37] mb-2 font-space-grotesk">Goals</h4>
                <p className="text-slate-400">
                  To leverage my technical skills and creative vision to build 
                  the next generation of web applications that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

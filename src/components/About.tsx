
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-purple-700">
                Hello, I'm Diya! 👋
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                I'm an engineering student from KLS GIT with a creative soul for frontend design. 
                I bring vibrant UIs to life using modern tools and a strong design sense.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                My passion lies in creating digital experiences that are not just functional, 
                but delightful to use. I believe in the power of good design to solve problems 
                and bring joy to users.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-pastel-lavender text-purple-700 rounded-full text-sm font-medium">
                  Creative Problem Solver
                </span>
                <span className="px-4 py-2 bg-pastel-mint text-green-700 rounded-full text-sm font-medium">
                  Detail Oriented
                </span>
                <span className="px-4 py-2 bg-pastel-pink text-pink-700 rounded-full text-sm font-medium">
                  User Focused
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <h4 className="font-semibold text-purple-700 mb-2">🎓 Education</h4>
                <p className="text-slate-600">
                  Bachelor of Engineering in Information Science<br />
                  <span className="font-medium">KLS Gogte Institute of Technology, Belagavi</span><br />
                  Expected Graduation: 2027
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <h4 className="font-semibold text-purple-700 mb-2">💡 Philosophy</h4>
                <p className="text-slate-600">
                  "Design is not just what it looks like and feels like. 
                  Design is how it works." - I strive to create beautiful, 
                  functional experiences that users love.
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-6 hover-lift">
                <h4 className="font-semibold text-purple-700 mb-2">🚀 Goals</h4>
                <p className="text-slate-600">
                  To combine technical skills with creative vision to build 
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

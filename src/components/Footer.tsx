
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Diya Turamandi
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Frontend Developer & UI/UX Designer passionate about creating 
                beautiful, functional web experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Let's Connect</h4>
              <div className="space-y-2 text-slate-400">
                <p>📧 diyaturamandi@gmail.com</p>
                <p>📱 +91 8618657239</p>
                <p>🎓 KLS GIT, Class of 2027</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Diya Turamandi. Made with ❤️ and lots of ☕
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="https://instagram.com/diya_turamandi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors duration-300">
                Instagram
              </a>
              <a href="https://github.com/diya-turamandi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
                GitHub
              </a>
              <a href="https://linkedin.com/in/diya-turamandi-007875263" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

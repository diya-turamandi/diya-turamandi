
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020c1b] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text font-space-grotesk">
                Diya Turamandi
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Frontend Developer & Web Developer passionate about creating 
                beautiful, functional web experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#d4af37] font-space-grotesk">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-slate-400 hover:text-[#e6f1ff] transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-[#d4af37] font-space-grotesk">Let's Connect</h4>
              <div className="space-y-2 text-slate-400">
                <p>diyaturamandi@gmail.com</p>
                <p>+91-8618657239</p>
                <p>KLS GIT, Class of 2027</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#1e3a5f]/50 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 Diya Turamandi. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="https://instagram.com/diya_turamandi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#d4af37] transition-colors duration-300">
                Instagram
              </a>
              <a href="https://github.com/diya-turamandi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#e6f1ff] transition-colors duration-300">
                GitHub
              </a>
              <a href="https://linkedin.com/in/diya-turamandi-007875263" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#64b5f6] transition-colors duration-300 flex items-center gap-1">
                <Linkedin className="w-4 h-4" />
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

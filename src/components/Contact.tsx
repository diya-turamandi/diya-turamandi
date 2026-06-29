import { useState } from 'react';
import { Instagram, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_f91qbr9';
  const EMAILJS_TEMPLATE_ID = 'template_9b8mc1l';
  const EMAILJS_PUBLIC_KEY = 'iFsOlnSB43IgPjIiD';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Diya',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/diya_turamandi',
      color: 'hover:text-[#d4af37]'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/diya-turamandi',
      color: 'hover:text-[#e6f1ff]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/diya-turamandi-007875263',
      color: 'hover:text-[#64b5f6]'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text font-space-grotesk">
            Let's Work Together
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it! Let's create something amazing together.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#d4af37] font-space-grotesk">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-[#1e3a5f] bg-[#0a192f]/50 text-slate-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300 disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-xl border border-[#1e3a5f] bg-[#0a192f]/50 text-slate-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300 disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#1e3a5f] bg-[#0a192f]/50 text-slate-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-[#d4af37] font-space-grotesk">
                  Get in touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8962e] rounded-xl flex items-center justify-center">
                      <span className="text-[#0a192f] text-xl font-bold">@</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-300">Email</p>
                      <a href="mailto:diyaturamandi@gmail.com" className="text-[#d4af37] hover:text-[#e8d5a3] transition-colors duration-300">
                        diyaturamandi@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8962e] rounded-xl flex items-center justify-center">
                      <span className="text-[#0a192f] text-xl font-bold">#</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-300">Phone</p>
                      <a href="tel:+91-8618657239" className="text-[#d4af37] hover:text-[#e8d5a3] transition-colors duration-300">
                        +91-8618657239
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-[#d4af37] font-space-grotesk">
                  Follow me online
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-[#112240]/50 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                
                <p className="text-slate-400 mt-4 text-sm">
                  Connect with me on social media to see my latest work and thoughts on design & development!
                </p>
              </div>
              
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#d4af37] font-space-grotesk">
                  Currently Available
                </h3>
                <p className="text-slate-400">
                  I'm open to new opportunities and exciting projects. 
                  Let's discuss how we can work together to create something amazing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

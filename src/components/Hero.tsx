
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) - 0.5;
      const y = ((e.clientY - top) / height) - 0.5;
      
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg)`;
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      containerRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    const container = containerRef.current;
    
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,175,249,0.08),transparent_60%)]"></div>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="space-y-4">
              <div className="chip chip-primary animate-fade-in animate-delay-100">
                Software Engineer & Developer
              </div>
              <h1 className="heading-xl animate-fade-in animate-delay-200">
                Sushant Dhondiba <br /> Mahadwad
              </h1>
              <p className="text-lg text-muted-foreground mt-6 animate-fade-in animate-delay-300">
                I craft elegant digital solutions with modern technologies, focusing on clean code, intuitive user experiences, and scalable architecture.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-8 animate-fade-in animate-delay-400">
                <a href="#projects" className="button-primary">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="/resume.pdf" className="button-outline" download>
                  <Download size={16} className="mr-2" /> Resume
                </a>
              </div>
              
              <div className="flex gap-5 mt-8 animate-fade-in animate-delay-500">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-secondary transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-secondary transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2" ref={containerRef}>
            <div className="relative h-[350px] md:h-[450px] w-full transition-transform duration-300">
              <div className="glass-card absolute inset-0 rounded-2xl overflow-hidden p-4 transition-all duration-300">
                <img 
                  src="/profile.jpg" 
                  alt="Sushant Dhondiba Mahadwad" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-primary/10 backdrop-blur-md animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-secondary animate-float animate-delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

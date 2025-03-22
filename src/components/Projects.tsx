import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with product management, cart functionality, user authentication, and payment integration.',
      image: 'https://images.unsplash.com/photo-1565239356257-5edc44e51d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com'
    },
    {
      title: 'Project Management System',
      description: 'A collaborative project management tool with real-time updates, task tracking, calendar integration, and team communication.',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'React Query'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'An advanced analytics platform with machine learning capabilities for data visualization and predictive modeling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['TypeScript', 'Python', 'TensorFlow', 'D3.js', 'Flask'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,175,249,0.05),transparent_60%)]"></div>
      <div className="container max-w-6xl mx-auto px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <div className="chip chip-primary inline-block mb-4">Recent Work</div>
          <h2 className="heading-lg">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of my latest developments, demonstrating my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card relative overflow-hidden rounded-xl glass-card transition-all duration-500 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="heading-sm mb-2 transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="chip chip-secondary text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

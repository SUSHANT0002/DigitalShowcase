import React, { useRef, useEffect } from 'react';
import { Code, Database, Globe, Layout, Terminal, Palette } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const skills: Skill[] = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Frontend',
      items: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vue.js', 'HTML5/CSS3']
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Django', 'SQL', 'MongoDB']
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: 'UI Frameworks',
      items: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Chakra UI', 'Styled Components']
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: 'Tools',
      items: ['Git', 'Docker', 'Webpack', 'Jest', 'CI/CD', 'AWS']
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Services',
      items: ['REST APIs', 'GraphQL', 'Firebase', 'Vercel', 'Netlify', 'Heroku']
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Design',
      items: ['Figma', 'Adobe XD', 'Responsive Design', 'UI/UX', 'Wireframing', 'Prototyping']
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

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-secondary/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(57,175,249,0.05),transparent_50%)]"></div>
      <div className="container max-w-6xl mx-auto px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <div className="chip chip-primary inline-block mb-4">My Expertise</div>
          <h2 className="heading-lg">Technical Skills & Proficiencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A comprehensive overview of my technical capabilities, tools, and technologies that I leverage to build powerful and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  {skill.icon}
                </div>
                <h3 className="heading-sm">{skill.title}</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {skill.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2">
                    <span className="block w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

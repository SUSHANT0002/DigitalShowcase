
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import { ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>
      
      <footer className="bg-secondary py-8 px-6 mt-10">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sushant Dhondiba Mahadwad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default Layout;

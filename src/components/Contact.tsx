import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(57,175,249,0.08),transparent_60%)]"></div>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="chip chip-primary inline-block mb-4">Get in Touch</div>
          <h2 className="heading-lg">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in animate-delay-200">
            <div className="glass-card rounded-xl p-8">
              <h3 className="heading-md mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Send size={16} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="animate-fade-in animate-delay-400">
            <div className="glass-card rounded-xl p-8">
              <h3 className="heading-md mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:sushant@example.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sushant@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Github, Linkedin } from 'lucide-react';

export default Contact;
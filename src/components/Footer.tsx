import { Instagram, ArrowUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'TikTok' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-wider">
              <span className="hero-text">ALEX NGUYEN</span>
            </div>
            <p className="text-muted-foreground">
              Professional filmmaker creating compelling visual stories worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-accent smooth-transition">Home</a>
              <a href="#work" className="text-muted-foreground hover:text-accent smooth-transition">Work</a>
              <a href="#about" className="text-muted-foreground hover:text-accent smooth-transition">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-accent smooth-transition">Contact</a>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-accent/10 hover:text-accent"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              contact@alextnguyen.com<br />
              (714) 603-8075
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Alex Nguyen. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
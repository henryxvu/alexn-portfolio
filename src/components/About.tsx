import { Award, Camera, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Camera, label: 'Projects Completed', value: '150+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Globe, label: 'Countries Worked', value: '20+' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="hero-text">ABOUT</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Professional filmmaker with over a decade of experience creating compelling 
                visual stories for global brands and agencies. Specialized in commercial, 
                documentary, and narrative filmmaking.
              </p>
              <p>
                From concept to final cut, I bring creative vision and technical expertise 
                to every project, ensuring each story is told with precision, emotion, and 
                cinematic excellence.
              </p>
              <p>
                Available worldwide for projects that demand the highest level of 
                craftsmanship and creative collaboration.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="p-6 bg-card border-border/50 card-elevated smooth-transition hover:border-accent/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
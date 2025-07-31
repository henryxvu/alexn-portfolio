import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - you'll need to replace these with your actual IDs
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Alex Nguyen'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email send failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at contact@alextnguyen.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@alextnguyen.com' },
    { icon: Phone, label: 'Phone', value: '(714) 603-8075' },
    { icon: MapPin, label: 'Based in', value: 'Los Angeles, CA' },
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="hero-text">GET IN TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border/50 card-elevated animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name" 
                  required 
                  className="bg-background border-border/50 focus:border-accent" 
                />
                <Input 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name" 
                  required 
                  className="bg-background border-border/50 focus:border-accent" 
                />
              </div>
              <Input 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address" 
                required 
                className="bg-background border-border/50 focus:border-accent" 
              />
              <Input 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject" 
                required 
                className="bg-background border-border/50 focus:border-accent" 
              />
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..." 
                required 
                rows={6}
                className="bg-background border-border/50 focus:border-accent resize-none" 
              />
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium tracking-wide smooth-transition glow-effect"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Let's Create Something Amazing</h3>
              <p className="text-muted-foreground">
                Whether you're looking to create a commercial, documentary, or any visual story, 
                I'm here to help bring your vision to life with creativity and professionalism.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.label} 
                  className="p-4 bg-card border-border/50 smooth-transition hover:border-accent/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Available for projects worldwide. 
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
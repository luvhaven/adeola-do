import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, Download, Github, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { contactData } from "@/data/resumeData";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const contactInfo = {
    heading: "Let's Build Together",
    subheading: "Interested in cloud infrastructure solutions or DevOps consulting?",
    email: contactData.email,
    linkedin_url: contactData.linkedin,
    github_url: contactData.github,
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4">{contactInfo.heading}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {contactInfo.subheading}
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className={`p-6 glass-card hover-lift group text-center card-shine stagger-item ${isVisible ? 'visible' : ''}`}>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {contactInfo.email}
              </a>
            </Card>

            <Card className={`p-6 glass-card hover-lift group text-center card-shine stagger-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Linkedin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <a
                href={contactInfo.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Connect on LinkedIn
              </a>
            </Card>

            <Card className={`p-6 glass-card hover-lift group text-center card-shine stagger-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Github className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a
                href={contactInfo.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                View repositories
              </a>
            </Card>
          </div>

          {/* Primary CTAs */}
          <Card className={`p-8 md:p-12 glass-card card-shine reveal-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl">Ready to discuss your infrastructure needs?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you need a technical review, want to discuss a consulting engagement,
                or explore full-time opportunities, I'm here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold hover-glow group"
                  onClick={() => window.location.href = `mailto:${contactInfo.email}?subject=Technical Review Request`}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Technical Review
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/50 hover:bg-accent/10 hover:border-accent text-foreground font-semibold group"
                  onClick={() => window.open('/Adeola_Daniel-Oriazowan-RESUME.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </Card>

          {/* Footer note */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>
              {contactData.availability} •
              Based in {contactData.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

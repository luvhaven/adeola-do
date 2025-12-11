import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, Download, Github, Linkedin } from "lucide-react";
import { contactData } from "@/data/resumeData";
import { motion } from "framer-motion";
import { containerVariants, cardVariants, iconVariants, textVariants } from "@/utils/animations";

const Contact = () => {
  const contactInfo = {
    heading: "Let's Build Together",
    subheading: "Interested in cloud infrastructure solutions or DevOps consulting?",
    email: contactData.email,
    linkedin_url: contactData.linkedin,
    github_url: contactData.github,
  };

  return (
    <section className="py-20 md:py-32 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <h2 className="mb-4">{contactInfo.heading}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {contactInfo.subheading}
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Mail,
                title: "Email",
                content: contactInfo.email,
                href: `mailto:${contactInfo.email}`
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                content: "Connect on LinkedIn",
                href: contactInfo.linkedin_url,
                target: "_blank"
              },
              {
                icon: Github,
                title: "GitHub",
                content: "View repositories",
                href: contactInfo.github_url,
                target: "_blank"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="p-6 glass-card hover-lift group text-center card-shine h-full">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors"
                    variants={iconVariants}
                  >
                    <item.icon className="h-6 w-6 text-accent" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.content}
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 glass-card card-shine">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl">Ready to discuss your infrastructure needs?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you need a technical review, want to discuss a consulting engagement,
                  or explore full-time opportunities, I'm here to help.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold hover-glow group active:scale-95 transition-transform"
                    onClick={() => window.location.href = `mailto:${contactInfo.email}?subject=Technical Review Request`}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Technical Review
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent/50 hover:bg-accent/10 hover:border-accent text-foreground font-semibold group active:scale-95 transition-transform"
                    onClick={() => window.open('/Adeola_Daniel-Oriazowan-RESUME.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

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

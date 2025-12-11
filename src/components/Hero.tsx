import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroClouds from "@/assets/hero-clouds-enhanced.jpg";
import profilePhoto from "@/assets/profile-photo-enhanced.png";
import { motion } from "framer-motion";
import { heroData } from "@/data/resumeData";

const Hero = () => {
  const content = {
    status_text: heroData.statusText,
    headline: heroData.headline,
    job_title: heroData.jobTitle,
    value_proposition: heroData.valueProposition,
    years_experience: heroData.yearsExperience,
    email: heroData.email,
    github_url: heroData.githubUrl,
    linkedin_url: heroData.linkedinUrl,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced background with cloud overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroClouds}
          alt="Cloud computing background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/90" />
        <div className="absolute inset-0 gradient-hero opacity-40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              className="space-y-8 text-center md:text-left order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Status chip */}
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/98 backdrop-blur-2xl border-2 border-accent/50 shadow-2xl shadow-accent/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent))" }}
              >
                <div className="w-3 h-3 rounded-full bg-accent animate-glow-pulse shadow-lg shadow-accent/60" />
                <span className="text-sm font-mono text-foreground font-bold">
                  {content.status_text}
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight bg-clip-text">
                  {content.headline}
                </h1>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">
                  {content.job_title}
                </h2>
              </motion.div>

              {/* Value proposition */}
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-foreground/95 leading-relaxed max-w-2xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {content.value_proposition}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  className="group bg-accent hover:bg-accent-glow text-accent-foreground font-bold transition-all shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-[1.05] px-10"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Experience
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent/70 hover:bg-accent/15 hover:border-accent text-foreground font-bold backdrop-blur-md bg-card/60 shadow-xl shadow-accent/10 hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.05] transition-all px-10"
                  onClick={() => window.open('/Adeola_Daniel-Oriazowan-RESUME.pdf', '_blank')}
                >
                  Download Resume
                </Button>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex gap-4 md:justify-start justify-center pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {content.github_url && (
                  <a
                    href={content.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-card/90 backdrop-blur-xl border-2 border-border hover:border-accent transition-all hover:scale-110 hover:shadow-2xl hover:shadow-accent/20 shadow-lg"
                    aria-label="GitHub profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {content.linkedin_url && (
                  <a
                    href={content.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-card/90 backdrop-blur-xl border-2 border-border hover:border-accent transition-all hover:scale-110 hover:shadow-2xl hover:shadow-accent/20 shadow-lg"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                <a
                  href={`mailto:${content.email}`}
                  className="p-4 rounded-2xl bg-card/90 backdrop-blur-xl border-2 border-border hover:border-accent transition-all hover:scale-110 hover:shadow-2xl hover:shadow-accent/20 shadow-lg"
                  aria-label="Email contact"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right column - Profile photo */}
            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="relative group"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-accent/40 rounded-3xl blur-3xl group-hover:bg-accent/50 transition-all duration-700 animate-pulse" />

                {/* Photo container with enhanced borders */}
                {/* Photo container with enhanced blending */}
                <div className="relative overflow-hidden rounded-[2rem] border-4 border-accent/30 shadow-2xl shadow-accent/20 group-hover:border-accent/60 group-hover:shadow-accent/40 transition-all duration-500 bg-gradient-to-b from-transparent to-accent/10">
                  <img
                    src={profilePhoto}
                    alt="Adeola Daniel-Oriazowan - Cloud Engineer"
                    className="w-full max-w-md h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-normal"
                    style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                  />

                  {/* Advanced blending overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>

                {/* Enhanced floating badge */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-10 py-4 rounded-full bg-card/98 backdrop-blur-2xl border-2 border-accent/60 shadow-2xl shadow-accent/30"
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg font-bold text-foreground whitespace-nowrap">
                    {content.years_experience}+ Years Experience
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

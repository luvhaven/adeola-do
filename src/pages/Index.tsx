import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="metrics">
        <Hero />
        <Metrics />
      </div>
      <Experience />
      <div id="tech-stack">
        <TechStack />
      </div>
      <Certifications />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;

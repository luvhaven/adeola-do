import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, Database, Network, Server, Shield, Terminal, Zap, Container, Cpu } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skillsData } from "@/data/resumeData";

const iconMap: Record<string, any> = {
  "Cloud Platforms": Cloud,
  "Infrastructure as Code (IaC)": Code,
  "Distributed & Streaming Systems": Network,
  "Containerization & Orchestration": Container,
  "CI/CD & Automation": Zap,
  "Scripting & Programming": Terminal,
  "Monitoring & Observability": Server,
  "Networking & Security": Shield,
  "Databases": Database,
  "Operating Systems": Cpu,
};

const TechStack = () => {
  const { ref, isVisible } = useScrollReveal(0.15);
  const techStack = skillsData;

  return (
    <section ref={ref} className="py-20 md:py-32 gradient-subtle" id="tech-stack">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Production-tested expertise across the modern cloud infrastructure ecosystem
            </p>
          </div>

          {/* Tech grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((categoryData, index) => {
              const Icon = iconMap[categoryData.category] || Cloud;
              return (
                <Card
                  key={index}
                  className={`p-6 hover-lift bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent group card-shine stagger-item ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <Badge
                        variant="outline"
                        className="border-accent/40 text-accent"
                      >
                        Expert
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold">
                      {categoryData.category}
                    </h3>

                    {/* Technologies */}
                    <div className="space-y-2">
                      {categoryData.skills.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-foreground/80 font-medium">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

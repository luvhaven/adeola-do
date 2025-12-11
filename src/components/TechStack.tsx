import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, Database, Network, Server, Shield, Terminal, Zap, Container, Cpu } from "lucide-react";
import { skillsData } from "@/data/resumeData";
import { motion } from "framer-motion";
import { containerVariants, cardVariants, iconVariants, textVariants } from "@/utils/animations";

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
  const techStack = skillsData;

  return (
    <section className="py-20 md:py-32 gradient-subtle" id="tech-stack">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <h2 className="mb-4">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Production-tested expertise across the modern cloud infrastructure ecosystem
            </p>
          </motion.div>

          {/* Tech grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {techStack.map((categoryData, index) => {
              const Icon = iconMap[categoryData.category] || Cloud;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card
                    className="p-6 glass-card hover-lift group card-shine h-full"
                    style={{ background: 'transparent' }}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                          variants={iconVariants}
                        >
                          <Icon className="h-6 w-6 text-accent" />
                        </motion.div>
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

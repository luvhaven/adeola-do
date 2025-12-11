import { Card } from "@/components/ui/card";
import { Cloud, Award, Boxes, Rocket } from "lucide-react";
import { metricsData } from "@/data/resumeData";
import { motion } from "framer-motion";
import { containerVariants, cardVariants, iconVariants, textVariants } from "@/utils/animations";

const iconMap: Record<string, any> = {
  Cloud,
  Award,
  Boxes,
  Rocket,
};

const Metrics = () => {
  const metrics = metricsData;

  return (
    <section className="py-20 md:py-32 gradient-subtle" id="metrics">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
          >
            <h2 className="mb-4">Production Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable outcomes from enterprise-scale cloud infrastructure projects
            </p>
          </motion.div>

          {/* Metrics grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {metrics.map((metric, index) => {
              const IconComponent = iconMap[metric.icon] || Cloud;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card className="p-6 glass-card hover-lift group card-shine h-full" style={{ background: 'transparent' }}>
                    <div className="space-y-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                        variants={iconVariants}
                      >
                        <IconComponent className="h-6 w-6 text-accent" />
                      </motion.div>

                      <div>
                        <motion.div
                          className="text-4xl font-bold text-foreground mb-1"
                          initial={{ scale: 0.5, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 100, delay: 0.5 + (index * 0.1) }}
                        >
                          {metric.value}
                        </motion.div>
                        <div className="text-lg font-semibold text-foreground mb-2">
                          {metric.label}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {metric.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Professional summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="mt-12 p-8 glass-card border-accent/20">
              <div className="max-w-4xl mx-auto">
                <h3 className="mb-4 text-center">About</h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Cloud DevOps Engineer with 5+ years of hands-on experience designing, building, and
                  automating secure, scalable cloud-native infrastructures across AWS, Azure, and GCP.
                  Expertise in Infrastructure as Code, container orchestration, distributed systems, and CI/CD
                  pipelines. Adept at delivering fintech-grade solutions with a focus on reliability, maintainability,
                  and automation. Proven ability to streamline infrastructure operations, enhance system security,
                  and optimize performance in production environments.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;

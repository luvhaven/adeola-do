import { Card } from "@/components/ui/card";
import { Cloud, Award, Boxes, Rocket } from "lucide-react";
import { metricsData } from "@/data/resumeData";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { containerVariants, cardVariants, iconVariants, textVariants } from "@/utils/animations";
import { useEffect, useRef } from "react";

const iconMap: Record<string, any> = {
  Cloud,
  Award,
  Boxes,
  Rocket,
};

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // Extract number and suffix (e.g., "50+" -> 50, "+")
  const match = value.match(/([\d.]+)(.*)/);
  const numberValue = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2
  });

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(numberValue);
    }
  }, [isInView, numberValue, springValue]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
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
          // whileInView="visible" -> Removed to allow individual card triggers
          >
            {metrics.map((metric, index) => {
              const IconComponent = iconMap[metric.icon] || Cloud;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
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
                          className="text-4xl font-bold text-foreground mb-1 tabular-nums"
                        >
                          <Counter value={metric.value} />
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
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
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

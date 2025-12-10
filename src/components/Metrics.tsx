import { Card } from "@/components/ui/card";
import { Cloud, Award, Boxes, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { metricsData } from "@/data/resumeData";

const iconMap: Record<string, any> = {
  Cloud,
  Award,
  Boxes,
  Rocket,
};

const Metrics = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const metrics = metricsData;

  return (
    <section ref={ref} className="py-20 md:py-32 gradient-subtle" id="metrics">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4">Production Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable outcomes from enterprise-scale cloud infrastructure projects
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = iconMap[metric.icon] || Cloud;
              return (
                <Card
                  key={index}
                  className={`p-6 hover-lift bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent group card-shine stagger-item ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>

                    <div>
                      <div className="text-4xl font-bold text-foreground mb-1">
                        {metric.value}
                      </div>
                      <div className="text-lg font-semibold text-foreground mb-2">
                        {metric.label}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Professional summary */}
          <Card className="mt-12 p-8 bg-card/60 backdrop-blur-sm border-accent/20">
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
        </div>
      </div>
    </section>
  );
};

export default Metrics;

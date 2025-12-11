import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experienceData } from "@/data/resumeData";
import { motion } from "framer-motion";
import { containerVariants, cardVariants, textVariants } from "@/utils/animations";

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-background">
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
                        <h2 className="mb-4">Professional Experience</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Building and scaling cloud-native infrastructures for mission-critical applications
                        </p>
                    </motion.div>

                    {/* Experience timeline */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <Card className="overflow-hidden glass-card hover-lift group card-shine">
                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                            <div className="flex-1">
                                                <div className="flex items-start gap-3 mb-2">
                                                    <div className="mt-1 p-2 rounded-lg bg-accent/10 text-accent">
                                                        <Briefcase className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-foreground mb-1">
                                                            {exp.role}
                                                        </h3>
                                                        <p className="text-lg font-semibold text-accent">
                                                            {exp.company}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3 ml-14">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="h-4 w-4" />
                                                        {exp.duration}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="h-4 w-4" />
                                                        {exp.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                                                        <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, i) => (
                                                    <Badge
                                                        key={i}
                                                        variant="outline"
                                                        className="border-accent/40 text-foreground hover:bg-accent/10 transition-colors"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

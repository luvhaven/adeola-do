import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";
import { certificationsData } from "@/data/resumeData";
import { motion } from "framer-motion";
import { containerVariants, cardVariants, textVariants } from "@/utils/animations";

const Certifications = () => {
    const completedCerts = certificationsData.filter(c => c.status === 'completed');
    const inProgressCerts = certificationsData.filter(c => c.status === 'in-progress');

    return (
        <section id="certifications" className="py-20 md:py-32 bg-background">
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
                        <h2 className="mb-4">Certifications</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Certified expertise across AWS and Microsoft cloud platforms
                        </p>
                    </motion.div>

                    {/* Completed Certifications */}
                    <motion.div
                        className="mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <CheckCircle2 className="h-6 w-6 text-accent" />
                            Completed Certifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {completedCerts.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={cardVariants}
                                    whileHover="hover"
                                >
                                    <Card className="p-6 glass-card hover-lift group">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-3 rounded-lg bg-accent/10 text-accent">
                                                <CheckCircle2 className="h-6 w-6" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-foreground mb-2">
                                                    {cert.name}
                                                </h4>
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <Badge variant="outline" className="border-accent/40 text-foreground">
                                                        {cert.issuer}
                                                    </Badge>
                                                    <span className="text-sm text-muted-foreground">
                                                        {cert.year}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* In Progress Certifications */}
                    {inProgressCerts.length > 0 && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Clock className="h-6 w-6 text-accent" />
                                In Progress
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {inProgressCerts.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={cardVariants}
                                        whileHover="hover"
                                    >
                                        <Card className="p-6 glass-card hover-lift group">
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 p-3 rounded-lg bg-accent/10 text-accent">
                                                    <Clock className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-foreground mb-2">
                                                        {cert.name}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2 items-center">
                                                        <Badge variant="outline" className="border-accent/40 text-foreground">
                                                            {cert.issuer}
                                                        </Badge>
                                                        <Badge className="bg-accent/20 text-accent border-accent/40">
                                                            In Progress
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
